<script setup>
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
  <h1 class="text-2xl text-center">
    Hi, I'm Luis
    <ClientOnly>
      <UButton
        :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
        color="gray"
        variant="ghost"
        aria-label="Theme"
        @click="isDark = !isDark"
      />
      <template #fallback>
        <div class="w-8 h-8" />
      </template>
    </ClientOnly>
  </h1>
  <p class="p-10">A Full-stack developer that focus on Fron End</p>
  <div class="flex flex-row gap-1">
    <UButton icon="i-heroicons-pencil-square" size="sm" color="primary" variant="ghost" square />
  </div>
</template>
