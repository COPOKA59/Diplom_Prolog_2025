<template>
    <CreateStoryLayout>
    <v-container class="contents-container">
    <Panel class="default-form">
        <v-container>
            <h2>Главы</h2>
            <v-row >
                <v-col class="default-button">
                    <Button severity="primary" icon="pi pi-plus" label="Создать"
                        @click="createChapter"/>
                </v-col>
            </v-row>

            <v-row v-for="chapter in storyChapters">
                <v-col>
                    <ItemCardMain :id="chapter.id" :title="chapter.name" :pageName="'Editing Chapter'"
                    :isChapter="true" :number="chapter.number"
                    :canDelete="true" @delete-item="deleteCurrentChapter(chapter.id)"/>
                </v-col>
            </v-row>

        </v-container>
    </Panel>
    </v-container>
    </CreateStoryLayout>
</template>

<script setup>
import CreateStoryLayout from '@/layouts/CreateStoryLayout.vue';
import { VContainer, VRow, VCol } from 'vuetify/lib/components/index.mjs';
import { Panel, Button } from 'primevue';
import ItemCardMain from '../components/ItemCardMain.vue';
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
// import { getChapters } from '@/services/api/works/works';
import { getChapters, postChapter, deleteChapter } from '@/services/works/chapters';

const route = useRoute();
const router = useRouter();

const storyChapters = ref();
onMounted( async () => {
    // storyChapters.value = await getChapters();
    storyChapters.value = await getChapters(route.params.id);
} )

const createChapter = async () => {
    let newChapter = await postChapter(route.params.id);
    router.push({ name: 'Editing Chapter', params: { itemId: newChapter.id } });
};

const deleteCurrentChapter = async (chapterId) => {
    await deleteChapter(route.params.id, chapterId);
    storyChapters.value = storyChapters.value.filter(chapter => chapter.id != chapterId);
};
</script>

<style scoped>
@media (min-width: 600px) {
    .contents-container {
        max-width: calc(100vw - 200px);
    }
}
:deep(.p-panel-header) {
    padding: 0;
}
</style>