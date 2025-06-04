<template>
    <MainLayout :layout_container="true">
        <Card class="settings-card">
            <template #content>
                <v-container>
                    <v-form>
                    <v-row>
                        <v-col class="settings-title"><h2>Редактирование профиля</h2></v-col>
                    </v-row>
                
                    <v-row>
                        <v-col cols="12" lg="3" md="3" sm="12">
                            <div class="profile-picture-container">
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
                        <v-col cols="12" lg="9" md="9" sm="12" class="input-container">
                            <label>Описание</label>
                            <Textarea rows="6"/>
                        </v-col>
                    </v-row>
                
                    <v-row>
                        <v-col><Divider/></v-col>
                    </v-row>
                    

                    <v-row>
                        <v-col class="settings-title"><h2>Изменение учётных данных</h2></v-col>
                    </v-row>

                    <v-row>
                        <v-col class="input-column" cols="12" lg="5" md="5">
                            <div class="input-container" style="margin-bottom: 20px;">
                                <label>Имя</label>
                                <InputText/>
                            </div>
                            

                            <div class="input-container">
                                <label>Почта</label>
                                <InputText/>
                            </div>

                            <div class="input-container">
                                <label>Введите пароль для подтверждения</label>
                                <!-- <InputText/> -->
                                <Password :feedback="false" fluid toggleMask/>
                            </div>
                        </v-col>

                        <v-spacer/>

                        <v-col class="input-column" cols="12" lg="5" md="5">
                            <div class="input-container">
                                <label>Старый пароль</label>
                                <!-- <InputText/> -->
                                <Password :feedback="false" fluid toggleMask/>
                            </div>

                            <div class="input-container">
                                <label>Новый пароль</label>
                                <!-- <InputText/> -->
                                <Password :feedback="false" fluid toggleMask/>
                            </div>

                            <div class="input-container">
                                <label>Повторите новый пароль</label>
                                <!-- <InputText/> -->
                                <Password :feedback="false" fluid toggleMask/>
                            </div>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col class="save-button">
                            <Button severity="primary">Сохранить</Button>
                        </v-col>
                    </v-row>
                </v-form>
                </v-container>
            </template>
        </Card>
    </MainLayout>
</template>

<script setup>
import MainLayout from '@/layouts/MainLayout.vue';
import { VContainer, VRow, VCol, VForm, VSpacer } from 'vuetify/lib/components/index.mjs';
import { Card, Divider, InputText, Password, Textarea, Button, FileUpload } from 'primevue';
import { ref } from 'vue';
import defaultImage from '@/assets/img/user_default.jpg';

const image = ref(defaultImage);
const selectedFile = ref(null);

const onFileSelect = (event) => {
  const file = event.files[0]; // Get the uploaded file
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        image.value = e.target.result; // Update the image URL with the uploaded file
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
.settings-title {
    padding-top: 0;
}
img {
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
}
.input-container {
    flex: 1; /* Allow the input column to take up space */
    display: flex;
    flex-direction: column; /* Stack label and textarea vertically */
    justify-content: space-between;
}
.input-container textarea {
    flex-grow: 1;
    resize: none;
}
.input-column {
    display: grid;
    gap: 20px;
}
.save-button {
    display: flex;
    justify-content: end;
}
/* .profile-picture-container {
  position: relative;
  display: inline-block;
  cursor: pointer;
} */
.profile-picture-container :deep(.p-button-primary) {
    width: 100%;
    margin-top: 10px;
}
</style>