<template>
  <div class="container relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen">
    <Header />
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:py-14 p-4 h-[85vh]">
      <div class="z-[10] flex flex-col lg:justify-center text-center lg:text-left lg:ml-20 gap-6 md:gap-8 lg:gap-10">
        <slot />
      </div>
    </div>

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
