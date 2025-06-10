<template>
    <RouterLink class="chapter-link" :to="{ name: 'StoryChapterPage', params: { chapter_id: id } }">
    <Card :key="id">
        <!-- <template #title>Глава {{ chapter_number }}. {{ chapter_title }}</template> -->
        <template #title>{{ chapter_title }} </template>
        <template #subtitle>{{ (new Date(published)).toLocaleDateString('ru-RU') }}</template>
    </Card>
    </RouterLink>
</template>

<script setup>
import { Card } from 'primevue';

const props = defineProps({
    id: Number,
    chapter_number: Number,
    chapter_title: String,
    published: String,
    text: String,
})

</script>

<style scoped>
:deep(.p-card-body) {
    gap: 0;
}
:deep(.p-card-subtitle) {
    color: grey;
    text-decoration: none;
}
.p-card {
    cursor: pointer;
    transition: background-color 0.3s;
}
.p-card:hover {
    background-color: var(--p-secondary-600);
}
.chapter-link {
    text-decoration: none;
}
</style>