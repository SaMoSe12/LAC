<script setup lang="ts">
    import TitleStrip from '../components/TitleStrip.vue';
</script>
<template class="m-2 p-2">
    <TitleStrip><template #titleString>Mis Servicios</template></TitleStrip>

    <div class="mt-20 ">
        <div class="flex sm:gap-3 flex-col sm:flex-row">
            <div class="flex justify-center items-center">
                <figure class="w-full overflow-y-hidden">
                    <img class="aspect-square" src="/img/lulu-home.jpg" alt="Lourdes Ayala">
                </figure>
            </div>
            <div>
                <h2 class="text-xl text-center font-title mb-4">Coaching</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, excepturi facilis? At, temporibus libero odio illum doloremque asperiores quas voluptates eius sunt aperiam ipsa, exercitationem, quae facere voluptatem totam qui!</p>
            </div>
        </div>
    </div>
</template>
<style scoped></style>