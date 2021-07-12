<template>
    <a-card style="margin-bottom: 10px" hoverable>
        <template #title>
            <slot name="title" >
                <div v-html="title" />
            </slot>
        </template>
        <template #extra><slot name="extra" /></template>
        <div>
            <slot name="description" >
                <div v-if="description" v-html="description" class="description"/>
            </slot>
            <slot />
        </div>
    </a-card>
</template>
<script setup>
import { defineProps, toRefs } from "@vue/runtime-core";

const props = defineProps({
    'title': String, 
    'description': String
})
const { title, description } = toRefs(props);

</script>
<style scoped>
.description {
    padding-bottom: 24px;
    color: #8c8c8c
}
</style>