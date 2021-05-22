<template>
  <a-menu
    mode="inline"
    theme="dark"
  >
    <a-menu-item v-for="item in list"
      :key="item.value"
      @click="router.push({name: item.value})"
    > {{item.label}} </a-menu-item>
  </a-menu>
</template>
<script setup>
import router from '@/router/index.js';
// 根据模块自动生成？？？
const list = [
  {
    label: '首页',
    value: 'home',
  },
  {
    label: 'CSS',
    value: 'css',
  },
  {
    label: 'canvas',
    value: 'canvas',
  },
]

</script>