export interface ToastOrderTicket {
  id: string;
  orderGuid: string;
  displayNumber: string;
  customerName?: string;
  diningOption: 'TAKE_OUT' | 'DINE_IN' | 'DELIVERY' | 'DRIVE_THRU';
  orderState: 'PREPARING' | 'READY' | 'FULFILLED';
  openedDate: string;
  readyDate?: string;
  estimatedFulfillmentDate?: string;
  totalAmount?: number;
}

export interface ToastApiConfig {
  clientId?: string;
  clientSecret?: string;
  restaurantId?: string;
  baseUrl?: string;
}

export interface ToastItemFulfillment {
  restaurantGuid?: string;
  orderGuid?: string;
  selectionGuid?: string;
  selectionMenuItemGuid?: string;
  selectionMenuItemName?: string;
  selectionMenuItemMultiLocationId?: string;
  ticketGuid?: string;
  ticketFiredAt?: string;
  itemFulfilledAt?: string;
  itemStartedAt?: string;
  itemFulfillmentLevel?: number;
  prepStationGuid?: string | null;
  prepStationName?: string | null;
  prepStationMultiLocationId?: string | null;
  diningOptionGuid?: string | null;
  diningOptionName?: string | null;
  diningOptionBehavior?: string | null;
  courseGuid?: string | null;
  courseName?: string | null;
  orderSource?: string;
}

let cachedToken: string | null = null;
let tokenExpiresAt = 0;

/**
 * Sanitize environment variable values by removing surrounding quotes and whitespace
 */
export function sanitizeEnvVal(val?: string): string | undefined {
  if (!val) return undefined;
  const trimmed = val.trim().replace(/^["']|["']$/g, '');
  return trimmed.length > 0 ? trimmed : undefined;
}

/**
 * Robustly extract customer name from Toast Order object
 */
export function extractCustomerName(ord: any): string | undefined {
  if (!ord) return undefined;

  // 1. Direct customer object on order
  const cust = ord.customer;
  if (cust) {
    if (cust.firstName || cust.lastName) {
      const full = `${cust.firstName || ''} ${cust.lastName || ''}`.trim();
      if (full) return full;
    }
    if (
      cust.fullName &&
      typeof cust.fullName === 'string' &&
      cust.fullName.trim()
    ) {
      return cust.fullName.trim();
    }
  }

  // 2. Check level customer object
  const checkCust = ord.checks?.[0]?.customer;
  if (checkCust) {
    if (checkCust.firstName || checkCust.lastName) {
      const full =
        `${checkCust.firstName || ''} ${checkCust.lastName || ''}`.trim();
      if (full) return full;
    }
    if (
      checkCust.fullName &&
      typeof checkCust.fullName === 'string' &&
      checkCust.fullName.trim()
    ) {
      return checkCust.fullName.trim();
    }
  }

  // 3. Tab name on order or check (POS operators type customer name here e.g. "Sabooor")
  const checkTabName = ord.checks?.[0]?.tabName;
  if (checkTabName && typeof checkTabName === 'string' && checkTabName.trim()) {
    return checkTabName.trim();
  }
  if (ord.tabName && typeof ord.tabName === 'string' && ord.tabName.trim()) {
    return ord.tabName.trim();
  }

  // 4. Delivery/takeout recipient name
  const takeoutRecipient =
    ord.takeoutInfo?.recipient?.name || ord.deliveryInfo?.recipient?.name;
  if (
    takeoutRecipient &&
    typeof takeoutRecipient === 'string' &&
    takeoutRecipient.trim()
  ) {
    return takeoutRecipient.trim();
  }
  const deliveryCust = ord.deliveryInfo?.deliveryCustomer;
  if (deliveryCust && (deliveryCust.firstName || deliveryCust.lastName)) {
    const full =
      `${deliveryCust.firstName || ''} ${deliveryCust.lastName || ''}`.trim();
    if (full) return full;
  }

  return undefined;
}

/**
 * Helper: Fetch orders for present day (today)
 */
function getTodayBusinessDate(): string {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}${month}${day}`;
}

function getTodayIsoRange(): { startDate: string; endDate: string } {
  const date = new Date();
  const startOfDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    0,
    0,
    0,
    0
  );
  const endOfDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    23,
    59,
    59,
    999
  );

  return {
    startDate: startOfDay.toISOString(),
    endDate: endOfDay.toISOString(),
  };
}

/**
 * Fetch OAuth 2.0 Access Token from Toast API (Read-only)
 */
export async function getToastToken(
  clientId: string,
  clientSecret: string,
  baseUrl = 'https://ws-api.toasttab.com'
): Promise<string> {
  const now = Date.now();
  if (cachedToken && now < tokenExpiresAt) {
    return cachedToken;
  }

  const cleanClientId = sanitizeEnvVal(clientId);
  const cleanClientSecret = sanitizeEnvVal(clientSecret);
  const cleanBaseUrl = (
    sanitizeEnvVal(baseUrl) || 'https://ws-api.toasttab.com'
  ).replace(/\/$/, '');

  if (!cleanClientId || !cleanClientSecret) {
    throw new Error(
      'Toast client ID or client secret is empty after sanitization.'
    );
  }

  // Primary attempt with TOAST_MACHINE_CLIENT
  const response = await fetch(
    `${cleanBaseUrl}/authentication/v1/authentication/login`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        clientId: cleanClientId,
        clientSecret: cleanClientSecret,
        userAccessType: 'TOAST_MACHINE_CLIENT',
      }),
    }
  );

  if (!response.ok) {
    const errText = await response.text();
    console.warn(
      `\n⚠️ [Toast API Authentication Failed (Status ${response.status})]\n` +
        `Target Endpoint: ${cleanBaseUrl}/authentication/v1/authentication/login\n` +
        `Client ID (sanitized): "${cleanClientId.slice(0, 6)}..."\n` +
        `Checklist to fix 401 Unauthorized:\n` +
        ` 1. Confirm TOAST_CLIENT_ID and TOAST_CLIENT_SECRET in .env match Toast Web > Integrations > Toast API access > Manage credentials.\n` +
        ` 2. If using Toast Sandbox credentials, set TOAST_API_BASE_URL=https://ws-sandbox-api.toasttab.com in .env.\n` +
        ` 3. Ensure the API credentials are active and assigned to your restaurant location GUID.\n`
    );
    throw new Error(
      `Toast authentication failed (${response.status}): ${errText}`
    );
  }

  const data = (await response.json()) as {
    token: { accessToken: string } | string;
  };
  const token =
    typeof data.token === 'string' ? data.token : data.token?.accessToken;

  if (!token) {
    throw new Error(
      'Toast authentication payload did not contain an access token.'
    );
  }

  cachedToken = token;
  tokenExpiresAt = Date.now() + 55 * 60 * 1000;
  return cachedToken;
}

