<template>
    <Toolbar>
    <template #start>
      <RouterLink to="/" class="header-title">
        <h1>Пролог</h1>
      </RouterLink>
    </template>

    <template v-if="isLoggedIn" #end>
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
                  <RouterLink to="/">
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
          <Button icon="pi pi-user" label="user_name" severity="primary" @click="sidebarVisibility = true" />
    </template>
    <template v-else #end>
      <Button label="Войти" severity="primary" variant="outlined" 
              @click="goToLogin(false)"/>
      <Button class="sign-up-button" label="Зарегистрироваться" severity="primary"
              @click="goToLogin(true)"/>
    </template>
  </Toolbar>
</template>

<script setup>
import { Toolbar, Button, Drawer, Avatar, Divider } from 'primevue';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();
const isLoggedIn = true;
const sidebarVisibility = ref(false);

const goToLogin = (isNewUser) => {
  localStorage.setItem('isNewUser', isNewUser);
  router.push({ name: 'LoginPage' });
};
</script>

<style scoped>
.p-toolbar {
    background-color: var(--main-dark-color);
    color: var(--main-light-color);
    height: var(--header-height);
    width: 100%;
    border-radius: 0;

    border: none;
    border-bottom: 1px solid #3f444a;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
}
.p-toolbar :deep(.p-toolbar-end) {
    gap: 10px;
}

.header-title {
  text-decoration: none;
  color: var(--main-light-color);
}
.header-title h1 {
  margin: 0;
}
.header-title h1:hover {
  text-decoration: underline;
}

.sidebar-header {
  display: flex;
  align-items: center;
  gap: 10px;
}
.sidebar {
  padding: 10px 0;
}

.sign-up-button {
  @media (max-width: 600px) {
    display: none;
  }
}
</style>