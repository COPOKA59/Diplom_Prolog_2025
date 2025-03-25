<template>
    <MainLayout>
      <v-container v-if="work" fluid class="container">
        <StoryCard
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
      </v-container>
    </MainLayout>
  </template>
  
  <script setup>
  import MainLayout from '@/layouts/MainLayout.vue';
  import StoryCard from '@/components/StoryCard.vue';
  import { Card, Divider } from 'primevue';
  
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { works } from '@/services/stories';
  
  const route = useRoute(); 
  const work = ref(null);
  const chapter = ref(null);
  
  onMounted(() => {
    const id = parseInt(route.params.id);  // Извлекаем id из параметров маршрута
    work.value = works.find(item => item.id === id);  // Ищем по id

    const chapterId = parseInt(route.params.chapter_id);
    if (work.value) {
    chapter.value = work.value.chapters.find(chap => chap.id === chapterId);
  }
  });
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