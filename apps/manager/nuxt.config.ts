// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@pinia/nuxt'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: true,
  hooks: {
    'pages:extend'(pages) {
      // / にアクセスした時に pages/tasks/index.vue を表示するように追加
      pages.push({
        name: 'index',
        path: '/',
        file: '~/pages/tasks/index.vue'
      })
    }
  },
  runtimeConfig: {
    public: {
      baseApiUrl: 'http://localhost:3000/'
    }
  },
})