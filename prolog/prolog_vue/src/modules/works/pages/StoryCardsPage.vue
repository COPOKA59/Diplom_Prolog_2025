<template>
  <MainLayout :layout_container="true">
    <v-container fluid class="container">
      <v-row v-if="isAuthor" class="search-and-create">
        <v-col cols="12" lg="5" md="5" sm="12">
          <IconField class="search-input">
                  <InputIcon class="pi pi-search" style="color: var(--main-light-color);"/>
                  <InputText placeholder="Поиск..."/>
          </IconField>
        </v-col>
        
        <v-col class="create-story-button" cols="12" lg="7" md="7" sm="12">
          <!-- <Button label="Создать" severity="secondary" icon="pi pi-plus"@click="$router.push({ name: 'Editing Header' })"/> -->
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
import { getWorks, postWork } from '@/services/api/works/works';

const router = useRouter();

const isAuthor = ref(true);
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
  router.push({ name: 'Editing Header', params: { id: newWork.id } });
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
.search-and-create input {
  width: 100%;
}
.create-story-button {
  text-align: right;
}
</style>