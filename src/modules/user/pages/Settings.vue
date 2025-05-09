<template>
    <MainContainerLayout>
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
                        <v-col cols="12" lg="9" md="9" sm="12" class="input-container">
                            <label>Описание</label>
                            <Textarea rows="3" autoResize/>
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
                                <InputText/>
                            </div>
                        </v-col>

                        <v-spacer/>

                        <v-col class="input-column" cols="12" lg="5" md="5">
                            <div class="input-container">
                                <label>Старый пароль</label>
                                <InputText/>
                            </div>

                            <div class="input-container">
                                <label>Новый пароль</label>
                                <InputText/>
                            </div>

                            <div class="input-container">
                                <label>Повторите новый пароль</label>
                                <InputText/>
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
    </MainContainerLayout>
</template>

<script setup>
import MainContainerLayout from '@/layouts/MainContainerLayout.vue';
import { VContainer, VRow, VCol, VForm, VSpacer } from 'vuetify/lib/components/index.mjs';
import { Card, Divider, InputText, Textarea, Button, FileUpload } from 'primevue';
import { ref } from 'vue';
import defaultImage from '@/assets/img/user_default.jpg'; // Import the default image

const imageUrl = ref(defaultImage); // Set the default image

const onFileUpload = (event) => {
  const file = event.files[0]; // Get the uploaded file
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        imageUrl.value = e.target.result; // Update the image URL with the uploaded file
        console.log(imageUrl.value);
    };
    reader.readAsDataURL(file); // Read the file as a data URL
  }
  
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