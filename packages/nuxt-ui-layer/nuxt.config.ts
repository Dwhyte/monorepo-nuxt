// https://nuxt.com/docs/api/configuration/nuxt-config

// @ts-ignore
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@invictus.codes/nuxt-vuetify", "@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      Roboto: true,
      Inter: [400, 700],
      "Josefin+Sans": true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100]
      }
    }
  },
  // @ts-ignore
  vuetify: {
    // @ts-ignore
    /* vuetify options */
    vuetifyOptions: {
      // @TODO: list all vuetify options
    },
    moduleOptions: {
      /* nuxt-vuetify module options */
      treeshaking: true | false,
      useIconCDN: true | false,
      /* vite-plugin-vuetify options */
      styles: true | "none" | "expose" | "sass" | { configFile: "" },
      autoImport: true | false,
      useVuetifyLabs: true | false
    }
  }
});
