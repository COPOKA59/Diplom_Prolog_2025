<template>
    <CreateStoryLayout>
        <Panel class="default-form">

        <v-container>
            <v-form>
                <v-row class="questions-row" v-for="q in questions">
                    <v-col cols="12"> 
                        <label>{{ q.name }}</label>
                    </v-col>
                    <v-col cols="12" class="default-form-input"> 
                        <Textarea rows="4" />
                    </v-col>
                </v-row>

                <v-row >
                    <v-col class="save-button">
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
import { VContainer, VRow, VCol, VForm } from 'vuetify/lib/components/index.mjs';
import { Panel, Button, Textarea } from 'primevue';
import { getQuestions } from '@/services/works/meta';
import { ref, onMounted } from 'vue';


const questions = ref();
onMounted( async () => {
    questions.value = await getQuestions();
})
</script>

<style scoped>
.questions-row {
    margin-bottom: 20px;
}
</style>