import * as THREE from 'three';

export function initThree(el: HTMLDivElement) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

  const sceneTexture = new THREE.TextureLoader().load(
    'https://www.wallpaperhub.app/_next/image?url=https%3A%2F%2Fcdn.wallpaperhub.app%2Fcloudcache%2F1%2F5%2Fe%2F1%2Fc%2F5%2F15e1c5cb84302fdadce30080216b15bc4058f614.jpg&w=4500&h=3000&q=100',
  );
  scene.background = sceneTexture;

  // To create a cube, we need a BoxGeometry. This is an object that contains all the points (vertices) and fill (faces) of the cube. We'll explore this more in the future.
  const geometry = new THREE.BoxGeometry(1, 1, 1);

  // In addition to the geometry, we need a material to color it.
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

  // A mesh is an object that takes a geometry, and applies a material to it, which we then can insert to our scene, and move freely around.
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 5;

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  el.appendChild(renderer.domElement);

  function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
  animate();
}
