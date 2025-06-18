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
    { title: 'Шапка', name: 'Editing Header' },
    { title: 'Структура', name: 'Editing Structure' },
    { title: 'Характеристики', name: 'Editing Characteristics' },
    { title: 'Миры', name: 'Editing World' },
    { title: 'Персонажи', name: 'Editing Characters' },
    { title: 'Содержание', name: 'Editing Contents' }
];
</script>