export function resetToastTokenCache(): void {
  cachedToken = null;
  tokenExpiresAt = 0;
}

/**
 * Fetch orders from Toast API (orders:read scope - Read-only)
 */
export async function fetchToastOrders(
  config: ToastApiConfig,
  token: string
): Promise<any> {
  const baseUrl = (
    sanitizeEnvVal(config.baseUrl) || 'https://ws-api.toasttab.com'
  ).replace(/\/$/, '');
  const restaurantId = sanitizeEnvVal(config.restaurantId) || '';
  const businessDate = getTodayBusinessDate();

  // Try businessDate parameter first (YYYYMMDD)
  const url = new URL(`${baseUrl}/orders/v2/ordersBulk`);
  url.searchParams.set('businessDate', businessDate);

  let response = await fetch(url.toString(), {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Toast-Restaurant-External-ID': restaurantId,
      'Content-Type': 'application/json',
    },
  });

  // If businessDate returns 400, fallback to startDate and endDate ISO range
  if (response.status === 400) {
    const { startDate, endDate } = getTodayIsoRange();
    const fallbackUrl = new URL(`${baseUrl}/orders/v2/ordersBulk`);
    fallbackUrl.searchParams.set('startDate', startDate);
    fallbackUrl.searchParams.set('endDate', endDate);

    const fallbackResponse = await fetch(fallbackUrl.toString(), {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Toast-Restaurant-External-ID': restaurantId,
        'Content-Type': 'application/json',
      },
    });

    if (fallbackResponse.ok) {
      response = fallbackResponse;
    }
  }

  if (response.status === 401) {
    resetToastTokenCache();
    throw new Error('401 Unauthorized from Toast API');
  }

  if (!response.ok) {
    throw new Error(
      `Failed to fetch orders (${response.status}): ${await response.text()}`
    );
  }

  return response.json();
}

/**
 * Fetch kitchen fulfillment events (kitchen:read scope - Read-only)
 * Requires businessDate query parameter in YYYYMMDD format.
 */
