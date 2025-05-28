<template>
    <Drawer v-model:visible="sidebarVisibility" position="right">
        <template #header>
            <div class="sidebar-header">
            <Avatar image="\src\assets\img\user_default.jpg" shape="circle" />
            <span>user_name</span>
            </div>
        </template>

        <Divider />

        <div class="sidebar">
            <ul>
                <li>
                    <RouterLink to="/profile">
                    <span>Мой профиль</span>
                    </RouterLink>
                </li>

                <li>
                    <RouterLink to="/collections">
                    <span>Сборники</span>
                    </RouterLink>
                </li>

                <li>
                    <RouterLink to="/works">
                    <span>Произведения</span>
                    </RouterLink>
                </li>

                <li>
                    <RouterLink to="/worlds">
                    <span>Миры</span>
                    </RouterLink>
                </li>

                <li>
                    <RouterLink to="/characters">
                    <span>Персонажи</span>
                    </RouterLink>
                </li>

                <li>
                    <RouterLink to="/settings">
                    <span>Настройки</span>
                    </RouterLink>
                </li>

                <li>
                    <RouterLink to="/">
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
            <span>user_name</span>
            <i class="pi pi-user"></i>
        </Button>
</template>

<script setup>
import { Button, Drawer, Avatar, Divider } from 'primevue';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const sidebarVisibility = ref(false);

const route = useRoute();
watch(
    () => route.fullPath,
    () => {
        sidebarVisibility.value = false;
    }
);
// @click="sidebarVisibility = false"
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

@media (max-width: 400px) {
    .p-button span {
        display: none;
    }
}
</style>