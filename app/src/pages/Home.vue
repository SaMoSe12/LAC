<script setup lang="ts"></script>
<template>
  <div id="home-header" class="bg-neutral-100 dark:bg-neutral-700 w-svw h-svh">
    <div class="flex flex-row justify-evenly items-center">
      <div id="left-header" class="size-full">
        <p class="font-title text-babyBlue-400">Coaching Ontologico</p>
        <img src="https://placehold.it/300" alt="Lorem " />
      </div>
      <div
        id="right-header"
        class="bg-gradient-to-tr from-salmon-300 via-babyBlue-600 to-fuchsia-200 h-[450px] w-[450px]"
      ></div>
    </div>
  </div>
</template>
<style scoped>
#right-header {
  clip-path: polygon(100% 100%, 0% 50%, 100% 0%);
}
</style>
