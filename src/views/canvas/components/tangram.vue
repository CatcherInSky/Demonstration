<template>
  <canvas id="canvas" ref="canvas" width="1024" height="800">
    <!--兼容降错-->
		当前浏览器不支持 Canvas，请更换浏览器后再试
  </canvas>
</template>
<script setup>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
const canvas = ref(null);
const tanGram = [
  {p: [{x: 0, y: 0}, {x: 800, y: 0}, {x: 400, y: 400}], color: '#caff67'},
  {p: [{x: 0, y: 0}, {x: 400, y: 400}, {x: 0, y: 800}], color: '#67beef'},
  {p: [{x: 800, y: 0}, {x: 800, y: 400}, {x: 600, y: 600}, {x: 600, y:200}], color: '#ef3d61'},
  {p: [{x: 600, y: 200}, {x: 600, y: 600}, {x: 400, y: 400}], color: '#f9f51a'},
  {p: [{x: 400, y: 400}, {x: 600, y: 600}, {x: 400, y: 800}, {x: 200, y: 600}], color: '#a594c0'},
  {p: [{x: 200, y: 600}, {x: 400, y: 800}, {x: 0, y: 800}], color: '#fa8ecc'},
  {p: [{x: 800, y: 400}, {x: 800, y: 800}, {x: 400, y: 800}], color: '#f6ca29'},
]
onMounted(() => {
  draw(canvas.value.getContext('2d'), tanGram);
});

const draw = (ctx, data) => {
  data.map(({p, color}) => {
    ctx.beginPath();
    p.forEach((item, i) => {
      i === 0 ? ctx.moveTo(item.x, item.y) : ctx.lineTo(item.x, item.y);
    });
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
  })
} 

</script>
<style scoped>
#canvas {
  width: 100%;
  height: 100%;
}
</style>