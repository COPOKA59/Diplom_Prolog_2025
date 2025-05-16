<template>
  <MainLayout :layout_container="true">
    <template v-slot:navbar>
        <CreateStoryNavBar/>
    </template>
    <slot></slot>
  </MainLayout>
</template>

<script setup>
import MainLayout from './MainLayout.vue';
import CreateStoryNavBar from '@/modules/works/components/CreateStoryNavBar.vue';
</script>