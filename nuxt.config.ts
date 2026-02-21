export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/image', '@nuxt/ui', '@nuxt/content', 'nuxt-og-image', 'nuxt-resend'],
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
  site: {
    url: 'https://www.kikengineeringltd.com',
    name: 'KIK Engineering Ltd.',
    description: 'KIK Engineering Ltd. provides top-notch engineering solutions tailored to your needs. Our expert team delivers innovative designs and reliable services to ensure your projects succeed.',
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
