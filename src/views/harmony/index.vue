<template>
  <Page 
    title="鸿蒙开屏"
  >
    <Card v-bind="setAnchor(TITLE_HARMONY)" :title="TITLE_HARMONY">
      <Harmony />
    </Card>
  </Page>
</template>

<script setup>
  import Page from '../../components/page.vue';
  import Card from '../../components/card.vue';
  import Harmony from './components/harmony.vue';
  import { setAnchor } from '../../utils/anchor.js';

  const TITLE_HARMONY = '鸿蒙';
</script>