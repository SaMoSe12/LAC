<script scoped setup lang="ts">
    defineProps<{
        titleString: string 
    }>()
</script>
<template>
    <div class="flex justify-center items-center text-3xl text-xl text-center text-neutral-100 dark:text-neutral-50 h-40 h-32 w-svw bg-gradient-to-r from-salmon-400 to-babyBlue-500 via-fuchsia-500 dark:from-salmon-800 dark:to-babyBlue-900 dark:via-fuchsia-800">
        {{ titleString }}
    </div>
</template>
<style scoped>
</style>