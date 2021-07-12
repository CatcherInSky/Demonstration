<template>
  <Page 
    title="3D"
    description="teste"
  >
    <Card v-bind="setAnchor(TITLE_THREE)" :title="TITLE_THREE"> 
      <template #extra>
          <a-radio-group v-model:value="shape">
            <a-radio-button value="cube">立方体</a-radio-button>
            <a-radio-button value="sphere">球体</a-radio-button>
          </a-radio-group>
      </template>
      <Three :shape="shape"/>
    </Card>
    <!-- <Card v-bind="setAnchor()" title=""></Card>
    <Card v-bind="setAnchor()" title=""></Card> -->
  </Page>
</template>
<script setup>
  import { ref } from '@vue/reactivity';
  import Page from '../../components/page.vue';
  import Card from '../../components/card.vue';
  import { setAnchor } from '../../utils/anchor.js';

  import Three from './components/three.vue'
  const TITLE_THREE = '看房'
  const shape = ref('cube');


</script>