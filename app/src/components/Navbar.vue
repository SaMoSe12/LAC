<script scoped setup lang="ts">
import { RouterLink, useRouter } from "vue-router"
import { ref } from "vue"

// Check if the browser has the preferense set to dark mode.
const prefersDarkMode =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;
const isDark = ref(prefersDarkMode)
const navIsOpen = ref(false)
const toggleDarkMode = () => {
  document.documentElement.classList.toggle("dark")
  isDark.value = !isDark.value
};
const openNavbar = () => {
  navIsOpen.value = !navIsOpen.value
};

const router = useRouter;
router().afterEach(() => {
  navIsOpen.value = false
})
</script>
<template>
  <div
    class="h-fix py-2 sticky  bg-salmon-400 right-0 top-0 left-0 sm:hidden z-50"
    :class="navIsOpen ? 'bg-transparent w-fit' : 'bg-salmon-400 w-svw'"
  >
    <v-icon
      @click="openNavbar"
      class="size-6 flex justify-center items-center z-50"
      :class="navIsOpen ? 'hidden' : ''"
      name="fa-bars"
      scale="6"
    />
    <v-icon
      @click="openNavbar"
      class="size-6 flex justify-center items-center z-50"
      :class="!navIsOpen ? 'hidden' : ''"
      name="fa-times"
      scale="6"
    />
  </div>
  <!-- TODO que sea responsivo este nav -->
  <nav
    class="md:h-20 h-svh absolute md:sticky top-0 left-0 right-0 w-svw bg-salmon-400 md:grid-cols-3 md:grid z-40"
    :class="!navIsOpen ? 'hidden' : ''"
  >
    <div class="flex items-center justify-evenly flex-col md:flex-row">
      <RouterLink to="/" class="nav-link"> Home </RouterLink>
      <RouterLink to="/about" class="nav-link"> About </RouterLink>
      <RouterLink to="/servicios" class="nav-link"> Servicios </RouterLink>
      <RouterLink to="/contacto" class="nav-link"> Contacto </RouterLink>
    </div>
    <div class="flex justify-center items-center">
      <RouterLink
        to="/"
        class="font-important text-neutral-100 dark:text-babyBlue-600 text-center flex flex-col justify-center align-middle text-xl md:text-2xl"
      >
        <span>Lourdes Ayala</span>
        <span
          class="text-center md:text-sm text-xs font-sans font-medium md:mt-[-8px] mt-[-5px]"
          >Coach Ontologico</span
        >
      </RouterLink>
    </div>
    <div class="flex justify-evenly items-center">
      <!-- <Button :hasIcon="true" icon="fa-moon" :transparent="true" :innerClass="(isDark) ? 'hidden':''" innerButton="" @click="toggleDarkMode"/>
            <Button :hasIcon="true" icon="fa-sun" :transparent="true" :innerClass="(!isDark) ? 'hidden':''" innerButton="" @click="toggleDarkMode"/> -->
    </div>
  </nav>
</template>
<style scoped></style>
