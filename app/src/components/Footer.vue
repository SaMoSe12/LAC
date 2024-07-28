<script setup lang="ts">
    import {RouterLink} from 'vue-router'
    import Button from './Button.vue';

    
</script>
<template>
    <div id="footer" class="w-full md:h-52 h-28 bg-gradient-to-r from-babyBlue-400 from-0% to-salmon-500 to-70% dark:from-sky-800 dark:to-salmon-800">
        <div class="md:max-h-96 max-h-44 flex flex-row items-center justify-evenly md:py-12 py-5">
            <RouterLink to="/" class="font-important text-neutral-100 dark:text-babyBlue-600 text-center flex flex-col justify-center align-middle text-xl md:text-2xl">
                <span>Lourdes Ayala</span> <span class="text-center md:text-sm text-xs font-sans font-medium md:mt-[-8px] mt-[-5px]">Coach Ontologico</span>
            </RouterLink>
            <p class="text-neutral-100 dark:text-neutral-500 text-center">&copy; 2024 Lourdes Ayala Mentoring Ontologico</p>
            <Button :hasIcon="false" :transparent="false" buttonStyle="secondary">
                <template #innerButton>Contacto</template>
            </Button> 
        </div>
        <div class="w-[95%] h-0.5 mx-auto bg-slate-50/65 shadow-neutral-900  hover:shadow-md lg:hover:shadow-lg" />
        <div class="ml-5 mt-4 flex flex-row gap-3 justify-stretch items-center">
            <RouterLink to="/" class="font-light text-neutral-100 hover:text-neutral-200 capitalize">Home</RouterLink>
            <RouterLink to="/about" class="font-light text-neutral-100 hover:text-neutral-200 capitalize">about</RouterLink>
            <RouterLink to="/contacto" class="font-light text-neutral-100 hover:text-neutral-200 capitalize">contacto</RouterLink>
            <RouterLink to="/servicios" class="font-light text-neutral-100 hover:text-neutral-200 capitalize">servicios</RouterLink>
            <RouterLink to="/blog" class="font-light text-neutral-100 hover:text-neutral-200 capitalize">Blog</RouterLink>
        </div>
    </div>
</template>
<style scoped>
</style>