export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'aktif-transac',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Roboto:wght@400;900&display=swap" rel="stylesheet',
      },
    ],
  },

  server: {
    host: '0.0.0.0',
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/main.scss'],

  tailwindcss: {
    cssPath: '@/assets/tailwind.scss',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '@/plugins/vue-touch', ssr: false },
    { src: '@/plugins/maps', ssr: false },
    { src: '@/plugins/cookies', ssr: false },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'vue-currency-input/nuxt',
    '@nuxt/http',
    '@nuxtjs/proxy',
    '@nuxt/content',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: 'https://api.aktif-transac.com',
    proxyHeaders: false,
    credentials: false,
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
