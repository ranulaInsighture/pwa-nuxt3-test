export default defineNuxtConfig({
  ssr: false,

  modules: ['@vite-pwa/nuxt'],

  pwa: {
    manifest: {
      name: 'Nuxt3 PWA',
      short_name: 'Nuxt3 PWA',
      description: 'Nuxt 3 PWA ',
      icons: [
        {
          src: "/pwa-144x144.png",
          sizes: "144x144",
          type: "image/png",
        },
      ],
      screenshots: [
        {
          src: "icons/CompressJPEG.online_500x500-image.png",
          sizes: "500x500",
          type: "image/png",
          form_factor: "narrow",
        },
        {
          src: "icons/600x400.png",
          sizes: "600x400",
          type: "image/png",
          form_factor: "wide",
        },
      ],
    },
    workbox: {
      navigateFallback: '/',
    },
    devOptions: {
      enabled: true,
      type: 'module',
    },
  },
})

