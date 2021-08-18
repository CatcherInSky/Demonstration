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
import { Modal } from 'ant-design-vue'
const canvas = ref(null);

const WIDTH = 40, HEIGHT = 40, CANVAS_WIDTH = 800, CANVAS_HEIGHT = 800;
const INIT_LENGTH = 3;
const FOOD_COLOR = 'red', SNAKE_COLOR = 'yellow', SNAKE_HEAD_COLOR = 'blue', BACKGROUND_COLOR = 'white';
// 速率相关
const BASIC = 1000 / 60, RATE = 30;
// 全局变量
let interval, ctx, snake, food;
// 双缓存解决闪烁问题
const tempCanvas = document.createElement('canvas');
const tempCtx = tempCanvas.getContext('2d');
tempCanvas.width = CANVAS_WIDTH;
tempCanvas.height = CANVAS_HEIGHT;

// 清除全局变量
const stop = () => {
  clearInterval(interval)
  ctx = null;
  snake = null;
  food = null;
}
const speed = (fn) => {
  let index = 0;
  return (...params) => {
    interval = setInterval(() => {
      index ++;
      if(index === RATE) {
        index = 0;
        fn(...params)
      }
    }, BASIC)
  }
}
// 动画
const animate = (ctx, snake, food) => {
  clear(ctx);


  food.compare();
  snake.move();

  snake.show(tempCtx);
  food.show(tempCtx);

  ctx.drawImage(tempCanvas, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
  tempCtx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}
// 开始游戏
const start = () => {
  if(!canvas.value) return;
  ctx = canvas.value.getContext('2d')
  clear(ctx)
  snake = new Snake(INIT_LENGTH);
  food = new Food(snake);
  food.show(ctx);
  snake.show(ctx);
  // interval = setInterval(() => {
  //   animate(ctx, snake, food)
  // }, BASIC)
  speed(animate)(ctx, snake, food)
}
// 重置画布
const clear = (ctx) => {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

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
    if(!x || !y) return;
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
    ctx.strokeRect(x, y, width, height);
    ctx.closePath();
  }
}

// 碰撞判断函数
const isHit = (snake) => {
  const {head: {x, y}, body} = snake;
  const xLimit = x < 0 || x > CANVAS_WIDTH - WIDTH;
  const yLimit = y < 0 || y > CANVAS_HEIGHT - HEIGHT;
  const hitSelf = body.find(({x: bodyX, y: bodyY}) => x === bodyX && y === bodyY)
  return xLimit || yLimit || hitSelf;
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
          'up': [x, y + height * (index + 1)],
          'down': [x, y - height * (index + 1)],
          'right': [x - width * (index + 1), y],
          'left': [x + width * (index + 1), y],
        }
        return new Cube(...map[direction], SNAKE_COLOR)
      }
    );
    this.control()
    this.tail = [undefined, undefined]
  }
  control() {
    document.onkeydown = (e) => {
      e.preventDefault();
      // 键盘事件
      e = e || window.event
      // 左37  上38  右39  下40
      switch (e.keyCode) {
        case 37:
          // 三元表达式，防止右移动时按左，下面同理(贪吃蛇可不能直接掉头)
          // todo 转向比刷新频率快会有问题，最好一次刷新只执行一次转向
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
    }
  }
  show(ctx) {
    this.head.show(ctx)
    this.body.forEach(cube => cube.show(ctx))
  }
  grow() {
    // 创建一个空白尾来pop掉
    this.body.push(new Cube(...this.tail, SNAKE_COLOR))
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
    if(isHit(this)) {
      stop()
      Modal.confirm({
        content: `总共吃了${body.length - INIT_LENGTH + 1}个食物`,
        onOk() {
          start();
        },
      })
    }
  }
}
class Food extends Cube {
  constructor(snake) {
    super(0, 0, FOOD_COLOR)
    this.snake = snake
    this.init();
  }
  init() {
    const {head, body} = this.snake
    const forbid_area = [{x: head.x, y: head.y}, ...body.map(it => ({x: it.x, y: it.y}))]
    const createX = () =>  Math.round(Math.random() * (CANVAS_WIDTH - WIDTH) / WIDTH) * WIDTH;
    const createY = () => Math.round(Math.random() * (CANVAS_HEIGHT - HEIGHT) / HEIGHT) * HEIGHT;
    let x = createX(), y = createY();
    while(forbid_area.find(it => it.x === x && it.y === y)) {
      x = createX()
      y = createY()
    }
    this.x = x;
    this.y = y;
  }
  compare() {
    const {snake, x, y} = this;
    const {head: {x: headX, y: headY}} = snake;
    if(x === headX && y === headY) {
      this.init()
      snake.grow();
    };
  }
}
</script>

<style scoped>
#canvas {
  width: 100%;
  height: 100%;
  /* border: solid 10px black; */
}
</style>
