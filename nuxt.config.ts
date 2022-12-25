export default defineNuxtConfig({
    modules: ["@storyblok/nuxt"],
    storyblok: {
        accessToken: process.env.STORYBLOK_API_TOKEN,
        useApiClient: true,
    },
    typescript: {
        typeCheck: true,
        strict: true,
    },
});
