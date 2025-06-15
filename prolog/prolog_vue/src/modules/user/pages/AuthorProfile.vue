<template>
    <UserLayout>
        <UserProfile :user="user"/>
    </UserLayout>
</template>

<script setup>
import UserLayout from '@/layouts/UserLayout.vue';
import UserProfile from '../components/UserProfile.vue';
import { useUserStore } from '@/stores/user';
import { onBeforeMount, ref } from 'vue';

const props = defineProps({
    userId: Number
});

const userStore = useUserStore();
const user = ref();

onBeforeMount( async () => {
    user.value = await userStore.getUserById(props.userId);
});
</script>