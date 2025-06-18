<template>
    <CreateStoryLayout>
        <Panel class="default-form">
            <template #header> 
                <v-col>
                    <h2>Выберите персонажей</h2>
                </v-col>
            </template>
            <v-container>
            <v-form>
                <v-row>
                    <v-col>
                        <AutoComplete class="items-autocomplete" 
                            v-model="characterData.chosenInputValue" optionLabel="name" 
                            :suggestions="characterData.filteredItems.value" 
                            @complete="search" 
                            @option-select="addItem" 
                            placeholder="Введите имя..."
                            forceSelection emptySearchMessage="Ничего не найдено" @keydown.enter.native.prevent/>
                    </v-col>
                    <v-col cols="auto">
                        <Button class="clear-items-button" severity="primary"
                            @click="characterData.chosenItems.length = 0;">
                            <i class="pi pi-ban"></i>
                            <span>Очистить</span>
                        </Button>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col>
                        <ScrollPanel v-if="characterData.chosenItems.length > 0">
                            <ItemCardSimple v-for="item in characterData.chosenItems" :key="item.id" :name="item.name"
                                @delete-item="deleteItem(item.id)"/>
                        </ScrollPanel>
                        <div v-else class="no-items">
                            <h2>Добавьте элементы...</h2>
                        </div>
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
import { Panel, Button, AutoComplete, ScrollPanel } from 'primevue';
import ItemCardSimple from '../components/ItemCardSimple.vue';
import { reactive } from 'vue';
import options_list from '@/services/mocks/search_options.js';

const characterData = reactive({
    chosenInputValue: null,
    items: options_list,
    filteredItems: [],
    chosenItems: [],
});

const search = (event) => {
    const query = event.query.toLowerCase();
    characterData.filteredItems.value = characterData.items.filter(item => 
        item.name.toLowerCase().includes(query)
    );
    console.log(`filtered items: ${JSON.stringify(characterData.filteredItems.value.map(a => a.name))}`);
};
const addItem = (event) => {
    if (!characterData.chosenItems.includes(event.value)) {
        characterData.chosenItems.push(event.value);
    }
    console.log(`added ${event.value.name} to chosen items: 
    ${JSON.stringify(characterData.chosenItems.map(a => a.name))}`);
};
const deleteItem = (itemId) => {
    characterData.chosenItems = characterData.chosenItems.filter(item => item.id != itemId);
    console.log(`deleted id=${itemId}: 
    ${JSON.stringify(characterData.chosenItems.map(a => a.name))}`);
};
</script>

<style scoped>
.items-autocomplete, .items-autocomplete :deep(input) {
    width: 100%;
}
.p-scrollpanel, .no-items {
    height: 350px;
}
.no-items {
    border: 1px solid var(--main-light-color);
    display: grid;
    text-align: center;
    align-items: center;
    color: grey;
}

@media (max-width: 600px) {
    .clear-items-button span {
        display: none;
    }
}
</style>