<template>
  <div>
    <Header />
    <div
      class="container relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen text-primary-500 dark:text-primary-400 bg-gray-100 dark:bg-gray-900"
    >
      <NuxtPage />
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
<script>
//class="h-screen place-content-center text-primary-500 dark:text-primary-400 bg-gray-100 dark:bg-gray-900
</script>
