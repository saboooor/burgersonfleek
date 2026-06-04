import { RequestEventBase } from '@qwik.dev/router';

// function to fetch place details
async function fetchPlaceDetails(requestEvent: RequestEventBase, kv: Env['bof']) {
  const { env } = requestEvent;
  const apiKey = env.get('GOOGLE_MAPS_API_KEY');
  if (!apiKey) {
    throw new Error('Google Maps API key not configured');
  }
  const placeId = 'ChIJGwNrpL7f1IkRam5-B2BHkw4';

  // initialize Google Maps Places client
  const url = new URL(`https://places.googleapis.com/v1/places/${placeId}`);
  url.searchParams.set('key', apiKey);
  url.searchParams.set('fields', 'reviews,userRatingCount,currentOpeningHours,regularOpeningHours');
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Places API error: ${res.status} ${res.statusText}`);
  }

  const response = await res.json();
  console.log('Places API response:', response);

  if (!response) {
    throw new Error('No response from Places API');
  }

  // cache details in KV with 1 hour expiration
  console.log('Caching fresh data in KV');
  await kv.put('placeDetails', JSON.stringify(response), { expirationTtl: 3600 });

  return response;
}

// endpoint to get place details
export async function getPlaceDetails(requestEvent: RequestEventBase) {
  const { env } = requestEvent;
  const kv = env.get('bof') as unknown as Env['bof'];
  if (!kv) {
    console.error('KV namespace not configured');
    return {};
  }

  const placeDetails = await kv.get('placeDetails');
  let details = placeDetails ? JSON.parse(placeDetails) : null;

  try {
    if (!details) {
      console.debug('No cached data, fetching from Places API');
      details = await fetchPlaceDetails(requestEvent, kv);
      return details;
    }

    const now = Date.now();

    const nextOpenTime = details.currentOpeningHours?.nextOpenTime?.seconds;
    const pastNextOpenTime = nextOpenTime && Number(nextOpenTime) * 1000 < now;

    const nextCloseTime = details.currentOpeningHours?.nextCloseTime?.seconds;
    const pastNextCloseTime = nextCloseTime && Number(nextCloseTime) * 1000 < now;

    // serve from cache if data is less than 1 hour old
    if (!pastNextOpenTime && !pastNextCloseTime) {
      console.debug('Serving cached data');
      return details;
    }
    console.debug('Current open/close time has passed');

    // fetch fresh details from Places API
    details = await fetchPlaceDetails(requestEvent, kv);
  } catch (error) {
    // log error and serve stale data if available
    console.error('Error fetching place details:', error);

    if (!details) return error;
    return details;
  }

  // send fresh details
  console.debug('Serving fresh data from Places API.');
  return details;
}