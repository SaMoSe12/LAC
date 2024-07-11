<script setup lang="ts">

  import {RouterView} from 'vue-router'
  import Navbar from './components/Navbar.vue';

</script>

<template>
  <Navbar/>
  <main class="scroll-pt-20 scroll-smooth">
    <RouterView />
  </main>
</template>
