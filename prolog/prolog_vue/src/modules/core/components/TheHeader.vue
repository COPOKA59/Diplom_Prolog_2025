<template>
    <Toolbar>
    <template #start>
      <RouterLink to="/" class="header-title">
        <h1>Пролог</h1>
      </RouterLink>
    </template>

    <template v-if="isLoggedIn" #end>
          <TheSidebar/>
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
import TheSidebar from './TheSidebar.vue';
import { Toolbar, Button } from 'primevue';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();
const isLoggedIn = ref(true);

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