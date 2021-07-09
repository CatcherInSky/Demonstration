<template>
  <div class="container">
    <canvas id="three" ref="canvas" class="canvas" :width="WIDTH" :height="HEIGHT"/>
  </div>
</template>
<script setup>
import { ref } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
import * as THREE from 'three';
// import.meta
import { OrbitControls } from 'three/examples/js/controls/OrbitControls';

console.log('three', THREE);
const canvas = ref(null);
const WIDTH = 1200, HEIGHT = 900;
let scene, camera, renderer, controls;
const loop = () => {
  requestAnimationFrame(loop);
  render?.render(scene, camera)
}

const cube = () => {
  const materials = [
    '../images/scene_left.jpeg',
    '../images/scene_right.jpeg',
    '../images/scene_top.jpeg',
    '../images/scene_bottom.jpeg',
    '../images/scene_front.jpeg',
    '../images/scene_back.jpeg',
  ].map((url) => {
    new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load(url)
    })
  });

  const box = new THREE.Mesh(new THREE.BoxGeometry(1,1,1), materials)
  scene.add(box);
}
onMounted(() => {

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(90, WIDTH / HEIGHT, 0.1, 100);
  camera.position.set(0, 0, 0.01);
  renderer = new THREE.WebGLRenderer({ canvas: canvas.value, antialias: true });
  //镜头控制器
  controls = new OrbitControls(canvas.value, renderer.domElement);
  cube()
  loop()
})




</script>
<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 100%;
  width: 100%;
  min-height: 500px; */
}
</style>