<template>
  <Page 
    title="皮卡丘"
  >
    <Card v-bind="setAnchor('CSS绘制')" title="CSS" description="CSS绘制">
      <Css />
    </Card>
  </Page>
</template>

<script setup>
  import Page from '../../components/page.vue';
  import Card from '../../components/card.vue';
  import Css from './components/css.vue';
  import { setAnchor } from '../../utils/anchor.js';
</script>