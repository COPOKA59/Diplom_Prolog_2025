<template>
    <MainLayout>
      <v-container v-if="work" fluid class="container">
        <div class="top-story-info">
          <h1>{{ work.title }}</h1>
          <StoryCardReading
                :key="work.id"
                :title="work.title"
                :author="work.author"
                :fandom="work.fandom"
                :last_update="work.last_update"
                :rating="work.rating"
                :direction="work.direction"
                :size="work.size"
                :genres="work.genres"
                :relationships="work.relationships"
                :tags="work.tags"
                :description="work.description"
                :img_url="work.img_url"
                :read="work.read"/>
        </div>
        <ButtonGroup>
            <Button label="<" 
              severity="secondary" 
              @click="previousChapter" 
              :disabled="work.chapters.indexOf(chapter) === 0"/>
            <Button label="Содержание" severity="secondary" @click="$router.push({ name: 'StoryPage', params: { id: work.id } })"/>
            <Button label=">" 
              severity="secondary" 
              @click="nextChapter"
              :disabled="work.chapters.indexOf(chapter) === work.chapters.length - 1"/>
        </ButtonGroup>

        <Card class="work-text-card">
            <template #title>
              Глава {{ chapter.number }}
            </template>
            <template #content>
              <div v-if="chapter.notes_before" class="author-notes">
                <Divider class="inner-card-divider"/>
                <h3>Заметки автора</h3>
                {{ chapter.notes_before }}
                <Divider class="inner-card-divider"/>
              </div>
  
              <div class="work-text">
                <p class="m-0" v-html="chapter.text"></p>
              </div>
  
              <div  v-if="chapter.notes_after" class="author-notes">
                <Divider class="inner-card-divider"/>
                <h3>Заметки автора</h3>
                {{ chapter.notes_after }}
                <Divider class="inner-card-divider"/>
              </div>
            </template>
        </Card>

        <ButtonGroup>
            <Button label="<" 
              severity="secondary" 
              @click="previousChapter" 
              :disabled="work.chapters.indexOf(chapter) === 0"/>
            <Button label="Содержание" severity="secondary" @click="$router.push({ name: 'StoryPage', params: { id: work.id } })"/>
            <Button label=">" 
              severity="secondary" 
              @click="nextChapter"
              :disabled="work.chapters.indexOf(chapter) === work.chapters.length - 1"/>
        </ButtonGroup>

      </v-container>
    </MainLayout>
  </template>
  
<script setup>
import MainLayout from '@/layouts/MainLayout.vue';
import StoryCardReading from '../components/StoryCardReading.vue';
import { Card, Divider, Button, ButtonGroup } from 'primevue';

import { ref, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { works } from '@/services/stories';

const route = useRoute();
const router = useRouter();

const work = ref(null);
const chapter = ref(null);

const loadChapter = () => {
  const chapterId = parseInt(route.params.chapter_id);
  if (work.value) {
    chapter.value = work.value.chapters.find(chap => chap.id === chapterId);
  }
}
const nextChapter = () => {
  const position = work.value.chapters.indexOf(chapter.value);
  if (position < work.value.chapters.length - 1) {
    const next = position + 1;
    router.push({ name: 'StoryChapterPage', params: { chapter_id: work.value.chapters[next].id } });
  }
}
const previousChapter = () => {
  const position = work.value.chapters.indexOf(chapter.value);
  if (position > 0) {
    const next = position - 1;
    router.push({ name: 'StoryChapterPage', params: { chapter_id: work.value.chapters[next].id } });
  }
}

onMounted(() => {
  const id = parseInt(route.params.id);  // Извлекаем id из параметров маршрута
  work.value = works.find(item => item.id === id);  // Ищем по id

  loadChapter();
});
watch(() => route.params.chapter_id, loadChapter);
</script>

<style scoped>
.container {
  display: grid;
  justify-content: center;
  gap: 40px;
  margin: 40px auto;
  max-width: 960px;
  padding: 0 20px;
}
.top-story-info h1 {
  text-align: center;
}
.container .p-buttongroup {
  display: flex;
  justify-content: center;
}

.author-notes {
  width: 50%;
  margin: auto;
  text-align: left;
}
.author-notes h3 {
  text-align: center;
}
.work-text-card :deep(.p-card-body) {
  padding: 45px; 
}
.work-text-card :deep(.p-card-title) {
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  padding-bottom: 25px;
}
.work-text {
  padding: 25px 0;
}
.inner-card-divider {
    border-top: 1px solid var(--main-light-color);
}
</style>