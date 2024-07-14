<script setup lang="ts">
    import {ref} from 'vue'
    const readTime = ref(0)

    defineProps<{
        title?: string
        body?: string 
        author?: number
    }>()
</script>
<template>
    <div class="contain-none bg-neutral-200 dark:bg-neutral-900 text-gray-950 dark:text-neutral-100">
        <h1 class="text-3xl " v-text="title" />
    </div>
</template>
<style scoped></style>