<template>
    <MainLayout :layout_container="true">
            <Panel class="default-form">
                <template #header> 
                    <v-col>
                        <h2>Расширенный поиск</h2>
                    </v-col>
                    
                </template>

                <v-container>
                    <v-form>

                        <BasicInput :label="'Название'" :inputType="'input'"
                        v-model="formData.name" />
                        <BasicInput :label="'Автор'" :inputType="'input'"
                        v-model="formData.author" />

                        <v-row>
                            <v-col cols="12" lg="2" md="2" sm="12" class="input-label">
                                <label>Дата</label>
                            </v-col>
                            <v-col cols="12" lg="10" md="10" sm="12" class="default-form-input">
                                <div style="display: flex; gap: 60px;">
                                    <div>
                                        <label class="input-label">от: </label>
                                        <DatePicker id="search-input-work-date" :minDate="minDate" :maxDate="maxDate"
                                        v-model="formData.startDate"/>
                                    </div>
                                    <div>
                                        <label class="input-label">до: </label>
                                        <DatePicker id="search-input-work-date2" :minDate="minDate" :maxDate="maxDate"
                                        v-model="formData.endDate"/>
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
                                <RadioButtonGroup v-model="formData.type">
                                    <div>
                                        <RadioButton :value="1"/>
                                        <label>оригинальная работа</label>
                                    </div>
                                    
                                    <div>
                                        <RadioButton :value="2"/>
                                        <label>фандом</label>
                                    </div>

                                    <div v-if="formData.type === 2">
                                        <label class="input-label">Фандомы</label>
                                        <MultiSelect :options="workProps.workData.fandoms.options"
                                        optionLabel="name" optionValue="id"
                                        filter
                                        v-model="formData.fandoms"
                                        />
                                    </div>
                                </RadioButtonGroup>
                            </v-col>
                        </v-row>


                        <BasicInput :inputType="'checkbox'"
                            :label="workProps.workData.workDirection.label"
                            :options="workProps.workData.workDirection.options"
                            v-model="formData.orientation"/>
                        <BasicInput :inputType="'checkbox'"
                            :label="workProps.workData.workRating.label"
                            :options="workProps.workData.workRating.options"
                            v-model="formData.rating"/>


                        
                        <v-row>
                            <v-col cols="12" lg="2" md="2" sm="12" class="input-label">
                                <label>Жанры</label>
                            </v-col>
                            <v-col cols="12" lg="10" md="10" sm="12" class="default-form-input">
                                <MultiSelect :options="workProps.workData.workGenres.options"
                                optionLabel="name" optionValue="id"
                                filter
                                v-model="formData.genres"
                                />
                            </v-col>
                        </v-row>

                        <!-- <v-row>
                            <v-col cols="12" lg="2" md="2" sm="12" class="input-label">
                                <label>Теги</label>
                            </v-col>
                            <v-col cols="12" lg="10" md="10" sm="12" class="default-form-input">
                                <MultiSelect :options="workProps.workData.workTags.options"
                                optionLabel="name" optionValue="id"
                                filter
                                v-model="formData.tags"
                                />
                            </v-col>
                        </v-row> -->


                        <Divider/>


                        <BasicInput :inputType="'checkbox'"
                            :label="workProps.workData.workSize.label"
                            :options="workProps.workData.workSize.options"
                            v-model="formData.size"/>
                        <BasicInput :inputType="'checkbox'"
                            :label="workProps.workData.workStatus.label"
                            :options="workProps.workData.workStatus.options"
                            v-model="formData.status"/>

                        <v-row >
                            <v-col class="search-button">
                                <Button severity="primary"
                                @click="
                                console.log('----------- formData -----------');
                                Object.keys(formData).forEach(key => {
                                    console.log(`${key}: ${formData[key]}`);
                                });
                                ">
                                    Найти
                                </Button>
                            </v-col>
                        </v-row>
                        
                    </v-form>
                </v-container>

            </Panel>
    </MainLayout>
</template>

<script setup>
import MainLayout from "@/layouts/MainLayout.vue";
import BasicInput from "../components/BasicInput.vue";
import { Panel, Divider, Button, InputText, DatePicker, 
        RadioButton, RadioButtonGroup, Checkbox, CheckboxGroup,
        MultiSelect } from "primevue";
import { VContainer, VCol, VRow, VForm } from "vuetify/lib/components/index.mjs";
import workProps from '@/services/work_properties';
import { reactive, onMounted } from "vue";

const formData = reactive({
    name: '',
    author: '',
    startDate: '',
    endDate: '',

    type: 1,
    fandoms: [],
    orientation: [],
    rating: [],
    genres: [],
    tags: [],
    size: [],
    status: [],
});
const minDate = new Date('2000-01-01');
const maxDate = new Date();

</script>