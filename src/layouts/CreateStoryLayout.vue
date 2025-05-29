<template>
  <MainLayout :layout_container="true">
    <template v-slot:navbar>
        <TheNavBar :routes="routes"/>
    </template>
    <slot></slot>
  </MainLayout>
</template>

<script setup>
import MainLayout from './MainLayout.vue';
import TheNavBar from '@/modules/core/components/TheNavBar.vue';

const routes = [
    { path: '/editing/header', name: 'Шапка', extended: false },
    { path: '/editing/structure', name: 'Структура', extended: false },
    { path: '/editing/characteristics', name: 'Характеристики', extended: false },
    { path: '/editing/world', name: 'Миры', extended: false },
    { path: '/editing/characters', name: 'Персонажи', extended: false },
    { path: '/editing/contents', name: 'Содержание', extended: true }
];
</script>