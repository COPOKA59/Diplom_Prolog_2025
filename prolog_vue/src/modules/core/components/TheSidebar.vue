<template>
    <Drawer v-model:visible="sidebarVisibility" position="right">
        <template #header>
            <div class="sidebar-header">
            <Avatar image="\src\assets\img\user_default.jpg" shape="circle" />
            <span>{{userStore.user.username}}</span>
            </div>
        </template>

        <Divider />

        <div class="sidebar">
            <ul>
                <li v-for="route in routes" :key="route.name">
                    <RouterLink :to="{ name: route.name }">
                    <span>{{ route.title }}</span>
                    </RouterLink>
                </li>

                <li>
                    <RouterLink to="/" @click="userStore.logout()">
                    <div style="display: flex; gap: 10px; align-items: center;">
                        <span>Выход</span>
                        <i class="pi pi-sign-out"/>
                    </div>
                    </RouterLink>
                </li>
            </ul>
        </div>

        </Drawer>
        <Button severity="primary" @click="sidebarVisibility = true">
            <span>{{userStore.user.username}}</span>
            <i class="pi pi-user"></i>
        </Button>
</template>

<script setup>
import { Button, Drawer, Avatar, Divider } from 'primevue';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useUserStore } from '@/stores/user.js';

const userStore = useUserStore();
const sidebarVisibility = ref(false);

const route = useRoute();
watch(
    () => route.fullPath,
    () => {
        sidebarVisibility.value = false;
    }
);

const routes = [
    { name: 'Profile', title: 'Мой профиль' },
    // { name: 'Collection List Page', title: 'Сборники' },
    { name: 'Series List Page', title: 'Сборники' },
    { name: 'Stories', title: 'Произведения' },
    { name: 'World List Page', title: 'Миры' },
    { name: 'Character List Page', title: 'Персонажи' },
    { name: 'Settings', title: 'Настройки' },
];
</script>

<style scoped>
.sidebar-header {
  display: flex;
  align-items: center;
  gap: 10px;
}
.sidebar {
  padding: 10px 0;
}
.sidebar a:hover {
  background-color: var(--p-secondary-600);
}
@media (max-width: 400px) {
    .p-button span {
        display: none;
    }
}
</style>