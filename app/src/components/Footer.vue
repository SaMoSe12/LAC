<script setup lang="ts">
    import {RouterLink} from 'vue-router'
    import {ref} from 'vue'

    import Button from './Button.vue';

    
</script>
<template>
    <div id="footer" class="w-full md:h-52 h-28 bg-gradient-to-r from-babyBlue-400 from-0% to-salmon-500 to-70% dark:from-sky-800 dark:to-salmon-800">
        <div class="md:max-h-96 max-h-44 flex flex-col md:py-12 py-5">
            <RouterLink to="/" class="font-important text-neutral-100 dark:text-babyBlue-600 text-center flex flex-col justify-center align-middle text-xl md:text-2xl">
                <span>Lourdes Ayala</span> <span class="text-center md:text-sm text-xs font-sans font-medium md:mt-[-8px] mt-[-5px]">Coach Ontologico</span>
            </RouterLink>

            <Button :hasIcon="true" icon="bi-calendar2" :transparent="false" buttonStyle="secondary">Agenda una cita</Button> 


            
        </div>
    </div>
</template>
<style scoped>
</style>