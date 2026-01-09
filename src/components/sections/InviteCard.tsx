import { component$, useSignal, useVisibleTask$, type Signal } from '@builder.io/qwik';

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default component$(() => {
  const preview = useSignal<HTMLCanvasElement>() as Signal<HTMLCanvasElement>;

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.TextureLoader().load('');

    // get width of element
    const width = preview.value.clientWidth;
    const height = preview.value.clientHeight;

    // Camera
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.x = 0;
    camera.position.y = 1;
    camera.position.z = -7;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: preview.value,
      antialias: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    renderer.render(scene, camera);

    // Camera Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.update();

    // Lights
    const pointLight = new THREE.DirectionalLight(0xFDE2C1, 0.2);
    pointLight.position.set(1, 0, -20);
    pointLight.castShadow = true;
    const ambientLight = new THREE.AmbientLight(0xffffff, 3);
    scene.add(pointLight, ambientLight);

    // Card Geometry and Materials
    const cardGeometry = new THREE.BoxGeometry(4, 3, 0.05); // Width, Height, Depth
    const textureLoader = new THREE.TextureLoader();
    const frontTexture = textureLoader.load('/invite/card-front.jpg');
    frontTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();
    frontTexture.colorSpace = THREE.SRGBColorSpace;
    const backTexture = textureLoader.load('/invite/card-back.jpg');
    backTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();
    backTexture.colorSpace = THREE.SRGBColorSpace;

    const frontMaterial = new THREE.MeshStandardMaterial({ map: frontTexture, roughness: 0.2 });
    const backMaterial = new THREE.MeshStandardMaterial({ map: backTexture, roughness: 0.2 });
    const sideMaterial = new THREE.MeshStandardMaterial({ color: 0x000000, roughness: 0.2 });

    // Create an array of materials for each side of the box (front and back)
    const materials = [
      sideMaterial,  // Right side
      sideMaterial,  // Left side
      sideMaterial,  // Top side
      sideMaterial,  // Bottom side
      frontMaterial, // Front face
      backMaterial,   // Back face
    ];

    // Adding the Card to the Scene
    const cardMesh = new THREE.Mesh(cardGeometry, materials);
    scene.add(cardMesh);

    // Animation Loop
    const clock = new THREE.Clock();
    function animate() {
      const delta = clock.getDelta(); // seconds since last frame

      // rotate at a fixed speed (radians per second)
      const rotationSpeed = 1; // adjust to taste
      cardMesh.rotation.y += rotationSpeed * delta;

      renderer.render(scene, camera);
      controls.update();
      requestAnimationFrame(animate);
    }
    animate();
  });

  return (
    <>
      <div class="flex flex-col px-10" id="invite">
        <h1 class="font-semibold text-white text-3xl sm:text-5xl my-4 sm:mb-8">
          We're having our <span class="text-burger-300">5th anniversary!</span>
        </h1>
        <p class="text-lum-text-secondary text-lg md:text-xl">
          We're having a special event to celebrate our 5th anniversary and are personally inviting you to join us!
        </p>
      </div>

      <canvas ref={preview} id="preview" class={{
        'mt-10 w-full h-[60svh] lum-card p-0 backdrop-blur-md': true,
      }} />
    </>
  );
});