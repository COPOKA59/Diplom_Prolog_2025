<template>
    <MainLayout :layout_container="true">
        <Panel class="default-form">
            <template #header>
                <v-col>
                    <h2>Сборник</h2>
                </v-col>
            </template>
            <v-container>
            <v-form>
                <BasicInput :inputType="'input'" :label="'Название'"/>

                <v-row>
                    <v-col>
                        <h2>Произведения</h2>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col>
                        <AutoComplete class="items-autocomplete" 
                            v-model="itemData.chosenInputValue" optionLabel="name" 
                            :suggestions="itemData.filteredItems.value" 
                            @complete="search" 
                            @option-select="addItem" 
                            placeholder="Введите название..."
                            forceSelection emptySearchMessage="Ничего не найдено"/>
                    </v-col>
                    <v-col cols="auto">
                        <Button class="clear-items-button" severity="primary"
                            @click="itemData.chosenItems.length = 0;">
                            <i class="pi pi-ban"></i>
                            <span>Очистить</span>
                        </Button>
                    </v-col>
                </v-row>

                <v-row v-if="itemData.chosenItems.length > 0" v-for="work in itemData.chosenItems">
                    <v-col>
                        <ItemCardMain :id="work.id" :title="work.name" 
                        :pageName="'StoryPage'"
                        :canDelete="true" @delete-item="deleteItem(work.id)"/>
                    </v-col>
                </v-row>
                <v-row v-else>
                    <v-col>
                        <span>Начните вводить названия произведений для их добавления в сборник.</span>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col class="default-button">
                        <Button severity="primary">Сохранить</Button>
                    </v-col>
                </v-row>

            </v-form>
            </v-container>
        </Panel>
    </MainLayout>
</template>

<script setup>
import MainLayout from '@/layouts/MainLayout.vue';
import { VContainer, VRow, VCol, VForm } from 'vuetify/lib/components/index.mjs';
import { Panel, Button, AutoComplete } from 'primevue';
import BasicInput from '@/modules/core/components/BasicInput.vue';
import ItemCardMain from '../components/ItemCardMain.vue';
import { reactive, onMounted } from 'vue';
import { getWorks } from '@/services/api/works/works';

const itemData = reactive({
    chosenInputValue: null,
    items: [],
    filteredItems: [],
    chosenItems: [],
});

onMounted( async () => {
    itemData.items = await getWorks();
    }
)

const search = (event) => {
    const query = event.query.toLowerCase();
    itemData.filteredItems.value = itemData.items.filter(item => 
        item.name.toLowerCase().includes(query)
    );
    console.log(`filtered items: ${JSON.stringify(itemData.filteredItems.value.map(a => a.name))}`);
};
const addItem = (event) => {
    if (!itemData.chosenItems.includes(event.value)) {
        itemData.chosenItems.push(event.value);
    }
    console.log(`added ${event.value.name} to chosen items: 
    ${JSON.stringify(itemData.chosenItems.map(a => a.name))}`);
};
const deleteItem = (itemId) => {
    itemData.chosenItems = itemData.chosenItems.filter(item => item.id != itemId);
    console.log(`deleted id=${itemId}: 
    ${JSON.stringify(itemData.chosenItems.map(a => a.name))}`);
};
</script>

<style scoped>
.items-autocomplete, .items-autocomplete :deep(input) {
    width: 100%;
}
@media (max-width: 600px) {
    .clear-items-button span {
        display: none;
    }
}
</style>