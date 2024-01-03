<script setup lang="ts">
const nav = [
  { text: 'Home', to: '/', icon: '' },
  { text: 'About', to: '/about', icon: '' },
  { text: 'Projects', to: '/projects', icon: '' },
  { text: 'Contact', to: '/contact', icon: '' }
];
</script>

<template>
  <div>
    <UContainer
      class="flex flex-row place-content-center text-sm text-primary-500 dark:text-primary-400 h-[10vh] font-roboto"
    >
      <div class="p-2">
        <img src="https://i.imgur.com/C8DPZxL.png" class="h-10" />
      </div>
      <ul>
        <li v-for="n in nav" :key="n.text">
          <NuxtLink :to="n.to">{{ n.text }}</NuxtLink>
        </li>
      </ul>
    </UContainer>
  </div>
</template>
