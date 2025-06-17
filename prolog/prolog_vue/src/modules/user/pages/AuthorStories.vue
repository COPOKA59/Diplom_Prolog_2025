<template>
    <UserLayout>
        <v-container class="container">
        <v-row v-for="work in works">
            <v-col>
            <StoryCard
                    :work="work"
                    :isAuthor="userStore.isAuthor()"/>
            </v-col>
        </v-row>
    </v-container>
    </UserLayout>
</template>

<script setup>
import UserLayout from '@/layouts/UserLayout.vue';
import { VContainer, VRow, VCol } from 'vuetify/lib/components/index.mjs';
import StoryCard from '@/modules/works/components/StoryCard.vue';
// import { works } from '@/services/stories';
import { getWorks } from '@/services/works/works';
import { ref, onMounted } from 'vue';
import { useUserStore } from '@/stores/user';

const props = defineProps({
    userId: Number
});

const userStore = useUserStore();

const works = ref();
onMounted( async () => {
    works.value = await getWorks();
    }
);
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