export async function fetchKitchenFulfillments(
  config: ToastApiConfig,
  token: string,
  businessDate?: string
): Promise<ToastItemFulfillment[]> {
  const baseUrl = (
    sanitizeEnvVal(config.baseUrl) || 'https://ws-api.toasttab.com'
  ).replace(/\/$/, '');
  const restaurantId = sanitizeEnvVal(config.restaurantId) || '';
  const dateParam = businessDate || getTodayBusinessDate();
  const url = new URL(`${baseUrl}/kitchen/v1/export/itemFulfillments`);
  url.searchParams.set('businessDate', dateParam);

  const response = await fetch(url.toString(), {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Toast-Restaurant-External-ID': restaurantId,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  if (response.status === 204) {
    return [];
  }

  if (response.status === 401) {
    resetToastTokenCache();
    throw new Error('401 Unauthorized from Toast Kitchen API');
  }

  if (!response.ok) {
    console.warn(
      `Toast Kitchen Fulfillments API returned status ${response.status}: ${await response.text()}`
    );
    return [];
  }

  const data = await response.json();
  return Array.isArray(data) ? data : [];
}

/**
 * Read-only fetcher combining Toast orders and kitchen fulfillments for Public Board
 */
export async function getLiveToastOrders(
  config: ToastApiConfig,
  forceMock = false
): Promise<{
  orders: ToastOrderTicket[];
  isMock: boolean;
}> {
  const clientId = sanitizeEnvVal(config.clientId);
  const clientSecret = sanitizeEnvVal(config.clientSecret);
  const restaurantId = sanitizeEnvVal(config.restaurantId);

  if (forceMock || !clientId || !clientSecret || !restaurantId) {
    return {
      orders: getMockToastOrders(),
      isMock: true,
    };
  }

  try {
    const token = await getToastToken(clientId, clientSecret, config.baseUrl);
    const rawOrders = await fetchToastOrders(config, token);
    const fulfillments = await fetchKitchenFulfillments(config, token);

    const mappedOrders: ToastOrderTicket[] = (
      Array.isArray(rawOrders) ? rawOrders : []
    ).map((ord: any, idx: number) => {
      const displayNo = ord.displayNumber || String(100 + (idx % 900));
      const hasOrderFulfillment = fulfillments.some(
        (f: ToastItemFulfillment) =>
          f.orderGuid === ord.guid && Boolean(f.itemFulfilledAt)
      );
      const isPaidOrFulfilled = Boolean(
        ord.paidDate ||
        hasOrderFulfillment ||
        ord.approvalStatus === 'APPROVED' ||
        ord.closedDate
      );
      const orderState: ToastOrderTicket['orderState'] = isPaidOrFulfilled
        ? 'READY'
        : 'PREPARING';

      let estimatedFulfillmentDate =
        ord.promisedDate ||
        ord.estimatedFulfillmentDate ||
        ord.takeoutInfo?.estimatedFulfillmentDate ||
        ord.deliveryInfo?.estimatedFulfillmentDate;
      if (!estimatedFulfillmentDate && ord.createdDate) {
        const openMs = new Date(ord.createdDate).getTime();
        if (!isNaN(openMs)) {
          estimatedFulfillmentDate = new Date(
            openMs + 15 * 60 * 1000
          ).toISOString();
        }
      }

      return {
        id: ord.guid || `ord-${idx}`,
        orderGuid: ord.guid,
        displayNumber: displayNo,
        customerName: extractCustomerName(ord),
        diningOption:
          ord.diningOption?.behavior === 'TAKE_OUT' ? 'TAKE_OUT' : 'DINE_IN',
        orderState,
        openedDate: ord.createdDate || new Date().toISOString(),
        readyDate: ord.paidDate || ord.modifiedDate,
        estimatedFulfillmentDate,
        totalAmount: ord.totalAmount || 0,
      };
    });

    return { orders: mappedOrders, isMock: false };
  } catch (err) {
    console.error(
      'Error fetching live Toast API orders, falling back to mock:',
      err
    );
    return { orders: getMockToastOrders(), isMock: true };
  }
}

/**
 * Generate simulated Toast Order Tickets for Public Pickup Board testing
 */
export function getMockToastOrders(): ToastOrderTicket[] {
  const now = Date.now();
  const minutesAgo = (m: number) => new Date(now - m * 60 * 1000).toISOString();
  const minutesFromNow = (m: number) =>
    new Date(now + m * 60 * 1000).toISOString();

  return [
    {
      id: 'mock-201',
      orderGuid: 'guid-201',
      displayNumber: '201',
      customerName: 'Muhammad S.',
      diningOption: 'TAKE_OUT',
      orderState: 'READY',
      openedDate: minutesAgo(8),
      readyDate: minutesAgo(1),
    },
    {
      id: 'mock-202',
      orderGuid: 'guid-202',
      displayNumber: '202',
      customerName: 'Sarah K.',
      diningOption: 'DINE_IN',
      orderState: 'READY',
      openedDate: minutesAgo(12),
      readyDate: minutesAgo(3),
    },
    {
      id: 'mock-203',
      orderGuid: 'guid-203',
      displayNumber: '203',
      customerName: 'Ahmad R.',
      diningOption: 'TAKE_OUT',
      orderState: 'PREPARING',
      openedDate: minutesAgo(5),
      estimatedFulfillmentDate: minutesFromNow(10),
    },
    {
      id: 'mock-204',
      orderGuid: 'guid-204',
      displayNumber: '204',
      customerName: 'Zayd M.',
      diningOption: 'DELIVERY',
      orderState: 'PREPARING',
      openedDate: minutesAgo(3),
      estimatedFulfillmentDate: minutesFromNow(12),
    },
    {
      id: 'mock-205',
      orderGuid: 'guid-205',
      displayNumber: '205',
      customerName: 'Fatima N.',
      diningOption: 'TAKE_OUT',
      orderState: 'PREPARING',
      openedDate: minutesAgo(2),
      estimatedFulfillmentDate: minutesFromNow(15),
    },
    {
      id: 'mock-206',
      orderGuid: 'guid-206',
      displayNumber: '206',
      customerName: 'Bilal H.',
      diningOption: 'DINE_IN',
      orderState: 'PREPARING',
      openedDate: minutesAgo(1),
      estimatedFulfillmentDate: minutesFromNow(18),
    },
  ];
}
