<template>
    <UserLayout>
        <v-container class="container">
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
    </UserLayout>
</template>

<script setup>
import UserLayout from '@/layouts/UserLayout.vue';
import { VContainer, VRow, VCol } from 'vuetify/lib/components/index.mjs';
import StoryCard from '@/modules/works/components/StoryCard.vue';
import { works } from '@/services/stories';
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
</style>