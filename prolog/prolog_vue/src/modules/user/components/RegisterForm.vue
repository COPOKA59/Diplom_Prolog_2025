<template>
    <Card class="login-card">
        <template #title>
            <div class="login-title">
                <span>Добро пожаловать</span>
            </div>
        </template>

        <template #content>
            <v-container>
                <v-form @submit.prevent="handleSubmit">
                <v-row>
                    <v-col cols="12">
                        <label>Имя</label>
                        <InputText class="login-input" required v-model="formData.name"/>
                        <Message v-if="errors.name.invalid" severity="error" variant="simple">{{ errors.name.message }}</Message>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="12">
                        <label>E-mail</label>
                        <InputText class="login-input" required v-model="formData.email"/>
                        <Message v-if="errors.email.invalid" severity="error" variant="simple">{{ errors.email.message }}</Message>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="12">
                        <label>Пароль</label>
                        <Password class="login-input" required :feedback="false" fluid toggleMask
                        v-model="formData.password"/>
                        <Message v-if="errors.password.invalid" severity="error" variant="simple">
                            {{ errors.password.message }}
                        </Message>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="12">
                        <label>Повторите пароль</label>
                        <Password class="login-input" required :feedback="false" fluid toggleMask
                        v-model="formData.passwordRepeat"/>
                        <Message v-if="errors.passwordRepeat.invalid" severity="error" variant="simple">
                            {{ errors.passwordRepeat.message }}
                        </Message>
                    </v-col>
                </v-row>


                <v-row style="margin-top: 20px;">
                    <Button severity="primary" style="margin:auto;" type="submit">
                        Зарегистрироваться
                    </Button>
                </v-row>
                <v-row>
                    <Button variant="link" class="login-button" style="margin:auto;"
                    @click="$emit('switch-form')">
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
import { Card, InputText, Password, Message, Button } from 'primevue';
import { ref, reactive } from 'vue';

const formData = reactive({
    name: '',
    email: '',
    password: '',
    passwordRepeat: '',
});
const errors = reactive({
    name: { invalid: false, message: '' },
    email: { invalid: false, message: '' },
    password: { invalid: false, message: '' },
    passwordRepeat: { invalid: false, message: '' },
});
const handleSubmit = () => {
    Object.keys(errors).forEach(key => {
        errors[key].invalid = false;
        errors[key].message = '';
    });
    if (formData.name === '') {
        errors.name.invalid = true;
        errors.name.message = 'Укажите имя.';
    }
    if (formData.email === '') {
        errors.email.invalid = true;
        errors.email.message = 'Укажите логин.';
    }
    if (formData.password === '') {
        errors.password.invalid = true;
        errors.password.message = 'Укажите пароль.';
    }
    if (formData.passwordRepeat === '') {
        errors.passwordRepeat.invalid = true;
        errors.passwordRepeat.message = 'Повторите пароль.';
    }
    else if (formData.passwordRepeat !== formData.password) {
        errors.passwordRepeat.invalid = true;
        errors.passwordRepeat.message = 'Пароли не совпадают.';
    }
    console.log('errors: ', errors);

    if (errors.length === 0) {
        console.log(`submitted:\n
            email: ${formData.email}\n
            password: ${formData.password}`);
    }
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