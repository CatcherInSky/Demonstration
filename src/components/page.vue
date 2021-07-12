<template>
    <a-card class="container" :bordered="false" :title="title">
        <slot />
    </a-card>
</template>
<script setup>
import { defineProps, toRefs } from "@vue/runtime-core";
const props = defineProps({
    'title': String, 
    // 'description': String,
})
const { title } = toRefs(props);
</script>
<style scoped lang="scss">
.container {
    width: 100%;
}

</style>