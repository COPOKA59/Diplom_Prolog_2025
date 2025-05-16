<template>
    <CreateStoryLayout>
        <Panel class="default-form">
            <template #header> 
                <v-col>
                    <h2>Выберите структуру своего произведения</h2>
                </v-col>
            </template>
            <v-container>
                <v-row>
                    <v-col cols="12" lg="3" md="3" sm="12">
                        <div class="structure-1">
                            Структура 1
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </Panel>
    </CreateStoryLayout>
</template>

<script setup>
import CreateStoryLayout from '@/layouts/CreateStoryLayout.vue';
import { VContainer, VRow, VCol } from 'vuetify/lib/components/index.mjs';
import { Panel } from 'primevue';
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.structure-1 {
    aspect-ratio: 1 / 1;
    /* max-width: 300px; */
    background-color: grey;
    /* text-align: center; */
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>