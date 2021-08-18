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
    <Card v-bind="setAnchor(TITLE_Scratch)" :title="TITLE_Scratch">
      <Scratch />
    </Card>
    <Card v-bind="setAnchor(TTILE_Snake)" :title="TTILE_Snake">
      <Snake />
    </Card>
    <Card v-bind="setAnchor(TTILE_Gobang)" :title="TTILE_Gobang">
      <Gobang />
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

  import Scratch from './components/scratch.vue';
  const TITLE_Scratch = '刮刮乐';

  import Snake from './components/greedy_snake.vue';
  const TTILE_Snake = '贪吃蛇';

  
  import Gobang from './components/gobang.vue';
  const TTILE_Gobang = '五子棋';
</script>