<template>
  <div class="container">
    <canvas id="three" ref="canvas" class="canvas" :width="WIDTH" :height="HEIGHT"/>
  </div>
</template>
<script setup>
// https://juejin.cn/post/6973865268426571784
import { ref, toRefs } from '@vue/reactivity';
import { defineProps, onMounted, watch } from '@vue/runtime-core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
const props = defineProps({
  'shape': {
    type: String,
    default: 'cube',
  },
});
const { shape } = toRefs(props);

const canvas = ref(null);
const WIDTH = 1200, HEIGHT = 900;
let scene, camera, renderer, controls;
const loop = () => {
  requestAnimationFrame(loop);
  renderer?.render(scene, camera)
}
onMounted(() => {
  // 场景
  scene = new THREE.Scene();
  //镜头
  camera = new THREE.PerspectiveCamera(90, WIDTH / HEIGHT, 0.1, 100);
  camera.position.set(0, 0, 0.01);
  // 渲染
  renderer = new THREE.WebGLRenderer({ canvas: canvas.value, antialias: true });
  renderer.setSize(WIDTH, HEIGHT);
  // 控制器
  controls = new OrbitControls(camera, renderer.domElement);
  watch(shape, (val) => {
    switch (val) {
      case 'cube':     
        cube(scene);
        break;
      case 'sphere':
        sphere(scene)
        break;
      default: 
        console.log('shape change', val)
    }
  }, {
    immediate: true
  })
  loop()
})
const clear = (scene) => {
  scene?.children?.length > 0 && scene.remove(scene.children[0])
}
const cube = (scene) => {
  clear(scene)
  const materials = [
    '../images/scene_left.jpeg',
    '../images/scene_right.jpeg',
    '../images/scene_top.jpeg',
    '../images/scene_bottom.jpeg',
    '../images/scene_front.jpeg',
    '../images/scene_back.jpeg',
  ].map((url) => 
    new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load(new URL(url, import.meta.url).href)
    })
  );
  const box = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1), 
    materials
  )
  box.geometry.scale(1, 1, -1);
  scene.add(box);
}

const sphere = (scene) => {
  clear(scene)
  const materials = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load(new URL('../images/scene.jpeg', import.meta.url).href)
  })
  const ball = new THREE.Mesh(
    new THREE.SphereGeometry(1, 50, 50),
    materials
  )
  ball.geometry.scale(1, 1, -1)
  scene.add(ball)
}

</script>
<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>