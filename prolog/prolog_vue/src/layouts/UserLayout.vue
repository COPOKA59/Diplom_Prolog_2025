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
    { path: 'profile', name: 'Профиль', extended: false },
    { path: 'series', name: 'Сборники', extended: false },
    { path: 'works', name: 'Произведения', extended: false }
];
</script>