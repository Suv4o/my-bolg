export default defineNuxtConfig({
    css: ["~/assets/css/main.css"],
    modules: ["@storyblok/nuxt"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    storyblok: {
        accessToken: process.env.STORYBLOK_API_TOKEN,
        useApiClient: true,
    },
    typescript: {
        typeCheck: true,
        strict: true,
    },
});
