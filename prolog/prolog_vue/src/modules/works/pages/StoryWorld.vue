<template>
    <CreateStoryLayout>
        <Panel class="default-form">
            <template #header> 
                <v-col>
                    <h2>Выберите мир своего произведения</h2>
                </v-col>
            </template>
            <v-container>
            <v-form>
                <v-row>
                    <v-col>
                        <Select class="world-select" 
                            v-model="chosenInputValue" optionLabel="name" 
                            :options="items"
                            filter
                            placeholder="Введите название..." emptyFilterMessage="Ничего не найдено"/>
                    </v-col>
                </v-row>

                <v-row >
                    <v-col class="default-button">
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
import { Panel, Button, Select } from 'primevue';
import { ref } from 'vue';
import options_list from '@/services/search_options';

const chosenInputValue = ref(null);
const items = options_list;
</script>

<style scoped>
.world-select {
    width: 100%;
}
</style>