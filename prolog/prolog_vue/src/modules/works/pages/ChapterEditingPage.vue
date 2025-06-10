<template>
    <CreateStoryLayout>
    <div style="margin-bottom: 20px;">
        <Button icon="pi pi-chevron-left" label="Назад" severity="secondary"
                @click="$router.push({ name: 'Editing Contents' })"/>
    </div>
    <Panel class="default-form">
        <v-container>
            <h2>Редактирование главы</h2>
        <v-form>

            <BasicInput input-type="input" label="Название главы"/>

            
            <v-row >
                <v-col>
                    <ChapterTextEditor />
                </v-col>
            </v-row>
            

            <v-row >
                <v-col class="default-button">
                    <Button severity="primary"> Опубликовать </Button>
                    <Button severity="primary"> Сохранить </Button>
                </v-col>
            </v-row>
        </v-form>
    </v-container>
    </Panel>
    </CreateStoryLayout>
</template>

<script setup>
import CreateStoryLayout from '@/layouts/CreateStoryLayout.vue';
import BasicInput from '@/modules/core/components/BasicInput.vue';
import { VContainer, VRow, VCol, VForm } from 'vuetify/lib/components/index.mjs';
import { Panel, Button } from 'primevue';
import Editor from 'primevue/editor';
import ChapterTextEditor from '../components/ChapterTextEditor.vue';
</script>

<style scoped>
:deep(.p-panel-header) {
    padding: 0;
}
.ql-editor ol li[data-list="bullet"]::before {
    content: '\2022' !important;
}
</style>