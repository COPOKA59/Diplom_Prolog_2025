<template>
    <MainLayout>
      <SearchPanel/>

      <v-container>
        <h1>Популярные</h1>
        <Divider style="border-top: 1px solid var(--main-light-color);"/>
        
        <v-row
          justify="center"
          align="start"
          :spacing="4"
        >
          <v-col
            v-for="work in popularWorks"
            :key="work.id"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <StoryCardSmall style="margin: auto;"
              :id="work.id"
              :title="work.name"
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
          <v-col
            v-for="work in newWorks"
            :key="work.id"
            cols="12" 
            sm="6"
            md="4"
            lg="3"
          >
            <StoryCardSmall style="margin: auto;"
              :id="work.id"
              :title="work.name"
              :img_url="work.img_url"
              />
          </v-col>
        </v-row>
      </v-container>

    </MainLayout>
</template>

<script setup>
import MainLayout from "@/layouts/MainLayout.vue";
import SearchPanel from "@/modules/core/components/SearchPanel.vue";
import StoryCardSmall from "@/modules/works/components/StoryCardSmall.vue";
import { VContainer, VRow, VCol } from "vuetify/lib/components/index.mjs";
import { Divider } from "primevue";

import { onBeforeMount, onBeforeUnmount, onMounted, ref, } from "vue";
import { getWorks, getPopularWorks, getNewWorks } from "@/services/works/works";

onBeforeMount(() => {
  document.body.style.background = "#222";
});
onBeforeUnmount(() => {
  document.body.style.background = "var(--main-blue-color)";
});

const data = ref([]);
const newWorks = ref();
const popularWorks = ref();

onMounted( async () => { 
    data.value = await getWorks();
    popularWorks.value = await getPopularWorks();
    newWorks.value = await getNewWorks();
  }
);
</script>