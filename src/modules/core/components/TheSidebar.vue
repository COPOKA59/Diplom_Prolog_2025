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
                    <RouterLink to="/">
                    <span>Сборники</span>
                    </RouterLink>
                </li>

                <li>
                    <RouterLink to="/works">
                    <span>Произведения</span>
                    </RouterLink>
                </li>

                <li>
                    <RouterLink to="/">
                    <span>Миры</span>
                    </RouterLink>
                </li>

                <li>
                    <RouterLink to="/">
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
        <Button icon="pi pi-user" iconPos="right" label="user_name" severity="primary" @click="sidebarVisibility = true" />
</template>

<script setup>
import { Button, Drawer, Avatar, Divider } from 'primevue';
import { ref } from 'vue';

const sidebarVisibility = ref(false);
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
</style>