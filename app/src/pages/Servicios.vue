<script setup lang="ts">
    import TitleStrip from '../components/TitleStrip.vue';
</script>
<template class="m-2 p-2">
    <TitleStrip><template #titleString>Mis Servicios</template></TitleStrip>

    <div class="mt-20 mb-12 mx-6">
        <div class="flex sm:gap-3 flex-col sm:flex-row sm:mb-5">
            <div class="flex justify-center items-center sm:w-1/2">
                <figure class="w-full overflow-y-hidden">
                    <img class="aspect-square rounded" src="/img/serviciosCoaching.webp" alt="Coaching">
                </figure>
            </div>
            <div class="sm:w-1/2 flex justify-center items-center flex-col">
                <h2 class="text-xl text-center font-title mb-4">Coaching</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, excepturi facilis? At, temporibus libero odio illum doloremque asperiores quas voluptates eius sunt aperiam ipsa, exercitationem, quae facere voluptatem totam qui!</p>
            </div>
        </div>
        <div class="flex sm:gap-3 flex-col-reverse sm:flex-row">
            <div class="sm:w-1/2 flex justify-center items-center flex-col">
                <h2 class="text-xl text-center font-title mb-4">Conferencias</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis nihil, placeat at libero reprehenderit quaerat perferendis praesentium ad itaque iusto temporibus numquam incidunt. A ipsum magnam sed ratione deserunt minima cum dicta. Aperiam reiciendis quae magni praesentium omnis illo! Dolore error nam ducimus deserunt, recusandae, odio architecto veniam saepe asperiores aspernatur, natus commodi suscipit! Animi facilis incidunt consequuntur fugiat corporis? Sit, ut. Exercitationem minus assumenda inventore eligendi itaque aperiam soluta ea mollitia perferendis autem possimus, enim beatae quo repellat corrupti! Eos aperiam quae distinctio vel quos dolorem, quas, autem placeat quaerat assumenda voluptatibus inventore esse velit reprehenderit totam ullam?
                </p>
            </div>
            <div class="flex justify-center items-center sm:w-1/2">
                <figure class="w-full overflow-y-hidden">
                    <img class="aspect-square rounded" src="/img/serviciosConferencias.webp" alt="Coaching">
                </figure>
            </div>
        </div>
    </div>
</template>
<style scoped></style>