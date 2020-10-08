
module.exports = {
  server: {
    port: 3000, // default: 3000
    host: "0.0.0.0", // default: localhost
  },
  mode: "universal",
  target: "server",
  head: {
    titleTemplate: "%s",
    title: "KAI Membership Portal",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "KAI Membership Portal",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  css: [
    '~/assets/global.scss',
    '~/assets/variables.scss',
  ],
  plugins: ["@/plugins/axios-accessor.ts"],
  components: true,
  buildModules: [
    "@nuxt/typescript-build",
    "@nuxtjs/vuetify",
  ],
  customVariables: ['~/assets/variables.scss'],
  modules: ["@nuxtjs/axios", "@nuxtjs/auth"],
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "auth/login/admin",
            method: "post",
            propertyName: 'data'
          },
          user: false,
          logout: false
        },
      },
    },
    redirect: {
      login: '/login',
      logout: '/login',
      callback: '/login', 
      home: '/'
    }
  },
  axios: {
    baseURL: process.env.SERVER_URL,
    proxyHeaders: false,
    credentials: false
  },
  env: {
    BASE_URL: process.env.SERVER_URL
  }
};
