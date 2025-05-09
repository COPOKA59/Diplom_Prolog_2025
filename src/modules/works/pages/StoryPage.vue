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
      
      <div class="work-contents">
        <h3>Содержание</h3>
        <ChapterCard v-for="chapter in displayedChapters"
            :id="chapter.id"
            :chapter_number="chapter.number"
            :chapter_title="chapter.title"
            :published="chapter.date"/>
      </div>
      <Paginator
        class="story-paginator"
        :first="first"
        :rows="rows"
        :totalRecords="totalRecords"
        :rowsPerPageOptions="[10, 20, 30]"
        @page="onPageChange"
      />
    </v-container>
  </MainLayout>
</template>

<script setup>
import MainLayout from '@/layouts/MainLayout.vue';
import StoryCardReading from '../components/StoryCardReading.vue';
import ChapterCard from '@/modules/works/components/ChapterCard.vue';
import { Paginator } from 'primevue';

import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { works } from '@/services/stories';

const route = useRoute(); 
const work = ref(null);

const first = ref(0);
const rows = ref(10);
const totalRecords = ref(null);

onMounted(() => {
  const id = parseInt(route.params.id);  // Извлекаем id из параметров маршрута
  work.value = works.find(item => item.id === id);  // Ищем по id

  totalRecords.value = work.value.chapters.length;
});

const displayedChapters = computed(() => {
  return work.value.chapters.slice(first.value, first.value + rows.value);
});

function onPageChange(event) {
  first.value = event.first;
  rows.value = event.rows;
}


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