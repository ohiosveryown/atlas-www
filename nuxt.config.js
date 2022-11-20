export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  target: "static",

  head: {
    title: "Atlas",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
      {
        hid: "apple-mobile-web-app-title",
        name: "apple-mobile-web-app-title",
        content: "Atlas",
      },
      { hid: "og:title", name: "og:title", content: "Atlas" },
      { hid: "og:site_name", name: "og:site_name", content: "Atlas" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
  },

  // global styles
  css: [
    "~/static/style/reset.scss",
    "~/static/style/type.scss",
    "~/static/style/util.scss",
  ],

  plugins: [],
  components: true,
  buildModules: [],
  modules: ["@nuxtjs/pwa", "@nuxtjs/gtm"],

  pwa: {
    manifest: {
      lang: "en",
    },
  },

  server: {
    port: 8008,
    host: "0.0.0.0",
  },

  content: {},
  build: {},

  googleAnalytics: {
    id: "UA-240989774-1",
  },
  gtm: {
    id: "GTM-MC5C9WH",
    scriptDefer: true,
  },
}
