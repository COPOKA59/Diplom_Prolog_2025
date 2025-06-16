<template>
    <Panel>
        <Stepper value="1">
            <StepList class="the-step-list">
                <Step v-for="step in formData[formType]" :value="step.value"> {{ step.title }} </Step>
            </StepList>
            <StepPanels>
                <v-form>
                <StepPanel v-slot="{ activateCallback }" value="1">
                    <v-container>
                        <v-row class="step-buttons">
                            <v-col> <span>{{ formData[formType][0].title }}</span> </v-col>
                            <v-col cols="auto">
                                <Button icon="pi pi-arrow-right" iconPos="right" severity="primary"
                                @click="activateCallback('2')" />
                            </v-col>
                            <Divider/>
                        </v-row>
                        <BasicInput :inputType="'input'" :label="formData[formType][0].contents[0]"/>

                        <v-row>
                            <v-col cols="12" lg="2" md="2" sm="12"> 
                                <label>{{formData[formType][0].contents[1]}}</label>
                            </v-col>
                            <v-col cols="12" lg="10" md="10" sm="12" class="default-form-input">
                                <Textarea rows="8"/>
                            </v-col>
                        </v-row>
                    </v-container>
                </StepPanel>
                <StepPanel v-slot="{ activateCallback }" value="2">
                    <v-container>
                        <v-row class="step-buttons">
                            <v-col cols="auto">
                                <Button icon="pi pi-arrow-left" iconPos="right" severity="primary"
                                @click="activateCallback('1')" />
                            </v-col>
                            <v-col> <span>{{ formData[formType][1].title }}</span> </v-col>
                            <v-col cols="auto">
                                <Button icon="pi pi-arrow-right" iconPos="right" severity="primary"
                                @click="activateCallback('3')" />
                            </v-col>
                            <Divider/>
                        </v-row>
                        <v-row v-for="inputItem in formData[formType][1].contents">
                            <v-col cols="12" lg="2" md="2" sm="12"> 
                                <label>{{ inputItem }}</label>
                            </v-col>
                            <v-col cols="12" lg="10" md="10" sm="12" class="default-form-input"> 
                                <Textarea rows="8"/>
                            </v-col>
                        </v-row>
                    </v-container>
                </StepPanel>
                <StepPanel v-slot="{ activateCallback }" value="3">
                    <v-container>
                        <v-row class="step-buttons">
                            <v-col cols="auto">
                                <Button icon="pi pi-arrow-left" iconPos="right" severity="primary"
                                @click="activateCallback('2')" />
                            </v-col>
                            <v-col> <span>{{ formData[formType][2].title }}</span> </v-col>
                            <v-col cols="auto">
                                <Button icon="pi pi-arrow-right" iconPos="right" severity="primary"
                                @click="activateCallback('4')" />
                            </v-col>
                            <Divider/>
                        </v-row>

                        <v-row>
                            <v-col>
                                <AutoComplete class="items-autocomplete" 
                                    v-model="itemCategories.category1.chosenInputValue" optionLabel="name" 
                                    :suggestions="itemCategories.category1.filteredItems.value" 
                                    @complete="(event) => search(event, 'category1')" 
                                    @option-select="(event) => addItem(event, 'category1')" 
                                    placeholder="Введите название..."
                                    forceSelection emptySearchMessage="Ничего не найдено"/>
                            </v-col>
                            <v-col cols="auto">
                                <Button class="clear-items-button" severity="primary"
                                    @click="itemCategories.category1.chosenItems.length = 0;">
                                    <i class="pi pi-ban"></i>
                                    <span>Очистить</span>
                                </Button>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col>
                                <ScrollPanel v-if="itemCategories.category1.chosenItems.length > 0">
                                    <ItemCardSimple v-for="item in itemCategories.category1.chosenItems" :key="item.id" :name="item.name"
                                        @delete-item="deleteItem(item.id, 'category1')"/>
                                </ScrollPanel>
                                <div v-else class="no-items">
                                    <h2>Добавьте элементы...</h2>
                                </div>
                            </v-col>
                        </v-row>
                    </v-container>
                </StepPanel>
                <StepPanel v-slot="{ activateCallback }" value="4">
                    <v-container>
                        <v-row class="step-buttons">
                            <v-col cols="auto">
                                <Button icon="pi pi-arrow-left" iconPos="right" severity="primary"
                                @click="activateCallback('3')" />
                            </v-col>
                            <v-col> <span>{{ formData[formType][3].title }}</span> </v-col>
                            <v-col cols="auto" class="step-button-left">
                            </v-col>
                            <Divider/>
                        </v-row>

                        <v-row>
                            <v-col>
                                <AutoComplete class="items-autocomplete" 
                                    v-model="itemCategories.category2.chosenInputValue" optionLabel="name" 
                                    :suggestions="itemCategories.category2.filteredItems.value" 
                                    @complete="(event) => search(event, 'category2')" 
                                    @option-select="(event) => addItem(event, 'category2')" 
                                    placeholder="Введите название..."
                                    forceSelection emptySearchMessage="Ничего не найдено"/>
                            </v-col>
                            <v-col cols="auto">
                                <Button class="clear-items-button" severity="primary"
                                    @click="itemCategories.category2.chosenItems.length = 0;">
                                    <i class="pi pi-ban"></i>
                                    <span>Очистить</span>
                                </Button>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col>
                                <ScrollPanel v-if="itemCategories.category2.chosenItems.length > 0">
                                    <ItemCardSimple v-for="item in itemCategories.category2.chosenItems" :key="item.id" :name="item.name"
                                        @delete-item="deleteItem(item.id, 'category2')"/>
                                </ScrollPanel>
                                <div v-else class="no-items">
                                    <h2>Добавьте элементы...</h2>
                                </div>
                            </v-col>
                        </v-row>
                    </v-container>
                </StepPanel>

                <v-container>
                    <v-row>
                        <v-col class="default-button">
                            <Button severity="primary">Сохранить</Button>
                        </v-col>
                    </v-row>
                </v-container>
                
                </v-form>
            </StepPanels>
        </Stepper>
    </Panel>
