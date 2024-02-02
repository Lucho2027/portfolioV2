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
    <div class="gap-2">
      <h2 class="font-semibold font-lato text-4xl sm:text-5xl md:text-6xl mt-8">
        Hi! I'm <span class="font-montserrat text-primary-400">Luis</span>, a<br />
        <span class="font-montserrat text-primary-400">Full Stack</span>
        Developer
      </h2>
      <p class="text-base font-lato sm:text-lg md:text-xl mt-4">
        passionate about
        <span class="text-primary-400">VueJS/Nuxt</span> for front end and most of my experience is with
        <span class="text-primary-400">NodeJS & PostgreSQL</span>
        for back ends. Constantly evolving, I'm on a mission to refine my craft and create seamless digital experiences.
      </p>
      <div class="mt-4">
        <UButton
          icon="i-heroicons-envelope-solid"
          :color="isDark ? 'primary' : 'cool'"
          variant="solid"
          aria-label="Theme"
          ><a href="mailto:luis01.ro@gmail.com" target="_blank">Let's get in touch</a></UButton
        >
      </div>
    </div>
  </div>
</template>
