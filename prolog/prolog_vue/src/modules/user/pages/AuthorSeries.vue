<template>
    <UserLayout>
        <Panel>
            <template #header>
                <v-col>
                    <h2>Сборники</h2>
                </v-col>
            </template>

            <v-container>
            <v-row v-for="item in itemsList">
                <v-col>
                    <ItemCardMain :id="item.id" :title="item.title" 
                    :pageName="'Series'" :canDelete="false"/>
                </v-col>
            </v-row>
            </v-container>
        </Panel>
    </UserLayout>
</template>

<script setup>
import UserLayout from '@/layouts/UserLayout.vue';
import { VContainer, VRow, VCol } from 'vuetify/lib/components/index.mjs';
import { Panel } from 'primevue';
import ItemCardMain from '@/modules/works/components/ItemCardMain.vue';
import { ref } from 'vue';

const props = defineProps({
    userName: String
});

const itemsList = ref([]);
const loadData = () => {
    itemsList.value.length = 0;
    for (let i = 0; i <= 10; i++) {
        itemsList.value.push(
            { id: i, title: `Название ${i+1}` }
        );
    }
};
loadData();
</script>