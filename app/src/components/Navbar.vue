<script scoped setup lang="ts">
    import { RouterLink } from 'vue-router';
    
</script>
<template>
    <!-- TODO que sea responsivo este nav -->
    <nav class="h-20 w-svw bg-salmon-400 grid grid-cols-3">
        <div class="flex items-center justify-evenly">
            <RouterLink to="/" class="font-sans">
                Home
            </RouterLink>  
            <RouterLink to="/about" class="font-sans">
                About
            </RouterLink>  
            <RouterLink to="/servicios" class="font-sans">
                Servicios
            </RouterLink>  
            <RouterLink to="/contacto" class="font-sans">
                Contacto
            </RouterLink>  
        </div>
        <div class="flex justify-center items-center">
            <RouterLink to="/" class="font-important text-neutral-100 text-3xl text-center flex flex-col justify-center align-middle sm:text-xl md:text-2xl">
                <span>Lourdes Ayala</span> <span class="text-center text-sm font-sans font-medium mt-[-8px]">Coach Ontologico</span>
            </RouterLink>
        </div>
        <div>
            <!-- TODO Agregar boton component y darle mas estilo -->
            <button class="button text-xs">Agenda cita</button> 
        </div>

    </nav>

</template>
<style scoped>

</style>