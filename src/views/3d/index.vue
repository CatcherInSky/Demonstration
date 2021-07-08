<template>
  <Page 
    title="3D"
  >
    <Card v-bind="setAnchor('看房')" title="看房">
    </Card>
    <!-- <Card v-bind="setAnchor()" title=""></Card>
    <Card v-bind="setAnchor()" title=""></Card> -->
  </Page>
</template>
<script setup>
  import Page from '../../components/page.vue';
  import Card from '../../components/card.vue';
  import { setAnchor } from '../../utils/anchor.js';

</script>