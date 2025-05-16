<template>
    <MainLayout :layout_container="true">
        <!-- <v-container> -->
            <Panel class="default-form">
                <template #header> 
                    <!-- <h2 style="padding-left: 16px;">Расширенный поиск</h2> -->
                    <v-col>
                        <h2>Расширенный поиск</h2>
                    </v-col>
                    
                </template>

                <v-container>
                    <v-form>

                        <BasicInput :label="'Название'" :inputType="'input'"/>
                        <BasicInput :label="'Автор'" :inputType="'input'"/>

                        <v-row>
                            <v-col cols="12" lg="2" md="2" sm="12" class="input-label">
                                <label>Дата</label>
                            </v-col>
                            <v-col cols="12" lg="10" md="10" sm="12" class="default-form-input">
                                <div style="display: flex; gap: 60px;">
                                    <div>
                                        <label class="input-label">от: </label>
                                        <DatePicker id="search-input-work-date" :minDate="minDate" :maxDate="maxDate"/>
                                    </div>
                                    <div>
                                        <label class="input-label">до: </label>
                                        <DatePicker id="search-input-work-date2" :minDate="minDate" :maxDate="maxDate"/>
                                    </div>
                                </div>
                                
                            </v-col>
                        </v-row>


                        <Divider/>


                        <v-row>
                            <v-col cols="12" lg="2" md="2" sm="12">
                                <label>Тип работы</label>
                            </v-col>
                            <v-col cols="12" lg="10" md="10" sm="12" class="default-form-btns">
                                <RadioButtonGroup v-model="workProps.selectedWorkType">
                                    <div>
                                        <RadioButton value="original"/>
                                        <label>оригинальная работа</label>
                                    </div>
                                    
                                    <div>
                                        <RadioButton value="fandom"/>
                                        <label>фандом</label>
                                    </div>

                                    <div v-if="workProps.selectedWorkType === 'fandom'">
                                        <label class="input-label">Фандом</label>
                                        <InputText fluid/>
                                    </div>
                                </RadioButtonGroup>
                            </v-col>
                        </v-row>


                        <BasicInput :inputType="'checkbox'"
                            :label="workProps.workData.workDirection.label"
                            :options="workProps.workData.workDirection.options"/>
                        <BasicInput :inputType="'checkbox'"
                            :label="workProps.workData.workRating.label"
                            :options="workProps.workData.workRating.options"/>


                        
                        <BasicInput :label="'Жанры'" :inputType="'input'"/>
                        <BasicInput :label="'Персонажи'" :inputType="'input'"/>
                        <BasicInput :label="'Отношения'" :inputType="'input'"/>
                        <BasicInput :label="'Теги'" :inputType="'input'"/>


                        <Divider/>


                        <BasicInput :inputType="'checkbox'"
                            :label="workProps.workData.workSize.label"
                            :options="workProps.workData.workSize.options"/>
                        <BasicInput :inputType="'checkbox'"
                            :label="workProps.workData.workStatus.label"
                            :options="workProps.workData.workStatus.options"/>
                        <!-- <BasicInput :inputType="'radiobutton'"
                            :label="workProps.workData.workStatus.label"
                            :options="workProps.workData.workStatus.options" v-model="selectedStatus"/> -->

                        <v-row >
                            <v-col class="search-button">
                                <Button severity="primary">Найти</Button>
                            </v-col>
                        </v-row>
                        
                    </v-form>
                </v-container>

            </Panel>
        <!-- </v-container> -->
    </MainLayout>
</template>

<script setup>
import MainLayout from "@/layouts/MainLayout.vue";
import BasicInput from "../components/BasicInput.vue";
import { Panel, Divider, Button, InputText, DatePicker, 
        RadioButton, RadioButtonGroup, Checkbox, CheckboxGroup } from "primevue";
import { VContainer, VCol, VRow, VForm } from "vuetify/lib/components/index.mjs";
import workProps from '@/services/work_properties';

const minDate = new Date('2000-01-01');
const maxDate = new Date();
</script>

<!-- <style scoped>
.default-form .input-label {
    margin-top: auto; 
    margin-bottom: auto;
}
.default-form .p-divider {
    margin-top: 40px;
    margin-bottom: 40px;
}
.default-form-input .p-inputtext, .p-datepicker {
    width: 100%;
}

.default-form-btns .p-radiobutton-group, .p-checkbox-group {
    display: grid;
    gap: 20px;
}
.default-form-btns .p-radiobutton-group div {
    display: flex;
    gap: 10px;
}
.default-form-btns .p-radiobutton-group div .v-row {
    display: flex;
    gap: 10px;
}
.default-form .search-button {
    display: flex;
    justify-content: end;
}
</style> -->