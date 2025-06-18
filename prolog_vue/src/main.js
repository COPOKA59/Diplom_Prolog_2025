import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js';
// import axios from "axios";
import { createPinia } from 'pinia';

import PrimeVue from 'primevue/config';
import { createVuetify } from 'vuetify';
import { MyPreset } from './themes/theme.js';

const vuetify = createVuetify({
    theme: { 
        disable: true 
    }
});

// axios.defaults.baseURL = 'http://localhost:8000/api/v1'; //http://127.0.0.1:8000
// axios.defaults.baseURL = 'http://localhost:3000';

const app = createApp(App);
app.use(PrimeVue, {
    theme: {
        preset: MyPreset
    },
    options: {
        darkModeSelector: '.app-dark'
    }
}
);
app.use(vuetify);
app.use(createPinia());
// app.use(router, axios);
app.use(router);
app.mount('#app');