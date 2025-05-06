<template>
    <Card class="login-card">
        <template #title>
            <div class="login-title">
                <span>Добро пожаловать</span>
            </div>
        </template>

        <template #content>
            <v-container>
                <v-form>
                <v-row>
                    <v-col>
                        <label>Имя</label>
                        <InputText class="login-input"/>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col>
                        <label>E-mail</label>
                        <InputText class="login-input"/>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col>
                        <label>Пароль</label>
                        <InputText class="login-input"/>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col>
                        <label>Повторите пароль</label>
                        <InputText class="login-input"/>
                    </v-col>
                </v-row>


                <v-row style="margin-top: 20px;">
                    <Button severity="primary" style="margin:auto;">Зарегистрироваться</Button>
                </v-row>
                <v-row>
                    <Button variant="link" class="login-button" style="margin:auto;"
                    @click="switchToLogin">
                        Войти
                    </Button>
                </v-row>

                </v-form>
            </v-container>
        </template>
    </Card>
</template>

<script setup>
import { VContainer, VRow, VCol, VForm } from 'vuetify/lib/components/index.mjs';
import { Card, InputText, Button } from 'primevue';
import { defineEmits } from 'vue';

const emit = defineEmits();
const switchToLogin = () => {
  emit('switch-form');
};
</script>

<style scoped>
.login-card {
    /* margin: auto; */
    background-color: var(--main-light-color);

    width: 100%;
}
.login-card .login-title {
    text-align: center;
    font-weight: 550;
    font-size: 26px;
    color: var(--main-dark-color);
    margin-bottom: 20px;
}
.login-card label {
    color: gray;
}
.login-button {
    text-decoration: underline;
}
.login-card input {
    width: 100%;
}
</style>