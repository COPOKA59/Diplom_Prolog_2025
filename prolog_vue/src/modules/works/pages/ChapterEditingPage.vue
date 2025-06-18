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

            <BasicInput input-type="input" label="Название главы" v-model="formData.name"/>

            <br/><br/>

            <BasicInput input-type="input" label="Примечание автора перед главой" v-model="formData.first_comment"/>
            <BasicInput input-type="input" label="Примечание автора после главы" v-model="formData.end_comment"/>

            
            <v-row >
                <v-col>
                    <ChapterTextEditor v-model="formData.text" />
                </v-col>
            </v-row>
            

            <v-row >
                <v-col class="default-button">
                    <Button severity="primary"> Опубликовать </Button>
                    <Button severity="primary" @click="putChapter(workId, itemId, formData)"> Сохранить </Button>
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
import { VContainer, VRow, VCol, VForm, VSpacer } from 'vuetify/lib/components/index.mjs';
import { Panel, Button } from 'primevue';
import Editor from 'primevue/editor';
import ChapterTextEditor from '../components/ChapterTextEditor.vue';
import { ref, reactive, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { getChapter, putChapter } from '@/services/works/chapters.js';

const props = defineProps({
    id: Number,
    workId: Number,
    itemId: Number
});

const formData = reactive({
    name: '',
    text: '',
    first_comment: '',
    end_comment: '',
    work: props.id
});
const chapter = ref();

onMounted( async () => {
    /* chapter.value = await getChapter(props.id, props.itemId);
    Object.keys(formData)
        .forEach(k => formData[k] = chapter.value[k]); */
    chapter.value = await getChapter(props.workId, props.itemId);
    Object.keys(formData)
        .forEach(k => formData[k] = chapter.value[k]);
    console.log(formData);
})

</script>

<style scoped>
:deep(.p-panel-header) {
    padding: 0;
}
.ql-editor ol li[data-list="bullet"]::before {
    content: '\2022' !important;
}
</style>