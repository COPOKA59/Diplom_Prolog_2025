<template>
    <v-container>
        <div class="name-container">
            <RouterLink to="/" class="app-name">
                <span >Пролог</span>
            </RouterLink>
        </div>
        <v-row>
            <v-col cols="auto" lg="6" md="6" sm="12" style="margin: 30px auto;">
                <LoginForm/>
            </v-col>
        </v-row>
        
    </v-container>
</template>

<script setup>
import { VContainer, VRow, VCol, VApp, VMain } from 'vuetify/lib/components/index.mjs';
import LoginForm from '../components/LoginForm.vue';
import { onBeforeMount, onBeforeUnmount } from "vue";

onBeforeMount(() => {
  document.body.style.paddingTop = 0;
});
onBeforeUnmount(() => {
  document.body.style.paddingTop = "var(--header-height)";
});
</script>

<style scoped>
.name-container {
    display: flex;
    padding-bottom: 40px;
}
.app-name {
    margin: auto;

    font-family: var(--default-font);
    font-weight: 500;
    font-size: 50px;
    text-align: center;
    color: var(--main-light-color);

    text-decoration: underline;
    text-underline-offset: 20px;
    text-decoration-thickness: 5px;

    display: block;
}

.app-name:hover {
    text-shadow: 0 0 13px var(--main-dark-color);
    transition: 0.3s;
}
</style>