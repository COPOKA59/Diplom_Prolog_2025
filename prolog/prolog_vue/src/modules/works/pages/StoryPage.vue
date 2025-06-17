<template>
  <MainLayout>
    <v-container v-if="work" fluid class="container">
      <div class="top-story-info">
        <h1>{{ work.name }}</h1>
        <StoryCardReading
              :work="work"
              :isAuthor="userStore.isAuthor()"/>
      </div>
      
      <div class="work-contents">
        <h3>Содержание</h3>
        <ChapterCard v-for="chapter in displayedChapters"
            :id="chapter.id"
            :chapter_number="chapter.number"
            :chapter_title="chapter.name"
            :published="chapter.date_of_editing"/>
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
import { getWork } from '@/services/works/works';
import { getChapters } from '@/services/works/chapters';
import { useUserStore } from '@/stores/user';

const userStore = useUserStore();
const route = useRoute();

const work = ref(null);
const chapters = ref(null);

const first = ref(0);
const rows = ref(10);
const totalRecords = ref(null);

onMounted( async () => {
  /* const id = parseInt(route.params.id);
  work.value = await getWork(id);
  chapters.value = await getChapters();
  totalRecords.value = chapters.value.length;
  console.log(`chapters.value: ${chapters.value}`); */
  const id = parseInt(route.params.id);
  work.value = await getWork(id);
  chapters.value = await getChapters(id);
  totalRecords.value = chapters.value.length;
  console.log(`chapters.value: ${chapters.value}`);
});

const displayedChapters = computed(() => {
  return chapters.value?.slice(first.value, first.value + rows.value);
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