// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/apollo"],
  // @ts-ignore
  apollo: {
    clients: {
      default: {
        httpEndpoint: "http://localhost:3000/api/graphql"
      }
    }
  }
});
