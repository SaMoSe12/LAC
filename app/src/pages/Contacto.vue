<script setup lang="ts">
    import TitleStrip from '../components/TitleStrip.vue';
</script>
<template>
    <section id="contacto">
        <TitleStrip><template #titleString>Contacto</template></TitleStrip>
    <div class="bg-neutral-200 w-full h-full flex flex-col justify-around sm:flex-row gap-4 sm:p-14 p-5">
      <div class="bg-salmon-400 p-2 sm:p-5 sm:w-1/3 w-full h-full rounded-md m-6">
        <p class="text-neutral-100 font-semibold text-2xl text-center mb-5">Mandáme un mensaje</p>
        <form class="mb-4">
          <div class="mb-6">
            <!-- Nombre -->
             <label for="contact_nombre" class="block mb-2 text-sm text-neutral-600 dark:text-neutral-200">Nombre</label>
            <input type="text" name="nombre" id="contact_nombre" placeholder="Tu Nombre" class="w-full px-3 py-2 placeholder-slate-600 border border-neutral-800 rounded-md focus:outline-none focus:ring focus:ring-babyBlue-600 dark:bg-neutral-700 dark:text-neutral-50 dark:placeholder-neutral-300 dark:border-neutral-700 dark:focus:ring-slate-100 dark:focus:border-neutral-300">
          </div>
          <div class="mb-6">
            <!-- Correo -->
            <label for="contact_email" class="block mb-2 text-sm text-neutral-600 dark:text-neutral-200">Email</label>
            <input type="email" name="email" placeholder="Tu Email" id="contact_email" class="w-full px-3 py-2 placeholder-slate-600 border border-neutral-800 rounded-md focus:outline-none focus:ring focus:ring-babyBlue-600 dark:bg-neutral-700 dark:text-neutral-50 dark:placeholder-neutral-300 dark:border-neutral-700 dark:focus:ring-slate-100 dark:focus:border-neutral-300">
          </div>
          <div class="mb-3">
            <!-- Mensaje -->
            <label for="contact_message" class="block mb-2 text-sm text-neutral-600 dark:text-neutral-200">Mensaje</label>
            <textarea name="message" id="contact_message" placeholder="Tu Mensaje" class="w-full px-3 py-2 placeholder-slate-600 border border-neutral-800 rounded-md focus:outline-none focus:ring focus:ring-babyBlue-600 dark:bg-neutral-700 dark:text-neutral-50 dark:placeholder-neutral-300 dark:border-neutral-700 dark:focus:ring-slate-100 dark:focus:border-neutral-300"></textarea>
          </div>
          <div class="my-3 flex justify-center w-full">
            <Button :has-icon="true" icon="fa-envelope">
              <template #innerButton>Enviar</template>
            </Button>
          </div>
        </form>
      </div>
      <div class="bg-salmon-400 p-2 sm:p-5 flex-col flex items-center justify-around sm:w-1/3 w-full h-full rounded-md">
        <p class="text-neutral-900 font-semibold text-2xl">Información de Contacto</p>
        <a href="mailto:info@mentoringontologico.com" target="_blank" class="text-neutral-50 decoration-none font-medium flex cursor-pointer items-center justify-stretch w-full sm:w-4/5">
          <span class="mr-2">
            <v-icon name="fa-envelope" scale="2"/>
          </span>
          <span>info@mentoringontologico.com</span>
        </a>
        <p class="text-neutral-50 font-medium flex items-center justify-stretch w-full sm:w-4/5">
          <span class="mr-2">
            <v-icon name="fa-mobile" scale="2"/>
          </span>
          <span>
            +52 (322) 1235-678
          </span>
        </p>
        <hr/>
        <div class="flex flex-row gap-2 text-neutral-50">
          <v-icon name="co-facebook"  class="hover:text-slate-400 cursor-pointer" scale="1.7"/>
          <v-icon name="co-instagram" class="hover:text-slate-400 cursor-pointer" scale="1.7"/>
          <v-icon name="co-twitter"   class="hover:text-slate-400 cursor-pointer" scale="1.7"/>
          <v-icon name="co-youtube"   class="hover:text-slate-400 cursor-pointer" scale="1.7"/>
          <v-icon name="co-linkedin"  class="hover:text-slate-400 cursor-pointer" scale="1.7"/>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>