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
  <footer class="sticky p-2 z-30 bottom-0 duration-200 text-center px-6">
    <div class="hidden sm:flex">
      <div class="flex gap-4 items-center w-full justify-center">
        <p>
          <a href="https://github.com/Lucho2027" target="_blank" class=""
            ><UButton
              icon="i-mdi-github-face"
              :color="isDark ? 'white' : 'white'"
              variant="ghost"
              aria-label="Theme"
            ></UButton
          ></a>
        </p>
        <p>
          <a href="https://www.linkedin.com/in/luisgrodriguezs" target="_blank" class=""
            ><UButton
              icon="i-mdi-linkedin"
              :color="isDark ? 'white' : 'white'"
              variant="ghost"
              aria-label="Theme"
            ></UButton
          ></a>
        </p>
      </div>
    </div>
    <div class="flex w-full place-content-between sm:hidden">
      <a href="https://github.com/Lucho2027" target="_blank" class=""
        ><UButton
          icon="i-mdi-github-face"
          :color="isDark ? 'white' : 'white'"
          variant="ghost"
          aria-label="Theme"
        ></UButton
      ></a>
      <a href="https://www.linkedin.com/in/luisgrodriguezs" target="_blank" class=""
        ><UButton icon="i-mdi-linkedin" :color="isDark ? 'white' : 'white'" variant="ghost" aria-label="Theme"></UButton
      ></a>
      <a href="sms:+13476057053" target="_blank" class=""
        ><UButton icon="i-mdi-phone" :color="isDark ? 'white' : 'white'" variant="ghost" aria-label="Theme"></UButton
      ></a>
    </div>
  </footer>
</template>
