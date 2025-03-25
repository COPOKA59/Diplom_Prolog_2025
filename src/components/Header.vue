<template>
    <Toolbar>
    <template #start>
      <RouterLink to="/" class="header-title">
        <h1>Name</h1>
      </RouterLink>
    </template>

    <template #end>
      <Button label="Login" severity="primary" variant="outlined"/>
      <!-- <Button label="Sign up" severity="secondary" /> -->
      <Button label="Sign up" severity="primary" />
    </template>
  </Toolbar>
</template>

<script setup>
import Toolbar from 'primevue/toolbar';
import Button from 'primevue/button';

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
</style>