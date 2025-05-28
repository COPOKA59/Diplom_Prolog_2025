<template>
    <MainLayout :layout_container="true">
        <v-container style="max-width: 90vw;">
            <WorldbuildingForm :formType="$route.meta.formType"/>
        </v-container>
    </MainLayout>
</template>

<script setup>
import MainLayout from '@/layouts/MainLayout.vue';
import { VContainer, VRow, VCol, VForm } from 'vuetify/lib/components/index.mjs';
import WorldbuildingForm from '../components/WorldbuildingForm.vue';
import ChapterCardEdit from '../components/ChapterCardEdit.vue';
import ItemCardEdit from '../components/ItemCardEdit.vue';
</script>

<style scoped>
</style>