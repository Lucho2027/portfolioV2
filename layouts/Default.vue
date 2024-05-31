<script setup lang="ts">
import type { Container } from '@tsparticles/engine';
const colorMode = useColorMode();

const onLoad = (container: Container) => {
  container.pause();
  setTimeout(() => container.play(), 2000);
};
const isDark = computed(() => {
  return colorMode.value === 'dark' ? 'dark' : 'light';
});
console.log('');
</script>
<template>
  <div>
    <Header />
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:py-14 p-4 h-[85vh]">
      <div class="z-[10] flex flex-col lg:justify-center text-center lg:text-left lg:ml-20 gap-6 md:gap-8 lg:gap-10">
        <slot />
      </div>
    </div>

    <Footer />
  </div>
  <NuxtParticles v-if="isDark === 'dark'" id="tsparticles" @load="onLoad" url="/particlesDark.json"></NuxtParticles>
  <NuxtParticles v-else id="tsparticles" @load="onLoad" url="/particlesLight.json"></NuxtParticles>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
