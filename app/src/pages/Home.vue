<script setup lang="ts">
  import Button from '../components/Button.vue'
</script>
<template>
  <section id="home-header" class="bg-neutral-100 dark:bg-neutral-700 w-svw h-svh">
    <div class="flex flex-col mt-4 sm:mt-0 sm:flex-row sm:justify-evenly sm:items-center sm:mx-4 overflow-hidden">
      <div id="left-header" class="size-full flex items-center justify-center flex-col gap-3">
        <figure class="h-fit">
          <img src="/img/lulu-home.jpg" class="rounded-full object-center object-cover h-28 w-28 sm:w-40 sm:h-40 shadow-md shadow-slate-700" alt="Lourdes Ayala" />
        </figure>
        <div>
          <p class="font-sans font-black bg-gradient-to-br from-salmon-400 via-fuchsia-400 to-babyBlue-300 bg-clip-text text-transparent text-center text-3xl">Coach</p>
          <p class="font-sans font-black bg-gradient-to-br from-salmon-400 via-fuchsia-400 to-babyBlue-300 bg-clip-text text-transparent text-center text-3xl">Ontologico</p>
          <p class="font-sans font-black bg-gradient-to-br from-salmon-400 via-fuchsia-400 to-babyBlue-300 bg-clip-text text-transparent text-center text-3xl">Profesional</p>
        </div>
        
        <Button :hasIcon="false"><template #innerButton>Contactame</template></Button>
      </div>
      <div
        id="right-header"
        class="sm:h-[450px] sm:w-[450px] w-svw h-svw bg-fixed mt-10 sm:mt-0"
      ></div>
    </div>
  </section>
  <section id="home-que-es-co" class="bg-salmon-400 dark:bg-salmon-800 text-neutral-100 min-h-svh mt-12">
    
  </section>
</template>
<style scoped>
#right-header {
  clip-path: polygon(100% 100%, 0% 50%, 100% 0%);
  background-image: url('/img/home-bg-left.jpg');
  background-size: 900px;
  background-position: center center;
  background-repeat: no-repeat;
}
@media screen and (max-width: 450px){
  #right-header{
    clip-path: polygon(0% 100%, 50% 0%, 100% 100%);
    background-size: cover;
    background-position: bottom center;
  }
}
</style>