</template>

<script setup>
import { VContainer, VRow, VCol, VForm } from 'vuetify/lib/components/index.mjs';
import { Button, Textarea, AutoComplete, 
        Divider, Panel, ScrollPanel, 
        Stepper, Step, StepList, StepPanel, StepPanels } from 'primevue';
import BasicInput from '@/modules/core/components/BasicInput.vue';
import ItemCardSimple from './ItemCardSimple.vue';
import { reactive } from "vue";

const props = defineProps({
    formType: {
        default: 'world',
        type: String
    }
});

const formData = {
    world: [
        { title: 'Основная информация', value: '1',
            contents: ['Название', 'Описание']
        },
        { title: 'Мироустройство', value: '2',
        contents: ['Религия', 'Политика']
        },
        { title: 'Персонажи', value: '3' },
        { title: 'Произведения', value: '4' }
    ],
    character: [
        { title: 'Основная информация', value: '1',
            contents: ['Имя', 'Описание']
        },
        { title: 'Мироустройство', value: '2',
        contents: ['Раса', 'Вера', 'Фракция']
        },
        { title: 'Миры', value: '3' },
        { title: 'Произведения', value: '4' }
    ]
};

//-----------| AutoComplete |-----------

import options_list from '@/services/mocks/search_options';

const itemCategories = reactive({
  category1: {
    chosenInputValue: null,
    items: options_list,
    filteredItems: [],
    chosenItems: [],
  },
  category2: {
    chosenInputValue: null,
    items: [
      { id: 0, name: 'qwerty' },
      { id: 1, name: 'abc' },
      { id: 2, name: 'oplkjmhngbf' },
    ],
    filteredItems: [],
    chosenItems: [],
  },
});

const search = (event, category) => {
    const query = event.query.toLowerCase();
    itemCategories[category].filteredItems.value = itemCategories[category].items.filter(item => 
        item.name.toLowerCase().includes(query)
    );
    console.log(`filtered items of ${category}: ${JSON.stringify(itemCategories[category].filteredItems.value)}`);
};
const addItem = (event, category) => {
    if (!itemCategories[category].chosenItems.includes(event.value)) {
        itemCategories[category].chosenItems.push(event.value);
    }
    console.log(`added ${event.value.name} to chosen items of ${category}: 
    ${JSON.stringify(itemCategories[category].chosenItems)}`);
};
const deleteItem = (itemId, category) => {
    itemCategories[category].chosenItems = itemCategories[category].chosenItems.filter(item => item.id != itemId);
    console.log(`deleted id=${itemId} from chosen items of ${category}: 
    ${JSON.stringify(itemCategories[category].chosenItems)}`);
};
</script>

<style scoped>
.step-buttons {
    display: none;
    align-items: center;
    text-align: center;
}
textarea {
    resize: none;
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

.items-autocomplete, .items-autocomplete :deep(input) {
    width: 100%;
}

@media (max-width: 600px) {
    .the-step-list {
        display: none;
    }
    :deep(.p-panel-content) {
        padding: 0;
    }
    :deep(.p-panel-header) {
        padding: 0;
    }
    .step-buttons span {
        font-size: 14px;
    }
    .step-buttons {
        display: flex;
    }
    .step-buttons .v-col {
        padding: 6px;
    }
    .clear-items-button span {
        display: none;
    }
}
</style>