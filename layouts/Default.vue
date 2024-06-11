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
</script>
<template>
  <div>
    <Header />
    <UContainer>
      <slot />
    </UContainer>
    <!-- <Footer /> -->
    <NuxtParticles v-if="isDark === 'dark'" id="tsparticles" @load="onLoad" url="/particlesDark.json" class="-z-50" />
    <NuxtParticles v-else id="tsparticles" @load="onLoad" url="/particlesLight.json" class="-z-50" />
  </div>
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
