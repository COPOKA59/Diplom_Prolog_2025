<template>
  <MainLayout :layout_container="true">
    <v-container fluid class="container">
      <v-row v-if="isAuthor">
        <v-col class="create-story-button" cols="12">
          <Button label="Создать" severity="secondary" icon="pi pi-plus"@click="createWork"/>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
        <Paginator
          class="story-paginator"
          :first="first"
          :rows="rows"
          :totalRecords="totalRecords"
          :rowsPerPageOptions="[10, 20, 30]"
          @page="onPageChange"
        />
        </v-col>
      </v-row>

      <v-row v-for="work in displayedWorks">
        <v-col>
          <StoryCard
              :work="work"
              :isAuthor="userStore.isAuthor()"/>
          </v-col>
      </v-row>
      
      <v-row>
        <v-col>
        <Paginator
          class="story-paginator"
          :first="first"
          :rows="rows"
          :totalRecords="totalRecords"
          :rowsPerPageOptions="[10, 20, 30]"
          @page="onPageChange"
        />
        </v-col>
      </v-row>
    </v-container>
  </MainLayout>
</template>

<script setup>
import MainLayout from '@/layouts/MainLayout.vue';
import StoryCard from '../components/StoryCard.vue';
import { Paginator, Button, IconField, InputText, InputIcon } from 'primevue';
import { VContainer, VRow, VCol } from "vuetify/lib/components/index.mjs";
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { getWorks, postWork } from '@/services/works/works.js';
import { useUserStore } from '@/stores/user.js';

const router = useRouter();
const userStore = useUserStore();

// const isAuthor = ref(true);
const isAuthor = userStore.isAuthor();
console.log('isAuthor: ', isAuthor);
const works = ref(null);

const first = ref(0);
const rows = ref(10);
const totalRecords = ref(0);

onMounted( async () => {
  works.value = await getWorks();
  totalRecords.value = works.value?.length;
});

const displayedWorks = computed(() => {
  return works.value?.slice(first.value, first.value + rows.value);
});

function onPageChange(event) {
  first.value = event.first;
  rows.value = event.rows;
}

const createWork = async () => {
  let newWork = await postWork();
  // router.push({ name: 'Editing Header', params: { id: newWork.id } });
  router.push({ name: 'Editing Header', params: { workId: newWork.id } });
}

</script>

<style scoped>
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
.create-story-button {
  text-align: right;
}
</style>