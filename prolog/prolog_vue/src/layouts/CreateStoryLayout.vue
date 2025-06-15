<template>
  <MainLayout :layout_container="true">
    <template v-slot:navbar>
        <TheNavBar :routes="routes" :requiresParams="true" :paramName="'workId'"/>
    </template>
    <slot></slot>
  </MainLayout>
</template>

<script setup>
import MainLayout from './MainLayout.vue';
import TheNavBar from '@/modules/core/components/TheNavBar.vue';

const routes = [
    { path: '/editing/:workId/header', title: 'Шапка', name: 'Editing Header', extended: false },
    { path: '/editing/:workId/structure', title: 'Структура', name: 'Editing Structure', extended: false },
    { path: '/editing/:workId/characteristics', title: 'Характеристики', name: 'Editing Characteristics', extended: false },
    { path: '/editing/:workId/world', title: 'Миры', name: 'Editing World', extended: false },
    { path: '/editing/:workId/characters', title: 'Персонажи', name: 'Editing Characters', extended: false },
    { path: '/editing/:workId/contents', title: 'Содержание', name: 'Editing Contents', extended: true }
];
</script>