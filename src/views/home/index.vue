<template>
  <div>
    <Page 
      title="首页"
    >
      <div id="anchor_home" />
      <div id="anchor_home2" />
      <div id="anchor_home3" />
      <div v-bind="setAnchor('测试')" />
      <div>FUCK</div>
    </Page>
  </div>
</template>
<script setup>
  import Page from '../../components/page.vue';
  import { setAnchor } from '../../utils/anchor.js';
</script>