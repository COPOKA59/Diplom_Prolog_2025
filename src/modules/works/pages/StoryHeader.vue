<template>
    <CreateStoryLayout>
        <!-- <template v-slot:navbar>
            <CreateStoryNavBar/>
        </template> -->

        <Panel class="default-form">
            <v-container>
                <v-form>
                    
                <BasicInput :label="'Название'" :inputType="'input'"/>

                <v-row>
                    <v-col cols="12" lg="2" md="2" sm="12">
                        <label>Работа является переводом</label>
                    </v-col>
                    <v-col cols="12" lg="10" md="10" sm="12" class="default-form-btns">
                        <RadioButtonGroup v-model="workProps.selectedTranslation">
                            <div>
                                <RadioButton v-model="workProps.selectedTranslation" value="no-translation"/>
                                <label>нет</label>
                            </div>
                            
                            <div>
                                <RadioButton v-model="workProps.selectedTranslation" value="translation"/>
                                <label>да</label>
                            </div>

                            <div v-if="workProps.selectedTranslation === 'translation'">
                                <label class="input-label">Автор переведённой работы</label>
                                <InputText fluid/>
                            </div>
                        </RadioButtonGroup>
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
                                <RadioButton v-model="workProps.selectedWorkType" value="original"/>
                                <label>оригинальная работа</label>
                            </div>
                            
                            <div>
                                <RadioButton v-model="workProps.selectedWorkType" value="fandom"/>
                                <label>фандом</label>
                            </div>

                            <div v-if="workProps.selectedWorkType === 'fandom'">
                                <label class="input-label">Фандом</label>
                                <InputText fluid/>
                            </div>
                        </RadioButtonGroup>
                    </v-col>
                </v-row>

                <BasicInput :inputType="'radiobutton'"
                    :label="workProps.workData.workDirection.label"
                    :options="workProps.workData.workDirection.options"
                    v-model="workProps.selectedWorkDirection"/>
                <BasicInput :inputType="'radiobutton'"
                    :label="workProps.workData.workRating.label"
                    :options="workProps.workData.workRating.options"
                    v-model="workProps.selectedWorkRating"/>
                
                <BasicInput :label="'Жанры'" :inputType="'input'"/>
                <BasicInput :label="'Персонажи'" :inputType="'input'"/>
                <BasicInput :label="'Отношения'" :inputType="'input'"/>
                <BasicInput :label="'Теги'" :inputType="'input'"/>

                <Divider/>

                <BasicInput :inputType="'radiobutton'"
                    :label="workProps.workData.workSize.label"
                    :options="workProps.workData.workSize.options"
                    v-model="workProps.selectedWorkSize"/>
                <BasicInput :inputType="'radiobutton'"
                    :label="workProps.workData.workStatus.label"
                    :options="workProps.workData.workStatus.options"
                    v-model="workProps.selectedWorkStatus"/>

                <Divider/>

                <v-row>
                    <v-col cols="12" lg="2" md="2" sm="12" :class="input-label"> 
                        <label>Описание</label>
                    </v-col>
                    <v-col cols="12" lg="10" md="10" sm="12" class="default-form-input"> 
                        <Textarea rows="5" cols="30" />
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="12" lg="2" md="2" sm="12" :class="input-label"> 
                        <label>Обложка</label>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" class="img-col"> 
                        <div class="work-picture-container">
                            <img class="user-profile-img" :src="imageUrl"/>
                            <FileUpload 
                                accept="image/*" 
                                mode="basic" 
                                class="p-button-primary"
                                chooseLabel="Загрузить изображение" customUpload auto
                                @select="onFileUpload" 
                            />
                        </div>
                    </v-col>
                </v-row>

                <v-row >
                    <v-col class="save-button">
                        <Button severity="primary">Сохранить</Button>
                    </v-col>
                </v-row>
                    
                </v-form>
            </v-container>
        </Panel>
        
    </CreateStoryLayout>
</template>

<script setup>
/* import MainLayout from '@/layouts/MainLayout.vue';
import CreateStoryNavBar from '../components/CreateStoryNavBar.vue'; */
import CreateStoryLayout from '@/layouts/CreateStoryLayout.vue';
import BasicInput from '@/modules/core/components/BasicInput.vue';
import { Panel, Divider, Button, InputText, Textarea,
        RadioButton, RadioButtonGroup, FileUpload } from "primevue";
import { VContainer, VCol, VRow, VForm } from "vuetify/lib/components/index.mjs";
import workProps from '@/services/work_properties';
import { ref } from 'vue';

const imageUrl = ref('https://images.unsplash.com/photo-1543270122-f7a11ad44f3a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
const onFileUpload = (event) => {
  const file = event.files[0]; // Get the uploaded file
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        imageUrl.value = e.target.result; // Update the image URL with the uploaded file
    };
    reader.readAsDataURL(file); // Read the file as a data URL
  }
  
};
</script>

<style scoped>
.work-picture-container {
    max-width: 200px;
}
.work-picture-container :deep(.p-button-primary), img {
    width: 100%;
}
.work-picture-container :deep(.p-button-primary) {
    margin-top: 10px;
}
.work-picture-container img {
    aspect-ratio: 2 / 3;
    object-fit: cover;
}
</style>