<template>
    <CreateStoryLayout>
        <Panel class="default-form" v-if="currentStructureForm === null">
            <template #header> 
                <v-col>
                    <h2>Выберите структуру своего произведения</h2>
                </v-col>
            </template>
            <v-container>
                <v-row class="structure-row">
                    <v-col cols="12" lg="3" md="4" sm="12">
                        <div class="structure-option" @click="currentStructureForm = 'structure_1';">
                            <h3>Структура 1</h3>
                        </div>
                    </v-col>
                    <v-col cols="12" lg="3" md="4" sm="12">
                        <div class="structure-option">
                            <h3>Структура 2</h3>
                        </div>
                    </v-col>
                    <v-col cols="12" lg="3" md="4" sm="12">
                        <div class="structure-option">
                            <h3>Структура 3</h3>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </Panel>

        <v-container v-else>
            <v-row>
                <v-col>
                    <Button icon="pi pi-arrow-left" label="Вернуться к выбору структуры" severity="secondary"
                            @click="currentStructureForm = null;"/>
                </v-col>
            </v-row>

            <v-row>
                <v-col>
                    <component :is="structures[currentStructureForm]"/>
                </v-col>
            </v-row>
        </v-container>
    </CreateStoryLayout>
</template>

<script setup>
import CreateStoryLayout from '@/layouts/CreateStoryLayout.vue';
import { VContainer, VRow, VCol } from 'vuetify/lib/components/index.mjs';
import { Panel, Button } from 'primevue';
import StoryStructureForm1 from '../components/StoryStructureForm1.vue';
import { ref } from 'vue';

/*
currentStructureForm будет подгружаться из БД, если пользователь раннее уже
выбирал форму. Если форма не была выбрана, значение currentStructureForm будет null.
*/

const currentStructureForm = ref(null);
const structures = {
    structure_1: StoryStructureForm1
};
</script>

<style scoped>
.structure-row {
    display: flex;
    justify-content: space-between;
}
.structure-option {
    aspect-ratio: 1 / 1;
    background-color: var(--p-primary-600);
    display: flex;
    justify-content: center;
    align-items: center;
}
.structure-option:hover {
    text-decoration: underline;
    transition-duration: 0.3ms;
    border: 2px solid var(--main-light-color);
}
</style>