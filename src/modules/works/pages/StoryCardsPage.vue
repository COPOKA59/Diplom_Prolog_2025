<template>
  <MainContainerLayout>
    <v-container fluid class="container">
      <Paginator
        class="story-paginator"
        :first="first"
        :rows="rows"
        :totalRecords="totalRecords"
        :rowsPerPageOptions="[10, 20, 30]"
        @page="onPageChange"
      />
      <StoryCard v-for="work in displayedWorks"
              :id="work.id"
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
      <Paginator
        class="story-paginator"
        :first="first"
        :rows="rows"
        :totalRecords="totalRecords"
        :rowsPerPageOptions="[10, 20, 30]"
        @page="onPageChange"
      />
    </v-container>
  </MainContainerLayout>
</template>

<script setup>
import MainLayout from '@/layouts/MainLayout.vue';
import MainContainerLayout from '@/layouts/MainContainerLayout.vue';
import StoryCard from '@/modules/works/components/StoryCard.vue';
import { Paginator } from 'primevue';
import { VContainer } from "vuetify/lib/components/index.mjs";

import { ref, computed } from 'vue';
import { works } from '@/services/stories';

const first = ref(0);
const rows = ref(10);

const totalRecords = works.length;
const displayedWorks = computed(() => {
  return works.slice(first.value, first.value + rows.value);
});

function onPageChange(event) {
  first.value = event.first;
  rows.value = event.rows;
}

</script>

<style scoped>
/* .container {
  display: grid;
  justify-content: center;
  gap: 40px;
  margin: 40px;
  padding: 0 20px;
  width: 100%;
  max-width: 960px;
} */
.container {
  display: grid;
  justify-content: center;
  gap: 40px;
  /* margin: 40px auto; */
  max-width: 960px;
  padding: 0 20px;
  /* Ensures padding and borders are included in the width */
  box-sizing: border-box; 
}
/* .container {
  display: grid;
  gap: 40px;
  margin: 40px auto;
  justify-content: center;
} */
</style>