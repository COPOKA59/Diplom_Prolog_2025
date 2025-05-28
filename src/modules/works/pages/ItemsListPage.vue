<template>
    <MainLayout :layout_container="true">
        <Panel>
            <template #header>
                <h1>{{ $route.meta.itemData.title }}</h1>
            </template>
            <v-container style="max-width: 90vw;">
                <v-row >
                    <v-col class="default-button">
                        <Button severity="primary" icon="pi pi-plus" label="Создать"/>
                    </v-col>
                </v-row>

                <v-row v-for="item in itemsList">
                    <v-col>
                        <ItemCardEdit :id="item.id" :name="item.title" 
                        :pageName="$route.meta.itemData.pageName" @delete-item="deleteItem(item.id)"/>
                    </v-col>
                </v-row>
            </v-container>
        </Panel>
    </MainLayout>
</template>

<script setup>
import MainLayout from '@/layouts/MainLayout.vue';
import { VContainer, VRow, VCol, VForm } from 'vuetify/lib/components/index.mjs';
import { Panel, Button } from 'primevue';
import ItemCardEdit from '../components/ItemCardEdit.vue';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
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

watch(
    () => route.path,
    () => {
        loadData();
        console.log('forced update');
    }
);

const deleteItem = (itemId) => {
    itemsList.value = itemsList.value.filter(item => item.id != itemId);
    console.log(`deleted id=${itemId}: 
    ${JSON.stringify(itemsList.value.map(a => a.title))}`);
};
</script>

<style scoped>
h1 {
    text-align: center;
}
:deep(.p-panel-header) {
    padding-bottom: 0;
    justify-content: center;
}
</style>