<template>
  <MainLayout :layout_container="true">
    <template v-slot:navbar>
        <TheNavBar :routes="routes" :requiresId="false"/>
    </template>
    <slot></slot>
  </MainLayout>
</template>

<script setup>
import MainLayout from './MainLayout.vue';
import TheNavBar from '@/modules/core/components/TheNavBar.vue';

const routes = [
    { path: 'profile', title: 'Профиль', name: 'Author Profile', extended: false },
    { path: 'user/series', title: 'Сборники', name: 'Author Series', extended: false },
    { path: 'works', title: 'Произведения', name: 'Author Works', extended: false }
];
</script>