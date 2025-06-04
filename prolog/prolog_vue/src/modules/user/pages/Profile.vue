<template>
    <MainLayout :layout_container="true">
        <UserProfile />
    </MainLayout>
</template>

<script setup>
import MainLayout from '@/layouts/MainLayout.vue';
import UserProfile from '../components/UserProfile.vue';
</script>