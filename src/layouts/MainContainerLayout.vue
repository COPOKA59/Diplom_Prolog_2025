<template>
    <TheHeader />
    <v-container class="main-container">
      <slot></slot>
    </v-container>
</template>

<script setup>
import TheHeader from '@/modules/core/components/TheHeader.vue';
import { VContainer } from 'vuetify/lib/components/index.mjs';
</script>

<style scoped>
.main-container {
  margin: 40px auto;
}
</style>