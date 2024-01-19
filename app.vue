<template>
  <div class="container relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen">
    <Header />
    <NuxtPage />
    <Footer />
  </div>
  <NuxtParticles id="tsparticles" @load="onLoad" url="/particles.json"></NuxtParticles>
</template>
<script setup lang="ts">
import type { Container } from 'tsparticles-engine';

const onLoad = (container: Container) => {
  // Do something with the container
  container.pause();
  setTimeout(() => container.play(), 2000);
};
</script>

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
