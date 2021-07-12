<template>
  <Page 
    title="Canvas"
  >
    <Card v-bind="setAnchor(TITLE_CLOCK)" :title="TITLE_CLOCK">
      <Clock />
    </Card>
    <Card v-bind="setAnchor(TITLE_TANGRAM)" :title="TITLE_TANGRAM">
      <Tangram />
    </Card>
    <!-- <Card v-bind="setAnchor()" title=""></Card>
    <Card v-bind="setAnchor()" title=""></Card> -->
  </Page>
</template>
<script setup>
  import Page from '../../components/page.vue';
  import Card from '../../components/card.vue';
  import { setAnchor } from '../../utils/anchor.js';

  import Tangram from './components/tangram.vue';
  const TITLE_TANGRAM = '七巧板';

  import Clock from './components/clock.vue';
  const TITLE_CLOCK = '时钟'
</script>