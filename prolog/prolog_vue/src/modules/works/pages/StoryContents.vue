<template>
    <CreateStoryLayout>
    <v-container class="contents-container">
    <Panel class="default-form">
        <v-container>
            <h2>Главы</h2>
            <v-row >
                <v-col class="default-button">
                    <Button severity="primary" icon="pi pi-plus" label="Создать"/>
                </v-col>
            </v-row>

            <v-row v-for="chapter in storyChapters">
                <v-col>
                    <ItemCardMain :id="chapter.id" :title="chapter.name" :pageName="'Editing Chapter'"
                    :isChapter="true" :number="chapter.number"
                    :canDelete="true" @delete-item="deleteChapter(chapter.id)"/>
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
import chapters from '@/services/stories';
import { ref } from 'vue';

const storyChapters = ref(chapters);
const deleteChapter = (chapterId) => {
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