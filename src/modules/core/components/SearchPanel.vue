<template>
    <Toolbar class="search-panel">
        <template #center>
            <IconField>
                <InputIcon class="pi pi-search" style="color: var(--main-light-color);"/>
                <InputText placeholder="Поиск..."/>
            </IconField>
            <RouterLink class="advanced-search-link" to="/search">
                Расширенный поиск
            </RouterLink>
        </template>
    </Toolbar>
</template>

<script setup>
import { Toolbar, IconField, InputIcon, InputText, Button } from 'primevue';
import { VToolbar } from 'vuetify/lib/components/index.mjs';
import 'primeicons/primeicons.css'
</script>

<style scoped>
.search-panel {
    background: linear-gradient(180deg, #414b5b 71.63%, #222 100%);
    border-radius: 0;
    border: none;

    padding-top: 35px;
    padding-bottom: 65px;
}
.p-inputtext {
    border-radius: 35px;
    border: none;
    @media (min-width: 600px) {
        width: 400px;
    }
}
.p-inputtext::placeholder {
    color: gray;
}


.search-panel :deep(.p-toolbar-center) {
    display: grid;
}
.search-panel :deep(.p-toolbar-center) .advanced-search-link {
    text-align: right;
    margin-right: 10px;
    margin-top: 10px;
    color: var(--main-light-color);
    text-decoration: none;
}
.search-panel :deep(.p-toolbar-center) .advanced-search-link:hover {
    text-decoration: underline;
}
</style>