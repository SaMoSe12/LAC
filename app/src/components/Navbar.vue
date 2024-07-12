<script scoped setup lang="ts">
    import { RouterLink, useRoute, useRouter } from 'vue-router'
    import Button from './Button.vue'
    import { ref, watch } from 'vue'

    // Check if the browser has the preferense set to dark mode.
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const isDark = ref(prefersDarkMode)
    const navIsOpen = ref(false)
    const toggleDarkMode = () => {
        document.documentElement.classList.toggle('dark')
        isDark.value = !isDark.value
    }
    const openNavbar = () => {
        navIsOpen.value = !navIsOpen.value
    }

    const router =  useRouter
    router().afterEach(() => {
        navIsOpen.value = false;
    })
    
</script>
<template>
    <!-- TODO que sea responsivo este nav -->
    <nav class="md:h-20 h-svh absolute md:sticky top-0 left-0 right-0 w-svw bg-salmon-400  md:grid-cols-3 md:grid" :class="(!navIsOpen) ? 'hidden' : ''">
        <div class="flex items-center justify-evenly flex-col md:flex-row">
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
            <!-- <Button :hasIcon="true" icon="bi-calendar2" :transparent="false" innerButton="Agenda una Cita" />  -->
            <Button :hasIcon="true" icon="fa-moon" :transparent="true" :innerClass="(isDark) ? 'hidden':''" innerButton="" @click="toggleDarkMode"/>
            <Button :hasIcon="true" icon="fa-sun" :transparent="true" :innerClass="(!isDark) ? 'hidden':''" innerButton="" @click="toggleDarkMode"/>
        </div>
    </nav>
    <div @click="openNavbar" class="w-fit h-fit p-2 sticky top-2 left-2 bg-neutral-900/60 dark:bg-neutral-200/40 md:hidden cursor-pointer focus-visible:border focus-visible:border-neutral-900 z-50">
        <v-icon class="size-6 flex justify-center items-center z-50" :class="(navIsOpen) ? 'hidden':''" name="fa-bars" scale="6"/>
        <v-icon class="size-6 flex justify-center items-center z-50":class="(!navIsOpen) ? 'hidden':''" name="fa-times" scale="6"/>
    </div>

</template>
<style scoped>

</style>