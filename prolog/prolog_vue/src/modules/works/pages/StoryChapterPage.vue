<template>
    <MainLayout>
      <v-container v-if="work && chapter" fluid class="container">
        <div class="top-story-info">
          <h1>{{ work.name }}</h1>
          <StoryCardReading
                :id="work.id"
                :title="work.name"
                :author="work.author"
                :fandom="work.fandom_details.map(fandom => fandom.name)"
                :last_update="(new Date(work.date_of_editing)).toLocaleDateString('ru-RU')"
                :rating="work.rating_details.name"
                :direction="work.orientation_details.name"
                :size="work.size_details.name"
                :genres="work.genres_details.map(genre => genre.name)"
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
              :disabled="!isPrev"/>
            <Button label="Содержание" severity="secondary" @click="$router.push({ name: 'StoryPage', params: { id: work.id } })"/>
            <Button label=">" 
              severity="secondary" 
              @click="nextChapter"
              :disabled="!isNext"/>
        </ButtonGroup>

        <Card class="work-text-card">
            <template #title>
              {{ chapter.name }}
            </template>
            <template #content>
              <v-container>
                <v-row v-if="chapter.first_comment">
                  <v-col cols="12" lg="6" md="6" class="author-notes">
                    <Divider class="inner-card-divider"/>
                    <h3>Заметки автора</h3>
                    {{ chapter.first_comment }}
                    <Divider class="inner-card-divider"/>
                  </v-col>
                </v-row>
  
                <div class="work-text">
                  <p class="m-0" v-html="chapter.text"></p>
                </div>
  
                <v-row v-if="chapter.end_comment">
                  <v-col cols="12" lg="6" md="6" class="author-notes">
                    <Divider class="inner-card-divider"/>
                    <h3>Заметки автора</h3>
                    {{ chapter.end_comment }}
                    <Divider class="inner-card-divider"/>
                  </v-col>
                </v-row>
              </v-container>
            </template>
        </Card>

        <ButtonGroup>
            <Button label="<" 
              severity="secondary" 
              @click="previousChapter" 
              :disabled="!isPrev"/>
            <Button label="Содержание" severity="secondary" @click="$router.push({ name: 'StoryPage', params: { id: work.id } })"/>
            <Button label=">" 
              severity="secondary" 
              @click="nextChapter"
              :disabled="!isNext"/>
        </ButtonGroup>

      </v-container>
    </MainLayout>
  </template>
  
<script setup>
import MainLayout from '@/layouts/MainLayout.vue';
import StoryCardReading from '../components/StoryCardReading.vue';
import { VContainer, VRow, VCol } from 'vuetify/lib/components/index.mjs';
import { Card, Divider, Button, ButtonGroup } from 'primevue';

import { ref, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
// import { getChapter, getWork } from '@/services/api/works/works';
import { getWork } from '@/services/works/works';
import { getChapter } from '@/services/works/chapters';

const route = useRoute();
const router = useRouter();

const work = ref(null);
const chapter = ref(null);

const isPrev = ref(false);
const isNext = ref(true);

const loadChapter = async () => {
  /* const chapterId = parseInt(route.params.chapter_id);
  chapter.value = await getChapter(chapterId);
  isNext.value = !! await getChapter(chapter.value.number + 1);
  isPrev.value = !! await getChapter(chapter.value.number - 1); */
  const chapterId = parseInt(route.params.chapter_id);
  const workId = parseInt(route.params.id);
  chapter.value = await getChapter(workId, chapterId);
  isNext.value = !! await getChapter(workId, chapter.value.id + 1); //chapter.value.id
  isPrev.value = !! await getChapter(workId, chapter.value.id - 1); //chapter.value.id
}

const nextChapter = () => {
  router.push({ name: 'StoryChapterPage', params: { chapter_id: chapter.value.id + 1 } }); //chapter.value.id
}
const previousChapter = () => {
  router.push({ name: 'StoryChapterPage', params: { chapter_id: chapter.value.id - 1 } }); //chapter.value.id
}


onMounted( async () => {
  const id = parseInt(route.params.id);
  work.value = await getWork(id);
  
  await loadChapter();
});
watch( () => route.params.chapter_id, loadChapter);
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

/* .author-notes {
  width: 50%;
  margin: auto;
  text-align: left;
} */
.author-notes {
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