// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxtjs/tailwindcss'],
  ui: {
    global: true,
    icons: ['heroicons']
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  css: ['@/assets/css/main.css']
});
