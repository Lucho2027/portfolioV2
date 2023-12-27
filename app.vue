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

const isOpen = ref(false);
</script>
<template>
  <div class="grid place-content-center h-screen">
    <h1 class="text-2xl text-center">
      Hi, I'm Luis!
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
    <div class="flex flex-row gap-1">
      <UButton icon="i-heroicons-pencil-square" size="sm" color="primary" square variant="solid" />
    </div>
    <UButton label="Open" @click="isOpen = true" />

    <USlideover v-model="isOpen">
      <div class="p-4 flex-1">
        <Placeholder class="h-full" />
      </div>
    </USlideover>
  </div>
</template>
