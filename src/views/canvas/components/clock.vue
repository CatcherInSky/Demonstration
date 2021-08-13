<template>

  <canvas id="canvas" ref="canvas" :width="WIDTH" :height="HEIGHT">
    <!--兼容降错-->
		当前浏览器不支持 Canvas，请更换浏览器后再试
  </canvas>
</template>
<script setup>
// https://juejin.cn/post/6948262151215644680
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { digit } from './digit.js';
const canvas = ref(null);
const WIDTH = 1024;
const HEIGHT = 368;
const RADIUS = 8;
const MARGIN_TOP = 60;
const MARGIN_LEFT = 10;

const fixTime = (number = 0, arr = number.toString().split('')) =>  arr.length === 1 ? [0, ...arr] : arr;

const getTime = (time = new Date()) => [
  ...fixTime(time.getHours()),
  10,
  ...fixTime(time.getMinutes()),
  10,
  ...fixTime(time.getSeconds()),
].map(Number)
const getTemplate = (template = getTime()) => template.reduce(
  (acc, cur) => acc.map((list, index) =>  list.concat(digit[cur][index])), 
  Array.from({length: 10}, () => [])
)
// 绘制圆点
const renderDigit = ( x , y , template , ctx ) => {
    ctx.clearRect(0, 0, WIDTH, HEIGHT)
    ctx.fillStyle = "rgb(0,102,153)";
    template.forEach((number, i) => {
      number.forEach((point, j) => {
        if(point) {
          // 第（i, j）个圆的圆心位置：
          // j*2*(R+1) => 第 j 列个的框框
          // x: x+j*2*(R+1)+(R+1)
          // y: y+i*2*(R+1)+(R+1)
          ctx.beginPath();
          ctx.arc(x + j * 2 * (RADIUS + 1) + RADIUS + 1, y + i * 2 * (RADIUS + 1) + RADIUS + 1, RADIUS, 0, 2  * Math.PI)
          ctx.closePath();
          ctx.fill();
        }
      })
    })
}

const render = (ctx) => {
  console.log(ctx)
  setInterval(() => renderDigit( MARGIN_LEFT , MARGIN_TOP , getTemplate(), ctx ), 1000)
};

onMounted(() => {
  render(canvas.value.getContext('2d'))
})

</script>
<style scoped>
#canvas {
  width: 100%;
  height: 100%;
}
</style>