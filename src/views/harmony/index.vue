<template>
  <Page 
    title="鸿蒙"
  >
    <Card v-bind="setAnchor('鸿蒙')" title="动画" description="动画">
      <Harmony />
    </Card>
  </Page>
</template>

<script setup>
  import Page from '../../components/page.vue';
  import Card from '../../components/card.vue';
  import Harmony from './components/harmony.vue';
  import { setAnchor } from '../../utils/anchor.js';
</script>