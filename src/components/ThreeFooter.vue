<script setup>
import { onMounted, ref } from "vue";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const canvasRef = ref(null);

onMounted(() => {
  const canvas = canvasRef.value;

  // Scène
  const scene = new THREE.Scene();

  // Caméra
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 3;

  // Rendu WebGL
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Ajout de lumière
  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(1, 1, 1).normalize();
  scene.add(light);

  // Ajout d'une texture de Terre
  const textureLoader = new THREE.TextureLoader();
  const earthTexture = textureLoader.load("https://threejs.org/examples/textures/earth_atmos_2048.jpg");

  // Création de la sphère (planète)
  const geometry = new THREE.SphereGeometry(1, 64, 64);
  const material = new THREE.MeshStandardMaterial({ map: earthTexture });
  const sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere);

  // Contrôles de la souris
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;

  // Animation de la rotation
  const animate = () => {
    requestAnimationFrame(animate);
    sphere.rotation.y += 0.002; // Rotation lente
    controls.update();
    renderer.render(scene, camera);
  };

  animate();

  // Gestion du redimensionnement
  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
});
</script>

<template>
  <canvas ref="canvasRef"></canvas>
</template>

<style scoped>
canvas {
  display: block;
  width: 100%;
  height: 100%;
}
</style>