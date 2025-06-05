<template>
    <MainLayout>

      <SearchPanel/>

      <!-- <div style="width: 80%; margin: auto;">
        <h1>Популярные</h1>
        <Divider style="border-top: 1px solid var(--main-light-color);"/>
      </div>
      <div style="display: grid; margin: auto;
                  gap: 40px;
                  width: 80%;
                  box-sizing: border-box;
                  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));">
        <StoryCardSmall v-for="n in 3" :key="n" style="margin: auto;"/>
      </div> -->

      <v-container>
        <h1>Популярные</h1>
        <Divider style="border-top: 1px solid var(--main-light-color);"/>
        
        <v-row
          justify="center"
          align="start"
          :spacing="4"
        >
          <v-col
            v-for="work in works.slice(0, 8)"
            :key="work.id"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <StoryCardSmall style="margin: auto;"
              :id="work.id"
              :title="work.title"
              :img_url="work.img_url"
              />
          </v-col>
        </v-row>
      </v-container>

      <v-container>
        <h1>Новые</h1>
        <Divider style="border-top: 1px solid var(--main-light-color);"/>
        
        <v-row
          justify="center"
          align="start"
        >
          <!-- <v-col
            v-for="work in works.slice(0, 5)"
            :key="work.id"
            cols="12" 
            sm="6"
            md="4"
            lg="3"
          >
            <StoryCardSmall style="margin: auto;"
              :id="work.id"
              :title="work.title"
              :img_url="work.img_url"
              />
          </v-col> -->
          <v-col
            v-for="work in data"
            :key="work.id"
            cols="12" 
            sm="6"
            md="4"
            lg="3"
          >
            <StoryCardSmall style="margin: auto;"
              :id="work.id"
              :title="work.name"
              />
          </v-col>
        </v-row>
      </v-container>

    </MainLayout>
</template>

<script setup>
// import MainLayout from "@/layouts/MainLayout.vue";
import MainLayout from "@/layouts/MainLayout.vue";
import SearchPanel from "@/modules/core/components/SearchPanel.vue";
import StoryCardSmall from "@/modules/works/components/StoryCardSmall.vue";
import { VContainer, VRow, VCol } from "vuetify/lib/components/index.mjs";
import { Divider } from "primevue";

import { onBeforeMount, onBeforeUnmount, onMounted, ref, } from "vue";
import { works } from "@/services/stories";
import axios from 'axios';
// /api/v1/works/
onBeforeMount(() => {
  document.body.style.background = "#222";
});
onBeforeUnmount(() => {
  document.body.style.background = "var(--main-blue-color)";
});

const data = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('/api/v1/works/');
    data.value = response.data;
    console.log('data: ', JSON.stringify(data));
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});
</script>