<template>
  <Page 
    title="Canvas"
  >
    <Card v-bind="setAnchor('七巧板')" title="七巧板">
      <Tangram />
    </Card>
    <!-- <Card v-bind="setAnchor()" title=""></Card>
    <Card v-bind="setAnchor()" title=""></Card>
    <Card v-bind="setAnchor()" title=""></Card> -->
  </Page>
</template>
<script setup>
  import Page from '../../components/page.vue';
  import Card from '../../components/card.vue';
  import { setAnchor } from '../../utils/anchor.js';

  import Tangram from './components/tangram.vue';
</script>