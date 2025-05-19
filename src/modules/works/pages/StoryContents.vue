<template>
    <CreateStoryLayout>
    <!-- <v-container style="max-width: 70vw;"> -->
    <!-- <v-container class="contents-container">
        <v-row v-for="index in 10">
            <v-col>
                <ChapterCardEdit :id="index" :chapter_number="index" 
                :chapter_title="'Lfhrei Halt ei'" :published="new Date('2021-01-01')"/>
            </v-col>
        </v-row>
    </v-container> -->

    <v-container class="contents-container">
    <Panel class="default-form">
        <v-container>
            <h2>Главы</h2>
            <v-row >
                <v-col class="default-button">
                    <Button severity="primary" icon="pi pi-plus" label="Создать"/>
                    <!-- <Button severity="primary"> Сохранить </Button> -->
                </v-col>
            </v-row>

            <v-row v-for="index in 10">
                <v-col>
                    <ChapterCardEdit :id="index" :chapter_number="index" 
                    :chapter_title="'Lfhrei Halt ei'" :published="new Date('2021-01-01')"/>
                </v-col>
            </v-row>

            <!-- <v-row >
                <v-col class="default-button">
                    <Button severity="primary" icon="pi pi-plus" label="Создать"/>
                    <Button severity="primary"> Сохранить </Button>
                </v-col>
            </v-row> -->
        </v-container>
    </Panel>
    </v-container>
    </CreateStoryLayout>
</template>

<script setup>
import CreateStoryLayout from '@/layouts/CreateStoryLayout.vue';
import { VContainer, VRow, VCol } from 'vuetify/lib/components/index.mjs';
import { Panel, ScrollPanel, Button } from 'primevue';
import ChapterCardEdit from '../components/ChapterCardEdit.vue';
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