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
      <div class="work-contents">
        <h3>Содержание</h3>
        <ChapterCard v-for="chapter in work.chapters"
            :id="chapter.id"
            :chapter_number="chapter.number"
            :chapter_title="chapter.title"
            :published="chapter.date"/>
      </div>
      <Paginator class="story-paginator" :rows="10" :totalRecords="120"/>
    </v-container>
  </MainLayout>
</template>

<script setup>
import MainLayout from '@/layouts/MainLayout.vue';
import StoryCard from '@/components/StoryCard.vue';
import ChapterCard from '@/components/ChapterCard.vue';
import { Paginator } from 'primevue';

import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { works } from '@/services/stories';

const route = useRoute(); 
const work = ref(null);

onMounted(() => {
  const id = parseInt(route.params.id);  // Извлекаем id из параметров маршрута
  work.value = works.find(item => item.id === id);  // Ищем по id
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
.work-contents h3 {
  text-align: center;
  font-size: 28px;
  font-weight: 700;
}
.work-contents {
  display: grid;
  gap: 20px;
}
</style>