<template>
  <Page 
    title="皮卡丘"
  >
    <Card v-bind="setAnchor(TITLE_CSS)" :title="TITLE_CSS">
      <Css />
    </Card>
  </Page>
</template>

<script setup>
  import Page from '../../components/page.vue';
  import Card from '../../components/card.vue';
  import Css from './components/css.vue';
  import { setAnchor } from '../../utils/anchor.js';
  const TITLE_CSS = 'CSS绘制'
</script>