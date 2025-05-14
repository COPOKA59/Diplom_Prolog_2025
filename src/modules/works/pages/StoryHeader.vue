<template>
    <MainLayout>
        <template v-slot:navbar>
            <CreateStoryNavBar/>
        </template>
    </MainLayout>
</template>

<script setup>
import MainLayout from '@/layouts/MainLayout.vue';
import CreateStoryNavBar from '../components/CreateStoryNavBar.vue';
</script>

<style scoped>
</style>