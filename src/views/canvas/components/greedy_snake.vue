<template>
  <canvas id="canvas" ref="canvas" :width="CANVAS_WIDTH" :height="CANVAS_HEIGHT">
    <!--兼容降错-->
		当前浏览器不支持 Canvas，请更换浏览器后再试
  </canvas>
  <a-button type="primary" @click="start">开始</a-button>
</template>

<script setup>
// https://juejin.cn/post/6989003710030413838
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
const canvas = ref(null);

const WIDTH = 40, HEIGHT = 40, CANVAS_WIDTH = 800, CANVAS_HEIGHT = 800;
const FOOD_COLOR = 'red', SNAKE_COLOR = 'yellow', SNAKE_HEAD_COLOR = 'blue', BACKGROUND_COLOR = 'white';
class Cube {
  constructor(x, y, color, width = WIDTH, height = HEIGHT) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.width = width;
    this.height = height;
  }
  show(ctx) {
    const {x, y, width, height, color} = this;
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
    ctx.strokeRect(x, y, width, height);
    ctx.closePath();
  }
}

class Snake {
  constructor(length) {
    this.length = length;
    this.head = new Cube(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2, SNAKE_HEAD_COLOR)
    this.direction = ['up', 'down', 'left', 'right'][Math.floor(Math.random() * 4)];
    this.body = Array.from(
      {length: length - 1}, 
      (_, index) => {
        const {head: {x, y, width, height}, direction} = this;
        const map = {
          'up': [x, y - height * (index + 1)],
          'down': [x, y + height * (index + 1)],
          'right': [x - width * (index + 1), y],
          'left': [x + width * (index + 1), y],
        }
        return new Cube(...map[direction], SNAKE_COLOR)
      }
    );
    
    document.onkeydown = (e) => {
      // 键盘事件
      e = e || window.event
      // 左37  上38  右39  下40
      switch (e.keyCode) {
        case 37:
          // 三元表达式，防止右移动时按左，下面同理(贪吃蛇可不能直接掉头)
          this.direction = this.direction === 'right' ? 'right' : 'left'
          break
        case 38:
          this.direction = this.direction === 'down' ? 'down' : 'up'
          break
        case 39:
          this.direction = this.direction === 'left' ? 'left' : 'right'
          break
        case 40:
          this.direction = this.direction === 'up' ? 'up' : 'down'
          break
      }
      
      console.log('key down', e.keyCode, this.direction)
    }
  }
  show(ctx) {
    this.head.show(ctx)
    this.body.forEach(cube => cube.show(ctx))
  }
  move() {
    const {head, direction, body} = this;
    const {x, y, height, width} = head;
    // 身体移动
    body.unshift(new Cube(x, y, SNAKE_COLOR))
    body.pop();
    // 头移动
    switch(direction) {
      case 'up':
        this.head.y -= height;
        break;
      case 'down':
        this.head.y += height;
        break;
      case 'left':
        this.head.x -= width;
        break;
      case 'right':
        this.head.x += width;
        break;
    }
  }
}
const randomFood = (snake) => {
  const {head, body} = snake
  const forbid_area = [{x: head.x, y: head.y}, ...body.map(it => ({x: it.x, y: it.y}))];
  const createX = () =>  Math.round(Math.random() * (CANVAS_WIDTH - WIDTH) / WIDTH) * WIDTH;
  const createY = () => Math.round(Math.random() * (CANVAS_HEIGHT - HEIGHT) / HEIGHT) * HEIGHT;
  let x = createX(), y = createY();
  while(forbid_area.find(it => it.x === x && it.y === y)) {
    x = createX()
    y = createY()
  }
  return new Cube(x, y, FOOD_COLOR);
}
const reset = (ctx) => {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}
const animate = (ctx, snake) => {
  reset(ctx)
  snake.move();
  snake.show(ctx)
}
const start = () => {
  if(!canvas.value) return;
  const ctx = canvas.value.getContext('2d')
  const snake = new Snake(3);
  randomFood(snake);
  snake.show(ctx);
  setInterval(() => {
    animate(ctx, snake)
  }, 500)
}


onMounted(() => {
  start()
})
</script>

<style scoped>
#canvas {
  width: 100%;
  height: 100%;
}
</style>