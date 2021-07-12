<template>
  <Page 
    title="CSS形状"
  >
    <Card v-bind="setAnchor(TITLE_GEOMETRY)" :title="TITLE_GEOMETRY">
      <Geometry />
    </Card>
  </Page>
</template>

<script setup>
  import Page from '../../components/page.vue';
  import Card from '../../components/card.vue';
  import { setAnchor } from '../../utils/anchor.js';

  import Geometry from './components/geometry.vue';
  const TITLE_GEOMETRY = '几何形状'
</script>