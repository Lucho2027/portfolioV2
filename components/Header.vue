<script setup lang="ts">
const nav = [
  { text: 'Home', to: '/', icon: '' },
  { text: 'About', to: '/about', icon: '' },
  { text: 'Projects', to: '/projects', icon: '' },
  { text: 'Contact', to: '/contact', icon: '' }
];
</script>

<template>
  <!-- <div>
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
  </div> -->
  <template>
    <div class="border-b-4 border-primary-500 sticky top-0">
      <nav class="flex items-center justify-between">
        <NuxtLink to="/">
          <UIcon name="i-heroicons-home" color="gray" variant="ghost" />
        </NuxtLink>
        <NuxtLink to="/about">
          <UIcon name="i-user" color="gray" variant="ghost" />
        </NuxtLink>
        <NuxtLink to="/projects">
          <UIcon name="i-heroicons-code-bracket-16-solid" color="gray" variant="ghost" />
        </NuxtLink>
        <NuxtLink to="/contact">
          <UIcon name="i-heroicons-chat-bubble-oval-left-ellipsis" color="gray" variant="ghost" />
        </NuxtLink>
      </nav>
      <BreadCrumb />
    </div>
  </template>
</template>
