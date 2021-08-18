<template>
  <canvas id="canvas" ref="canvas" :width="CANVAS" :height="CANVAS">
    <!--兼容降错-->
		当前浏览器不支持 Canvas，请更换浏览器后再试
  </canvas>
  <a-button type="primary" @click="start">开始</a-button>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { Modal } from 'ant-design-vue'
import { onMounted } from "@vue/runtime-core";

// https://juejin.cn/post/6989003710030413838
const canvas = ref(null);
const PADDING = 30, CELL = 60, CEHCK = 20, ROWS = 14, CANVAS = ROWS * CELL + PADDING * 2;
// 全局变量
const BLACK = 1, WHITE = 2;
let isBlack = true;
let check = Array.from({length: ROWS + 1}, (_) => new Array(ROWS + 1).fill(0))
const init = () => {
    isBlack = true
    check = Array.from({length: ROWS + 1}, (_) => new Array(ROWS + 1).fill(0))
}
const isWin = (x, y) => {
    const flag = isBlack ? BLACK : WHITE
    // 上和下
    if (up_down(x, y, flag)) return true
    // 左和右
    if (left_right(x, y, flag)) return true
    // 左上和右下
    if (lu_rd(x, y, flag)) return true
    // 右上和左下
    if (ru_ld(x, y, flag)) return true
    return false
} 
function up_down(x, y, flag) {
    let num = 1
    // 向上找
    for (let i = 1; i < 5; i++) {
        let tempY = y - i
        if (tempY < 0 || check[x][tempY] !== flag) break
        num ++
    }
    // 向下找
    for (let i = 1; i < 5; i++) {
        let tempY = y + i
        if (tempY > ROWS || check[x][tempY] !== flag) break
        num ++
    }
    return num >= 5
}

function left_right(x, y, flag) {
    let num = 1
    // 向左找
    for (let i = 1; i < 5; i++) {
        let tempX = x - i
        if (tempX < 0 || check[tempX][y] !== flag) break
        num ++
    }
    // 向右找
    for (let i = 1; i < 5; i++) {
        let tempX = x + i
        if (tempX > ROWS || check[tempX][y] !== flag) break
        num ++
    }
    return num >= 5
}

function lu_rd(x, y, flag) {
    let num = 1
    // 向左上找
    for (let i = 1; i < 5; i++) {
        let tempX = x - i
        let tempY = y - i
        if (tempX < 0 || tempY < 0 || check[tempX][tempY] !== flag) break
        num ++
    }
    // 向右下找
    for (let i = 1; i < 5; i++) {
        let tempX = x + i
        let tempY = y + i
        if (tempX > ROWS || tempY > ROWS || check[tempX][tempY] !== flag) break
        num ++
    }
    return num >= 5
}

function ru_ld(x, y, flag) {
    let num = 1
    // 向右上找
    for (let i = 1; i < 5; i++) {
        let tempX = x - i
        let tempY = y + i
        if (tempX < 0 || tempY > ROWS || check[tempX][tempY] !== flag) break
        num ++
    }
    // 向左下找
    for (let i = 1; i < 5; i++) {
        let tempX = x + i
        let tempY = y - i
        if (tempX > ROWS || tempY < 0 || check[tempX][tempY] !== flag) break
        num ++
    }
    return num >= 5
}

const createBoard = (ctx) => {
    for(let i = 0; i < ROWS + 1; i++) {
        // 纵
        ctx.beginPath();
        ctx.moveTo(PADDING, PADDING + i * CELL)
        ctx.lineTo(CANVAS - PADDING, PADDING + i * CELL)
        ctx.stroke();
        ctx.closePath();
        // 横
        ctx.beginPath();
        ctx.moveTo(PADDING + i * CELL, PADDING)
        ctx.lineTo(PADDING + i * CELL, CANVAS - PADDING)
        ctx.stroke();
        ctx.closePath();
    }
}
const createCheckControl = (dom) => {
    const {height, width} = dom.getBoundingClientRect();
    // 按比例缩放
    const ratioX = CANVAS / width, ratioY = CANVAS / height;
    const ctx = canvas.value.getContext('2d')
    dom.onclick = ({offsetX, offsetY}) => {
        const x = Math.round((offsetX * ratioX - PADDING) / CELL)
        const y = Math.round((offsetY * ratioY - PADDING) / CELL)
        // 有棋返回
        if (check[x][y]) return
        // 黑棋为1，白棋为2
        check[x][y] = isBlack ? BLACK : WHITE
        
        ctx.beginPath()
        // 画圆
        ctx.arc(x * CELL + PADDING, y * CELL + PADDING, CEHCK, 0, 2 * Math.PI)
        // 判断走黑还是白
        ctx.fillStyle = isBlack ? 'black' : 'white'
        ctx.fill()
        ctx.closePath()
        if(isWin(x, y)) {
            Modal.confirm({
                content: `${isBlack ? '黑棋' : '白棋'}赢了`,
                onOk() {
                    start();
                },
            })
        }
        // 切换黑白
        isBlack = !isBlack
    }
}
// 重置画布
const clear = (ctx) => {
  ctx.clearRect(0, 0, CANVAS, CANVAS);
}

const start = () => {
    init()
    if(!canvas.value) return;
    const ctx = canvas.value.getContext('2d')
    clear(ctx);
    createBoard(ctx);
    createCheckControl(canvas.value);
}
onMounted(() => {
    start();
})

</script>

<style scoped>
#canvas {
  width: 100%;
  height: 100%;
  background: #e3cdb0;
  /* border: solid 10px black; */
}
</style>