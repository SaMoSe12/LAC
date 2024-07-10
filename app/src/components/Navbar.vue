<script scoped setup lang="ts">
    import { RouterLink } from 'vue-router'
    import Button from './Button.vue';
    import { ref } from 'vue';

    // Check if the browser has the preferense set to dark mode.
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = ref(prefersDarkMode);
    const toggleDarkMode = () => {
        document.documentElement.classList.toggle('dark');
        isDark.value = !isDark;
    }
    
</script>
<template>
    <!-- TODO que sea responsivo este nav -->
    <nav class="h-20 w-svw bg-salmon-400 grid grid-cols-3">
        <div class="flex items-center justify-evenly">
            <RouterLink to="/" class="nav-link">
                Home
            </RouterLink>  
            <RouterLink to="/about" class="nav-link">
                About
            </RouterLink>  
            <RouterLink to="/servicios" class="nav-link">
                Servicios
            </RouterLink>  
            <RouterLink to="/contacto" class="nav-link">
                Contacto
            </RouterLink>  
        </div>
        <div class="flex justify-center items-center">
            <RouterLink to="/" class="font-important text-neutral-100 text-3xl text-center flex flex-col justify-center align-middle sm:text-xl md:text-2xl">
                <span>Lourdes Ayala</span> <span class="text-center text-sm font-sans font-medium mt-[-8px]">Coach Ontologico</span>
            </RouterLink>
        </div>
        <div class="flex justify-evenly items-center">
            <Button :hasIcon="true" icon="bi-calendar2" :transparent="false" innerButton="Agenda una Cita" /> 
            <Button :hasIcon="true" v-bind:icon="isDark ? 'fa-sun' : 'fa-moon'" :transparent="true" :rounded="true" innerButton="" @click="toggleDarkMode"/>
        </div>

    </nav>

</template>
<style scoped>

</style>