<!-- <template>
    <Panel>
        <Stepper value="1">
            <StepList class="the-step-list">
                <Step value="1"> Основная информация </Step>
                <Step value="2"> Мироустройство </Step>
                <Step value="3"> Персонажи </Step>
                <Step value="4"> Произведения </Step>
            </StepList>
            <StepPanels>
                <v-form>
                <StepPanel v-slot="{ activateCallback }" value="1">
                    <v-container>
                        <v-row class="step-buttons">
                            <v-col cols="auto"></v-col>
                            <v-col> <span>Основная информация</span> </v-col>
                            <v-col cols="auto">
                                <Button icon="pi pi-arrow-right" iconPos="right" severity="primary"
                                @click="activateCallback('2')" />
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
                            <v-col> <span>Мироустройство</span> </v-col>
                            <v-col cols="auto">
                                <Button icon="pi pi-arrow-right" iconPos="right" severity="primary"
                                @click="activateCallback('3')" />
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
                            <v-col> <span>Персонажи</span> </v-col>
                            <v-col cols="auto">
                                <Button icon="pi pi-arrow-right" iconPos="right" severity="primary"
                                @click="activateCallback('4')" />
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
                            <v-col> <span>Произведения</span> </v-col>
                            <v-col cols="auto" class="step-button-left">
                            </v-col>
                        </v-row>
                    </v-container>
                </StepPanel>

                <v-row>
                    <v-col class="default-button">
                        <Button severity="primary">Сохранить</Button>
                    </v-col>
                </v-row>
                
                </v-form>
            </StepPanels>
        </Stepper>
    </Panel>
</template> -->
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
                            <v-col cols="auto"></v-col>
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
                                <!-- <AutoComplete class="items-autocomplete" 
                                    v-model="chosenInputValue" optionLabel="name" :suggestions="filteredItems" 
                                    @complete="search" @option-select="addItem" placeholder="Введите название..."
                                    forceSelection/> -->
                                <AutoComplete class="items-autocomplete" 
                                    v-model="itemCategories.category1.chosenInputValue" optionLabel="name" 
                                    :suggestions="itemCategories.category1.filteredItems.value" 
                                    @complete="(event) => search(event, 'category1')" 
                                    @option-select="(event) => addItem(event, 'category1')" 
                                    placeholder="Введите название..."
                                    forceSelection/>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col>
                                <!-- <ScrollPanel v-if="chosenItems.length > 0">
                                    <ItemCard v-for="item in chosenItems" :key="item.id" :name="item.name"
                                        @delete-item="deleteItem(item.id)"/>
                                </ScrollPanel> -->
                                <ScrollPanel v-if="itemCategories.category1.chosenItems.length > 0">
                                    <ItemCard v-for="item in itemCategories.category1.chosenItems" :key="item.id" :name="item.name"
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
                                    forceSelection/>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col>
                                <!-- <ScrollPanel v-if="chosenItems.length > 0">
                                    <ItemCard v-for="item in chosenItems" :key="item.id" :name="item.name"
                                    @delete-item="deleteItem(item.id)"/>
                                </ScrollPanel> -->
                                <ScrollPanel v-if="itemCategories.category2.chosenItems.length > 0">
                                    <ItemCard v-for="item in itemCategories.category2.chosenItems" :key="item.id" :name="item.name"
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
import { Listbox, Button, Textarea, InputText, Panel, Tab, Tabs, TabList, TabPanel, TabPanels,
        Stepper, Step, StepList, StepPanel, StepPanels, Dialog, Divider, ScrollPanel, AutoComplete } from 'primevue';
import BasicInput from '@/modules/core/components/BasicInput.vue';
import ItemCard from './ItemCard.vue';
import { ref } from "vue";

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

import options_list from '@/services/search_options';
const chosenInputValue = ref(null);

const items = ref(options_list);
const chosenItems = ref([]);
const filteredItems = ref(items.value); // ref([]);

/* const search = (event, filtered) => {
    const query = event.query.toLowerCase();
    filteredItems.value = items.value.filter(item => 
        item.name.toLowerCase().includes(query)
    );
};
const addItem = (event) => {
    console.log('event value: ', event.value);
    if (chosenItems.value.includes(event.value)) {
        console.log(`${event.value.name} is already in the array.`);
    }
    else {
        chosenItems.value.push(event.value);
    }
    console.log('value list: ', chosenItems);
};

const deleteItem = (itemId) => {
    chosenItems.value = chosenItems.value.filter(item => item.id != itemId);
}; */



// ---------| v2.0 |---------
const itemCategories = ref({
    category1: {
        chosenInputValue: ref(null),
        items: ref(options_list),
        filteredItems: ref([]),
        chosenItems: ref([]),
    },
    category2: {
        chosenInputValue: ref(null),
        items: ref([
            { id: 0, name: 'qwerty' },
            { id: 1, name: 'abc' },
            { id: 2, name: 'oplkjmhngbf' },
        ]),
        filteredItems: ref([]),
        chosenItems: ref([]),
    },
});

const search = (event, category) => {
    const query = event.query.toLowerCase();
    itemCategories.value[category].filteredItems.value = itemCategories.value[category].items.filter(item => 
        item.name.toLowerCase().includes(query)
    );
    console.log(`filtered items of ${category}: ${JSON.stringify(itemCategories.value[category].filteredItems.value)}`);
};
const addItem = (event, category) => {
    if (!itemCategories.value[category].chosenItems.includes(event.value)) {
        itemCategories.value[category].chosenItems.push(event.value);
    }
    console.log(`added ${event.value.name} to chosen items of ${category}: 
    ${JSON.stringify(itemCategories.value[category].chosenItems)}`);
};
const deleteItem = (itemId, category) => {
    itemCategories.value[category].chosenItems = itemCategories.value[category].chosenItems.filter(item => item.id != itemId);
    console.log(`deleted id=${itemId} from chosen items of ${category}: 
    ${JSON.stringify(itemCategories.value[category].chosenItems)}`);
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
}
</style>