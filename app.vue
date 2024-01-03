<template>
  <div class="h-screen place-content-center text-primary-500 dark:text-primary-400 bg-gray-100 dark:bg-gray-900">
    <Header />
    <div class="grid place-content-center">
      <NuxtPage class="h-[80vh]" />
    </div>
    <Footer />
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
