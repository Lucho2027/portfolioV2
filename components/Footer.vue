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
  <footer class="sticky p-2 z-[10] bottom-0 duration-200 px-6">
    <div class="hidden sm:flex">
      <p class="px-4 py-2 font-medium">Connect with me</p>
      <div class="flex flex-col gap-4 items-center justify-center">
        <p><b class="pr-2">Email</b> luis01.ro@gmail.com</p>
        <p>
          <b class="pr-2">GitHub</b>
          <a href="https://github.com/Lucho2027" target="_blank" class=""
            >Lucho2027<sup class=""
              ><span class="text-xs scale-75 pl-0.5"
                ><i class="fa-solid fa-arrow-up-right-from-square text-xs scale-[75%]" /></span></sup
          ></a>
        </p>
        <p>
          <b class="pr-2">LinkedIn</b>
          <a href="https://www.linkedin.com/in/luisgrodriguezs" target="_blank" class=""
            >luisgrodriguezs<sup class=""
              ><span class="text-xs scale-75 pl-0.5"
                ><i class="fa-solid fa-arrow-up-right-from-square text-xs scale-[75%]" /></span></sup
          ></a>
        </p>
      </div>
    </div>
    <div class="flex w-full place-content-between sm:hidden">
      <a href="https://github.com/Lucho2027" target="_blank" class=""
        ><UButton
          icon="i-heroicons-envelope-solid"
          :color="isDark ? 'white' : 'white'"
          variant="ghost"
          aria-label="Theme"
        ></UButton
      ></a>
      <a href="https://www.linkedin.com/in/luisgrodriguezs" target="_blank" class=""
        ><UButton icon="i-mdi-linkedin" :color="isDark ? 'white' : 'white'" variant="ghost" aria-label="Theme"></UButton
      ></a>
      <a href="sms:+13476057053" target="_blank" class=""
        ><UButton
          icon="i-heroicons-phone"
          :color="isDark ? 'white' : 'white'"
          variant="ghost"
          aria-label="Theme"
        ></UButton
      ></a>
    </div>
  </footer>
</template>
