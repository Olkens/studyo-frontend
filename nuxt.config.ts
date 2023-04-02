// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt", 'nuxt-icon'],
    ssr: true,
    css: [
        'vuetify/styles/main.sass'
    ],
    build: {
        transpile: ['vuetify']
    }
})
