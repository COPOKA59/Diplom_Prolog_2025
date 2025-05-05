import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';

import PrimeVue from 'primevue/config';
// import Aura from "@primeuix/themes/aura";
// import 'vuetify/styles';
import { createVuetify } from 'vuetify';

// import { MyPreset } from './themes/theme';
import { MyPreset2 } from './themes/theme2';

const vuetify = createVuetify({
    theme: { 
        disable: true 
    }
});

const app = createApp(App);
app.use(PrimeVue, {
    theme: {
        preset: MyPreset2//Aurora,
    },
    options: {
        darkModeSelector: '.app-dark'
    }
}
);
app.use(vuetify);
app.use(router);
app.mount('#app');