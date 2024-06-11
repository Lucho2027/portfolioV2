<script setup lang="ts">
const colorMode = useColorMode();

const isDark = computed(() => {
  return colorMode.value === 'dark' ? 'dark' : 'light';
});
</script>
<template>
  <section>
    <div class="absolute top-[10%] sm:top-[16%] lg:top-[24%] flex items-start z-10">
      <div class="flex-1 lg:mb-0">
        <h1
          class="font-medium text-[20px] xs:text-[25px] sm:text-[34px] md:text-[40px] lg:text-[50px] 2xl:text-[90px] leading-[110px] 2xl:leading-[160px]"
        >
          Hello! I'm <span class="font-medium font-montserrat text-primary-400">Luis</span>, a<br />
          <span class="font-medium font-montserrat text-primary-400">Full Stack</span> Developer
        </h1>
      </div>
      <div class="flex-1 flex justify-start lg:justify-end">
        <div class="font-bold text-[20px] sm:text-[30px] md:text-[36px] 2xl:text-[46px] text-left">
          Crafting Tomorrow's Digital Experiences: A Fullstack Developer's Journey with
          <span class="text-primary-400">Vue/NuxtJS</span>, React, and Beyond...
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
      </div>
    </div>
    <AstronautContainer class="z-9 relative" />
  </section>
</template>
