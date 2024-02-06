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
  <header class="sticky p-2 z-[10] top-0 duration-200 px-6">
    <div class="flex items-center justify-between">
      <div class="flex w-full gap-2 align-text-baseline">
        <NuxtLink to="/">
          <h1 class="font-large hidden sm:flex">
            <b class="font-extrabold font-montserrat">Luis</b>
            <span class="font-roboto">Code</span>
            <span class="font-roboto text-primary">Craft</span>
          </h1>
          <h1 class="font-large felx sm:hidden">
            <b class="font-extrabold font-montserrat">L</b>
            <span class="font-roboto">C</span>
            <span class="font-roboto text-primary">C</span>
          </h1>
        </NuxtLink>
        <!-- <ClientOnly>
          <UButton
            :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
            :color="isDark ? 'white' : 'primary'"
            variant="ghost"
            aria-label="Theme"
            @click="isDark = !isDark"
          />
          <template #fallback>
            <div class="w-8 h-8" />
          </template>
        </ClientOnly> -->
      </div>
      <div class="sm:flex items-center gap-4 hidden"></div>
      <div class="sm:hidden flex content-center">
        <a href="mailto:luis01.ro@gmail.com" target="_blank">
          <UButton
            icon="i-mdi-email-outline"
            :color="isDark ? 'white' : 'white'"
            variant="ghost"
            aria-label="Theme"
          ></UButton>
        </a>
      </div>
    </div>
  </header>
</template>
