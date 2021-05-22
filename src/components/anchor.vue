<template>
  <a-anchor class="anchor" @click="handleClick">
    <a-anchor-link 
      v-for="item in list" 
      :key="item.value"
      :href="'#' + item.value" 
      :title="item.label" 
    />
  </a-anchor>
</template>
<script setup>
const handleClick = (e) => {
  e.preventDefault();
}
// 通过遍历页面元素自动获取
const list = [
  {
    label: 'a',
    value: 'a',
  },
  {
    label: 'b',
    value: 'b',
  },
  {
    label: 'c',
    value: 'c',
  },
];
</script>
<style scoped>
.anchor {
  padding-left: 10px
}
</style>