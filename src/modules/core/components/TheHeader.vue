<template>
    <Toolbar>
    <template #start>
      <RouterLink to="/" class="header-title">
        <h1>Пролог</h1>
      </RouterLink>
    </template>

    <template #end>
      <!-- <Button label="Войти" severity="primary" variant="outlined" 
              @click="$router.push({ name: 'LoginPage' })"/>
      <Button class="sign-up-button" label="Зарегистрироваться" severity="primary"
              @click="$router.push({ name: 'LoginPage' })"/> -->
      <Button label="Войти" severity="primary" variant="outlined" 
              @click="goToLogin(false)"/>
      <Button class="sign-up-button" label="Зарегистрироваться" severity="primary"
              @click="goToLogin(true)"/>
    </template>
  </Toolbar>
</template>

<script setup>
import Toolbar from 'primevue/toolbar';
import Button from 'primevue/button';
import { useRouter } from 'vue-router'; // Import useRouter

const router = useRouter();

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

.sign-up-button {
  @media (max-width: 600px) {
    display: none;
  }
}
</style>