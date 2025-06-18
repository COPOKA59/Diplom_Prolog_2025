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
                        <InputText v-model="formData.username"
                        class="login-input" required :invalid="errors.username.invalid"/>
                        <Message v-if="errors.username.invalid" severity="error" variant="simple">{{ errors.username.message }}</Message>
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
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/user.js';

const router = useRouter();
const userStore = useUserStore();

const formData = reactive({
    username: '',
    password: ''
});
const errors = reactive({
    username: { invalid: false, message: '' },
    password: { invalid: false, message: '' },
    
});

const handleSubmit = async () => {
    Object.keys(errors).forEach(key => {
        errors[key].invalid = false;
        errors[key].message = '';
    });
    if (formData.username === '') {
        errors.username.invalid = true;
        errors.username.message = 'Укажите логин.';
    }
    if (formData.password === '') {
        errors.password.invalid = true;
        errors.password.message = 'Укажите пароль.';
    }
    console.log('errors: ', errors);

    /* if (errors.length === 0) {
        console.log(`submitted:\n
            username: ${formData.username}\n
            password: ${formData.password}`);
    } */
    try {
        // Attempt to log in
        await userStore.login({
            username: formData.username,
            password: formData.password
        });
        // Optionally, redirect or show a success message
        console.log('Login successful');
        router.push({ name: 'Profile' });
    } catch (error) {
        // Handle login error
        if (error.non_field_errors) {
            errors.username.invalid = true;
            errors.username.message = error.non_field_errors[0]; // Adjust based on your API response
        } else {
            console.error('Login failed:', error);
        }
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