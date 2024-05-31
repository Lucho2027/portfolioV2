// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', 'nuxt-particles'],
  ui: {
    global: true,
    icons: ['heroicons', 'mdi']
  },
  app: {
    head: {
      title: 'Luis Code Craft',
      meta: [
        { name: 'description', content: 'My corner of the web to showcase my skills.' },
        { property: 'og:title', content: `Luis Code Craft` },
        { property: 'og:image', content: 'https://i.imgur.com/fYChfvh.jpg' }
      ],
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1'
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  css: ['@/assets/css/main.css'],
  particles: {
    mode: 'full', // 'full' | 'slim' | 'basic' | 'custom'
    lazy: true
  }
});
