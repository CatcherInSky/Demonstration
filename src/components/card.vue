<template>
    <a-card>
        <slot />
        <a-card-meta :title="title" :description="description" />
    </a-card>
</template>
<script setup>
import { defineProps, toRefs } from "@vue/runtime-core";

const { title, description } = toRefs(defineProps({
    'title': String, 
    'description': String
}));


</script>