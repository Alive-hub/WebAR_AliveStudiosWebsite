import * as THREE from 'https://unpkg.com/three@0.126.1/build/three.module.js';

const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({color: 0xffffff });

const cube = new THREE.Mesh(geometry, material);



export default cube;