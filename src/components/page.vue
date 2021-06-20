<template>
    <a-card class="container" :bordered="false">
        <a-card-meta :title="title" /> 
        <slot />
    </a-card>
</template>
<script setup>
import { defineProps, toRefs } from "@vue/runtime-core";
const { title } = toRefs(defineProps({
    'title': String, 
}));
</script>
<style scoped lang="scss">
.container {
    width: 100%;
}

</style>