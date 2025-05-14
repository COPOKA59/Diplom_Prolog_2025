<template>
    <MainLayout :layout_container="true">
        <!-- <v-container> -->
            <Panel>
                <template #header> 
                    <h2 style="padding-left: 16px;">Расширенный поиск</h2>
                </template>

                <v-container>
                    <!-- <h2>Расширенный поиск</h2> -->

                    <v-form>
                        <v-row>
                            <v-col cols="12" lg="2" md="2" sm="12" class="input-label"> 
                                <label>Название</label>
                            </v-col>
                            <v-col cols="12" lg="10" md="10" sm="12" class="advanced-search-input"> 
                                <InputText id="input-work-name"/>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="12" lg="2" md="2" sm="12" class="input-label">
                                <label>Автор</label>
                            </v-col>
                            <v-col cols="12" lg="10" md="10" sm="12" class="advanced-search-input">
                                <InputText id="input-work-author"/>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="12" lg="2" md="2" sm="12" class="input-label">
                                <label>Дата</label>
                            </v-col>
                            <v-col cols="12" lg="10" md="10" sm="12" class="advanced-search-input">
                                <div style="display: flex; gap: 60px;">
                                    <div>
                                        <label class="input-label">от: </label>
                                        <DatePicker id="input-work-date" :minDate="minDate" :maxDate="maxDate"/>
                                    </div>
                                    <div>
                                        <label class="input-label">до: </label>
                                        <DatePicker id="input-work-date2" :minDate="minDate" :maxDate="maxDate"/>
                                    </div>
                                </div>
                                
                            </v-col>
                        </v-row>


                        <Divider/>


                        <v-row>
                            <v-col cols="12" lg="2" md="2" sm="12">
                                <label>Тип работы</label>
                            </v-col>
                            <v-col cols="12" lg="10" md="10" sm="12" class="advanced-search-btns">
                                <RadioButtonGroup v-model="selectedType">
                                    <div>
                                        <RadioButton v-model="selectedType" 
                                                inputId="original-work-option"
                                                value="original"/>
                                        <label for="original-work-option">оригинальная работа</label>
                                    </div>
                                    
                                    <div>
                                        <RadioButton v-model="selectedType" 
                                                inputId="fandom-option" 
                                                value="fandom"/>
                                        <label for="fandom-option">фандом</label>
                                    </div>

                                    <div v-if="selectedType === 'fandom'">
                                        <label class="input-label">Фандом</label>
                                        <InputText id="input-fandom" fluid/>
                                    </div>
                                </RadioButtonGroup>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="12" lg="2" md="2" sm="12"> 
                                <label>Направление</label>
                            </v-col>
                            <v-col cols="12" lg="10" md="10" sm="12" class="advanced-search-btns"> 
                                <CheckboxGroup>
                                    <div>
                                        <Checkbox inputId="work-dir-get" value="get"/>
                                        <label for="work-dir-get"> гет </label>
                                    </div>
                                    
                                    <div>
                                        <Checkbox inputId="work-dir-gen" value="gen"/>
                                        <label for="work-dir-gen"> джен </label>
                                    </div>

                                    <div>
                                        <Checkbox inputId="work-dir-article" value="article"/>
                                        <label for="work-dir-article"> статья </label>
                                    </div>
                                </CheckboxGroup>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="12" lg="2" md="2" sm="12"> 
                                <label>Рейтинг</label>
                            </v-col>
                            <v-col cols="12" lg="10" md="10" sm="12" class="advanced-search-btns"> 
                                <CheckboxGroup>
                                    <div>
                                        <Checkbox inputId="work-rating-g" value="G"/>
                                        <label for="work-rating-g"> G </label>
                                    </div>
                                    
                                    <div>
                                        <Checkbox inputId="work-rating-pg-13" value="PG-13"/>
                                        <label for="work-rating-pg-13"> PG-13 </label>
                                    </div>

                                    <div>
                                        <Checkbox inputId="work-rating-r" value="R"/>
                                        <label for="work-rating-g"> R </label>
                                    </div>

                                    <div>
                                        <Checkbox inputId="work-rating-nc-17" value="NC-17"/>
                                        <label for="work-rating-nc-17"> NC-17 </label>
                                    </div>

                                    <div>
                                        <Checkbox inputId="work-rating-nc-21" value="NC-21"/>
                                        <label for="work-rating-nc-21"> NC-21 </label>
                                    </div>
                                </CheckboxGroup>
                            </v-col>
                        </v-row>


                        <v-row>
                            <v-col cols="12" lg="2" md="2" sm="12" class="input-label"> 
                                <label>Жанры</label>
                            </v-col>
                            <v-col cols="12" lg="10" md="10" sm="12" class="advanced-search-input"> 
                                <InputText id="input-genres"/>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="12" lg="2" md="2" sm="12" class="input-label"> 
                                <label>Персонажи</label>
                            </v-col>
                            <v-col cols="12" lg="10" md="10" sm="12" class="advanced-search-input"> 
                                <InputText id="input-characters"/>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="12" lg="2" md="2" sm="12" class="input-label"> 
                                <label>Отношения</label>
                            </v-col>
                            <v-col cols="12" lg="10" md="10" sm="12" class="advanced-search-input"> 
                                <InputText id="input-relationships"/>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="12" lg="2" md="2" sm="12" class="input-label"> 
                                <label>Теги</label>
                            </v-col>
                            <v-col cols="12" lg="10" md="10" sm="12" class="advanced-search-input"> 
                                <InputText id="input-tags"/>
                            </v-col>
                        </v-row>


                        <Divider/>


                        <v-row>
                            <v-col cols="12" lg="2" md="2" sm="12"> 
                                <label>Размер</label>
                            </v-col>
                            <v-col cols="12" lg="10" md="10" sm="12" class="advanced-search-btns"> 
                                <CheckboxGroup>
                                    <div>
                                        <Checkbox inputId="work-size-drabble" value="drabble"/>
                                        <label for="work-size-drabble"> драббл </label>
                                    </div>
                                    
                                    <div>
                                        <Checkbox inputId="work-size-mini" value="mini"/>
                                        <label for="work-size-mini"> мини </label>
                                    </div>

                                    <div>
                                        <Checkbox inputId="work-size-midi" value="midi"/>
                                        <label for="work-size-midi"> миди </label>
                                    </div>

                                    <div>
                                        <Checkbox inputId="work-size-maxi" value="maxi"/>
                                        <label for="work-size-maxi"> макси </label>
                                    </div>
                                </CheckboxGroup>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="12" lg="2" md="2" sm="12"> 
                                <label>Статус</label>
                            </v-col>
                            <v-col cols="12" lg="10" md="10" sm="12" class="advanced-search-btns"> 
                                <!-- <CheckboxGroup>
                                    <div>
                                        <Checkbox inputId="work-status-in-progress" value="in-progress"/>
                                        <label for="work-status-in-progress"> в процессе </label>
                                    </div>
                                    
                                    <div>
                                        <Checkbox inputId="work-status-complete" value="complete"/>
                                        <label for="work-status-complete"> завершено </label>
                                    </div>
                                </CheckboxGroup> -->
                                <RadioButtonGroup v-model="selectedStatus">
                                    <div>
                                        <RadioButton v-model="selectedStatus" 
                                                inputId="work-status-in-progress"
                                                value="in-progress"/>
                                        <label for="work-status-in-progress"> в процессе </label>
                                    </div>
                                    
                                    <div>
                                        <RadioButton v-model="selectedStatus" 
                                                inputId="work-status-complete" 
                                                value="complete"/>
                                        <label for="work-status-complete"> завершено </label>
                                    </div>
                                </RadioButtonGroup>
                            </v-col>
                        </v-row>

                        <v-row class="search-button">
                            <Button severity="primary">Найти</Button>
                        </v-row>
                        
                    </v-form>
                </v-container>

            </Panel>
        <!-- </v-container> -->
    </MainLayout>
</template>

<script setup>
import MainLayout from "@/layouts/MainLayout.vue";
import { Panel, Divider, Button, InputText, DatePicker, 
        RadioButton, RadioButtonGroup, Checkbox, CheckboxGroup } from "primevue";
import { VContainer, VCol, VRow, VForm } from "vuetify/lib/components/index.mjs";
import { ref } from 'vue';

const selectedType = ref('original');
const selectedStatus = ref('in-progress')
const minDate = new Date('2000-01-01');
const maxDate = new Date();

</script>

<style scoped>
.input-label {
    margin-top: auto; 
    margin-bottom: auto;
}
.p-divider {
    margin-top: 40px;
    margin-bottom: 40px;
}
.advanced-search-input .p-inputtext, .p-datepicker {
    width: 100%;
}

.advanced-search-btns .p-radiobutton-group, .p-checkbox-group {
    display: grid;
    gap: 20px;
}
.advanced-search-btns .p-radiobutton-group div {
    display: flex;
    gap: 10px;
}
.advanced-search-btns .p-radiobutton-group div .v-row {
    display: flex;
    gap: 10px;
}

.p-panel .search-button {
    display: flex;
    justify-content: end;
}
</style>