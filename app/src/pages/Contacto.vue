<script setup lang="ts">
import TitleStrip from '../components/TitleStrip.vue'
</script>
<template>
    <TitleStrip><template #titleString>Contacto</template></TitleStrip>
    <div class="flex justify-around items-center h-svh w-full bg-neutral-200 text-neutral-700 gap-5">
        <div class="rounded-md border border-slate-900 p-4">
            <p class="text-2xl">Contactame</p>
            <form>

            </form>
        </div>
        <div class="rounded-md border border-slate-900 p-4">
            <p class="text-2xl">Información de contacto</p>
        </div>
    </div>
</template>
<style scoped></style>