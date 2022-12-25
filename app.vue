<script setup lang="ts">
const story = await useAsyncStoryblok("home", { version: "draft" });
</script>
<template>
    <main role="main">
        <h1 class="text-3xl font-bold underline">Hello world!</h1>
        <pre>{{ story }}</pre>
        <!-- <StoryblokComponent v-if="story" :blok="story.content" /> -->
    </main>
</template>
