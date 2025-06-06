<template>
    <Card class="login-card">
        <template #title>
            <div class="login-title">
                <span>С возвращением</span>
            </div>
        </template>

        <template #content>
            <v-container>
                <v-form @submit.prevent="handleSubmit">

                <v-row>
                    <v-col>
                        <label>Логин</label>
                        <InputText v-model="formData.email" type="email"
                        class="login-input" required :invalid="errors.email.invalid"/>
                        <Message v-if="errors.email.invalid" severity="error" variant="simple">{{ errors.email.message }}</Message>
                    </v-col>                    
                </v-row>

                <v-row>
                    <v-col>
                        <label>Пароль</label>
                        <Password v-model="formData.password"
                        class="login-input" required 
                        :feedback="false" fluid toggleMask
                        :invalid="errors.password.invalid"
                        />
                        <Message v-if="errors.password.invalid" severity="error" variant="simple">{{ errors.password.message }}</Message>
                    </v-col>
                </v-row>

                <!-- <v-row v-if="errors.length > 0" >
                    <v-col>
                        <Message v-for="error in errors" severity="error" variant="simple">{{ error }}</Message>
                    </v-col>
                </v-row> -->


                <v-row style="margin-top: 20px;">
                    <Button severity="primary" style="margin: auto;" type="submit">
                        Войти
                    </Button>
                </v-row>
                <v-row>
                    <Button variant="link" class="login-button" style="margin: auto;"
                    @click="$emit('switch-form')">
                        Зарегистрироваться
                    </Button>
                </v-row>

                </v-form>
            </v-container>
        </template>
    </Card>
</template>

<script setup>
import { VContainer, VRow, VCol, VForm } from 'vuetify/lib/components/index.mjs';
import { Card, InputText, Button, Password, Message } from 'primevue';
import { ref, reactive } from 'vue';

const formData = reactive({
    email: '',
    password: ''
});
const errors = reactive({
    email: { invalid: false, message: '' },
    password: { invalid: false, message: '' },
    
});

const handleSubmit = () => {
    Object.keys(errors).forEach(key => {
        errors[key].invalid = false;
        errors[key].message = '';
    });
    if (formData.email === '') {
        errors.email.invalid = true;
        errors.email.message = 'Укажите логин.';
    }
    if (formData.password === '') {
        errors.password.invalid = true;
        errors.password.message = 'Укажите пароль.';
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