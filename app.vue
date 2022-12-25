<script setup lang="ts">
const story = await useAsyncStoryblok("home", { version: "draft" });
</script>
<template>
    <main role="main">
        <pre>{{ story }}</pre>
        <!-- <StoryblokComponent v-if="story" :blok="story.content" /> -->
    </main>
</template>
