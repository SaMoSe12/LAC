<script setup lang="ts">
    export default (props: {
        'hasIcon':boolean: false,

    })
</script>
<template>
    <div class="md:mx-9 sm:mx-5 md:my-3 sm:mt-2 dark:bg-slate-500 dark:text-neutral-50 dark:border-neutral-50 border-2 sm:border">
        <div v-if="hasIcon"><span class="max-w-2 max-h-2 m-1"></span></div>        
    </div>
</template>
<style scoped>

</style>