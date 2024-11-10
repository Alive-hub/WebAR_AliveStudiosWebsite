import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeJSCube = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const currentMount = mountRef.current;

        // Create scene
        const scene = new THREE.Scene();

        // Create camera
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;

        // Create renderer
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        currentMount.appendChild(renderer.domElement);

        // Create a cube
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);

            // Rotate the cube for some basic animation
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            renderer.render(scene, camera);
        };

        animate();

        // Cleanup on component unmount
        return () => {
            currentMount.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={mountRef} />;
};

export default ThreeJSCube;
