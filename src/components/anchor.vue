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
import { computed } from "@vue/runtime-core";
import store from '../store';

const handleClick = (e) => {
  e.preventDefault();
}

const list = computed(() => store.state.anchor_list)
</script>
<style scoped>
.anchor {
  padding-left: 10px
}
</style>