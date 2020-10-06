const SERVER_URL = 'https://dev-api-tego022.bcms.tech/';

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
            url: "public/login",
            method: "post",
            propertyName: 'data.token'
          },
          user: {
            url: "secure/users/info",
            method: "get",
            propertyName: 'data'
          },
          logout: false,
        },
      },
    },
    redirect: {
      login: '/login',
      logout: '/login',
      callback: false,
      home: '/'
    }
  },
  axios: {
    baseURL: `${SERVER_URL}api/v1/`,
    proxyHeaders: false,
    credentials: false
  },
  env: {
    BASE_URL: SERVER_URL
  }
};
