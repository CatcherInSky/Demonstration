<template>
  <canvas id="canvas" ref="canvas" width="1024" height="800">
    <!--兼容降错-->
		当前浏览器不支持 Canvas，请更换浏览器后再试
  </canvas>
  <div class="under">恭喜</div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";

const canvas = ref(null);
const init = (ctx) => {
  let isDraw = false;
  ctx.fillStyle = 'darkgray';
  // ctx.fillRect()
  ctx.fillRect(0, 0, 1024, 800)
  ctx.globalCompositeOperation = 'destination-out';
  ctx.fillStyle = 'white';

  canvas.value.onmousedown = () => {
    isDraw = true;
  }
  canvas.value.onmouseup = () => {
    isDraw = false;
  }
  // todo 节流
  canvas.value.onmousemove = ({pageX, pageY}) => {
    if(!isDraw) return;
    const {top, left, height, width} = canvas.value.getBoundingClientRect();
    // 按比例缩放
    const x = (pageX - left - document.documentElement.scrollLeft) * (1024 / width);
    const y = (pageY - top - document.documentElement.scrollTop) * (800 / height);
    // 设置globalCompositeOperation 在源图像外显示目标图像。只有源图像外的目标图像部分会被显示，源图像是透明的。
    ctx.beginPath();
    ctx.arc(x, y, 50, 0, 2 * Math.PI)
    // 填充圆形
    ctx.fill()
    ctx.closePath();
  }
}
onMounted(() => {
  const ctx = canvas.value.getContext('2d')
  init(ctx);
})

</script>
<style scoped>
#canvas {
  width: 100%;
  height: 100%;
}
.under {
  position: absolute;
  z-index: -1;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>