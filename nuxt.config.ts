export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/image', '@nuxt/ui', '@nuxt/content'],
  css: ['~/assets/css/main.css'],
   content: {
    experimental: { nativeSqlite: true }
  },
  mdc: {
    highlight: {
      noApiRoute: false
    }
  },
  nitro: {
    prerender: {
      routes: [
        '/'
      ]
    }
  },
  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
})
