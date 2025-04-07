<!-- src/layouts/MainLayout.vue -->
<template>
    <!-- <v-app>
      <TheHeader />
  
      <v-main>
        <slot></slot>
      </v-main>
    </v-app> -->

    <TheHeader />
    <slot></slot>
</template>

<script setup>
import TheHeader from '@/modules/core/components/TheHeader.vue';
</script>