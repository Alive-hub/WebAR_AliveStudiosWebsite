import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Set up scene, camera, renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Load 3D model
const loader = new GLTFLoader();
loader.load('path/to/model.glb', (gltf) => {
    scene.add(gltf.scene);
    animate();
});

// Orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
camera.position.z = 5;

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

// Click event for triggering animations
renderer.domElement.addEventListener('click', (event) => {
    // Implement raycasting to find clicked part and trigger animation
});