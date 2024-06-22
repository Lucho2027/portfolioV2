<script setup lang="ts">
const colorMode = useColorMode();

const isDark = computed(() => {
  return colorMode.value === 'dark' ? 'dark' : 'light';
});
</script>
<template>
  <section>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:py-14 p-4 h-[85vh]">
      <div class="z-[10] flex flex-col lg:justify-center text-center lg:text-left lg:ml-20 gap-6 md:gap-8 lg:gap-10">
        <h2 class="font-semibold font-lato text-4xl sm:text-5xl md:text-6xl mt-20">
          Hello! I'm <span class="font-montserrat text-primary-400">Luis</span>,<br />
          a<span class="font-montserrat text-primary-400"> Full Stack</span>
          Developer
        </h2>
        <p class="text-base font-lato sm:text-lg md:text-xl mt-4">
          Crafting Tomorrow's Digital Experiences: A Fullstack Developer's Journey with
          <span class="text-primary-400">Vue/NuxtJS</span>, React, and Beyond...
        </p>
        <ClientOnly>
          <div class="mt-4 flex text-2xl sm:flex-row flex-col gap-4">
            <div>
              <UButton
                icon="i-heroicons-envelope-solid"
                :color="isDark === 'light' ? 'gray' : 'primary'"
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
                :color="isDark === 'light' ? 'gray' : 'primary'"
                variant="solid"
                aria-label="Theme"
                to="https://github.com/Lucho2027"
                target="_blank"
              ></UButton>
              <UButton
                icon="i-mdi-linkedin"
                :color="isDark === 'light' ? 'gray' : 'primary'"
                variant="solid"
                aria-label="Theme"
                to="https://www.linkedin.com/in/luisgrodriguezs"
                target="_blank"
              ></UButton>
            </div>
          </div>
        </ClientOnly>
      </div>
      <AstronautContainer class="z-9" />
    </div>
  </section>
</template>
