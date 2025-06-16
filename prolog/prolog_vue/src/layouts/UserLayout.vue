<template>
  <MainLayout :layout_container="true">
    <template v-slot:navbar>
        <TheNavBar :routes="routes" :requiresParams="false"/>
    </template>
    <slot></slot>
  </MainLayout>
</template>

<script setup>
import MainLayout from './MainLayout.vue';
import TheNavBar from '@/modules/core/components/TheNavBar.vue';

const routes = [
    { title: 'Профиль', name: 'Author Profile' },
    { title: 'Сборники', name: 'Author Series' },
    { title: 'Произведения', name: 'Author Works' }
];
</script>