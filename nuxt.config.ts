import { defineNuxtConfig } from "nuxt/config";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  routeRules: {
    "/**": { static: true },
    "/posts/1": { static: true },
    "/posts/**": { static: true },
  },
});
