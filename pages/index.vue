<script setup lang="ts">
const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === 'dark';
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
  }
});
</script>
<template>
  <div>
    <div class="flex gap-4 flex-col">
      <h2 class="font-semibold font-lato text-4xl sm:text-5xl md:text-6xl mt-20">
        Hello! I'm <span class="font-montserrat text-primary-400">Luis</span>, a<br />
        <span class="font-montserrat text-primary-400">Full Stack</span>
        Developer
      </h2>
      <p class="text-base font-lato sm:text-lg md:text-xl mt-4">
        Crafting Tomorrow's Digital Experiences: A Fullstack Developer's Journey with
        <span class="text-primary-400">Vue/NuxtJS</span>, React, and Beyond...
      </p>
      <div class="mt-4 flex text-2xl sm:flex-row flex-col gap-4">
        <div>
          <UButton
            icon="i-heroicons-envelope-solid"
            :color="isDark ? 'gray' : 'primary'"
            variant="solid"
            aria-label="Theme"
            to="mailto:luis01.ro@gmail.com"
            target="_blank"
            >Let's Connect</UButton
          >
        </div>
        <div class="flex justify-center align-center item-center gap-6">
          <UButton
            icon="i-mdi-github-face"
            :color="isDark ? 'gray' : 'primary'"
            variant="solid"
            aria-label="Theme"
            to="https://github.com/Lucho2027"
            target="_blank"
          ></UButton>
          <UButton
            icon="i-mdi-linkedin"
            :color="isDark ? 'gray' : 'primary'"
            variant="solid"
            aria-label="Theme"
            to="https://www.linkedin.com/in/luisgrodriguezs"
            target="_blank"
          ></UButton>
        </div>
      </div>
    </div>
  </div>
</template>
