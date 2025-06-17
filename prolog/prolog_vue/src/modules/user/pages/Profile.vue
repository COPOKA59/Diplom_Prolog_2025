<template>
    <MainLayout :layout_container="true">
        <UserProfile :user="userStore.user"/>
    </MainLayout>
</template>

<script setup>
import MainLayout from '@/layouts/MainLayout.vue';
import UserProfile from '../components/UserProfile.vue';
import { useUserStore } from '@/stores/user';

const userStore = useUserStore();
</script>