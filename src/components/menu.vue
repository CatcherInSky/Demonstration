<template>
  <a-menu
    mode="inline"
    theme="dark"
  >
    <a-menu-item v-for="item in menu_list"
      :key="item.value"
      @click="router.push({name: item.value})"
    > {{item.label}} </a-menu-item>
  </a-menu>
</template>
<script setup>
import router from '@/router/index.js';
import { menu_list } from '@/utils/category.js'

</script>