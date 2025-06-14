<template>
    <CreateStoryLayout>
        <Panel class="default-form">
            <v-container>
                <v-form>
                    
                <BasicInput :label="'Название'" :inputType="'input'"
                v-model="formData.name"/>

                <v-row>
                    <v-col cols="12" lg="2" md="2" sm="12">
                        <label>Работа является переводом</label>
                    </v-col>
                    <v-col cols="12" lg="10" md="10" sm="12" class="default-form-btns">
                        <RadioButtonGroup v-model="formData.translation">
                            <div>
                                <RadioButton :value="false"/>
                                <label>нет</label>
                            </div>
                            
                            <div>
                                <RadioButton :value="true"/>
                                <label>да</label>
                            </div>

                            <div v-if="formData.translation === true">
                                <label class="input-label">Автор переведённой работы</label>
                                <InputText fluid v-model="formData.author_original"/>
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
                                <MultiSelect :options="metaData?.fandoms"
                                optionLabel="name" optionValue="id"
                                filter
                                v-model="formData.fandom"
                                />
                            </div>
                        </RadioButtonGroup>
                    </v-col>
                </v-row>

                <BasicInput :inputType="'radiobutton'"
                    :label="'Направление'"
                    :options="metaData?.orientation"
                    v-model="formData.orientation"/>
                <BasicInput :inputType="'radiobutton'"
                    :label="'Рейтинг'"
                    :options="metaData?.rating"
                    v-model="formData.rating"/>
                
                <v-row>
                    <v-col cols="12" lg="2" md="2" sm="12" class="input-label">
                        <label>Жанры</label>
                    </v-col>
                    <v-col cols="12" lg="10" md="10" sm="12" class="default-form-input">
                        <MultiSelect :options="metaData?.genres"
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

                <BasicInput :inputType="'radiobutton'"
                    :label="'Размер'"
                    :options="metaData?.size"
                    v-model="formData.size"/>
                <BasicInput :inputType="'radiobutton'"
                    :label="'Статус'"
                    :options="metaData?.status"
                    v-model="formData.status"/>

                <Divider/>

                <v-row>
                    <v-col cols="12" lg="2" md="2" sm="12"> 
                        <label>Описание</label>
                    </v-col>
                    <v-col cols="12" lg="10" md="10" sm="12" class="default-form-input"> 
                        <Textarea rows="5" cols="30" v-model="formData.description"/>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="12" lg="2" md="2" sm="12"> 
                        <label>Обложка</label>
                    </v-col>
                    <v-col cols="12" lg="3" md="3" sm="12" class="img-col"> 
                        <div class="work-picture-container">
                            <img class="user-profile-img" :src="image"/>
                            <FileUpload 
                                accept="image/*" 
                                mode="basic" 
                                class="p-button-primary"
                                chooseLabel="Загрузить изображение" customUpload auto
                                @select="onFileSelect" 
                            />
                        </div>
                    </v-col>
                </v-row>

                <v-row >
                    <v-col class="save-button">
                        <Button severity="primary"
                        @click="putWork(workId, formData);">
                            Сохранить
                        </Button>
                    </v-col>
                </v-row>
                    
                </v-form>
            </v-container>
        </Panel>
        
    </CreateStoryLayout>
</template>

<script setup>
import CreateStoryLayout from '@/layouts/CreateStoryLayout.vue';
import BasicInput from '@/modules/core/components/BasicInput.vue';
import { Panel, Divider, Button, InputText, Textarea, MultiSelect,
        RadioButton, RadioButtonGroup, FileUpload } from "primevue";
import { VContainer, VCol, VRow, VForm } from "vuetify/lib/components/index.mjs";
// import workProps from '@/services/work_properties';
import defaultCover from '@/assets/img/default_cover.svg';
import { ref, reactive, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { getWork, putWork } from '@/services/works/works';
import { getMetaData } from '@/services/works/meta';

const formData = reactive({
    name: '',
    translation: 0,
    author_original: '',
    
    type: 1,
    fandom: [],
    orientation: 1,
    rating: 1,
    genres: [],
    tags: [],

    size: 1,
    status: 1,

    description: '',
});

const metaData = ref();

const route = useRoute();
const workId = route.params.id;
const work = ref();

onMounted( async () => {
    work.value = await getWork(workId);
    Object.keys(formData)
        .forEach(k => formData[k] = work.value[k]);
    metaData.value = await getMetaData();
})


const image = ref(defaultCover);
const selectedFile = ref(null);

const onFileSelect = (event) => {
  const file = event.files[0]; // Get the selected file
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        image.value = e.target.result; // Update the image URL with the selected file
    };
    reader.readAsDataURL(file); // Read the file as a data URL
  }
};

const uploadImage = () => {
  // Ensure a file is available before attempting to upload
  if (!selectedFile.value) {
    console.error("No file selected for upload.");
    return;
  }

  const formData = new FormData();
  // Append the selected file to FormData with the key 'file' (adjust key if needed by your API)
  formData.append('file', selectedFile.value);

  // Use fetch to send a POST request with the FormData object
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