<script setup>
const links = [
  {
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/'
  },
  {
    label: 'Projects',
    icon: 'i-heroicons-code-bracket-16-solid',
    to: '/projects'
  },
  {
    label: 'Breadcrumb',
    icon: 'i-heroicons-link'
  }
];
</script>

<template>
  <UBreadcrumb :links="links" />
</template>
