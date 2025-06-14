<template>
  <MainLayout :layout_container="true">
    <template v-slot:navbar>
        <TheNavBar :routes="routes" :requiresId="true"/>
    </template>
    <slot></slot>
  </MainLayout>
</template>

<script setup>
import MainLayout from './MainLayout.vue';
import TheNavBar from '@/modules/core/components/TheNavBar.vue';

const routes = [
    { path: '/editing/:id/header', title: 'Шапка', name: 'Editing Header', extended: false },
    { path: '/editing/:id/structure', title: 'Структура', name: 'Editing Structure', extended: false },
    { path: '/editing/:id/characteristics', title: 'Характеристики', name: 'Editing Characteristics', extended: false },
    { path: '/editing/:id/world', title: 'Миры', name: 'Editing World', extended: false },
    { path: '/editing/:id/characters', title: 'Персонажи', name: 'Editing Characters', extended: false },
    { path: '/editing/:id/contents', title: 'Содержание', name: 'Editing Contents', extended: true }
];
</script>