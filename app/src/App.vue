<script setup lang="ts">

  import {RouterView} from 'vue-router'
  import Navbar from './components/Navbar.vue';

</script>

<template>
  <Navbar/>
  <main class="md:scroll-pt-20 scroll-pt-0  scroll-smooth">
    <RouterView />
  </main>
</template>
