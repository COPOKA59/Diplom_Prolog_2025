<template>
    <MainLayout :layout_container="true">
    <v-container class="container">
        <v-row>
            <v-col>
                <Card>
                    <template #title>
                        <h3>Сборник «название сборника»</h3>
                    </template>
                    <template #content>
                        <p><b>Автор:</b> ник автора</p>
                        <p><b>Дата создания:</b> 21.01.2023</p>
                        <p><b>Дата изменения:</b> 11.03.2024</p>
                    </template>
                </Card>
            </v-col>
        </v-row>
        <v-row v-for="work in works">
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
    </v-container>
    </MainLayout>
</template>

<script setup>
import MainLayout from '@/layouts/MainLayout.vue';
import { VContainer, VRow, VCol } from 'vuetify/lib/components/index.mjs';
import { Panel, Card } from 'primevue';
import StoryCard from '../components/StoryCard.vue';
import { getWorks } from '@/services/api/works/works';
import { ref, onMounted } from 'vue';

const works = ref();
onMounted( async () => {
    works.value = await getWorks();
} )
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

.p-card h3 {
    /* margin-top: 0; */
}
</style>