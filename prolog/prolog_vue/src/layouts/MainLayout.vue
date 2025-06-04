<template>
    <header>
      <TheHeader />
    </header>
    <div class="layout-container">
    <slot name="navbar"></slot>
    
    <main>
      <v-container v-if="layout_container" class="main-container">
        <slot></slot>
      </v-container>
      <slot v-else></slot>
    </main>
    </div>
</template>

<script setup>
import TheHeader from '@/modules/core/components/TheHeader.vue';
import { VContainer } from 'vuetify/lib/components/index.mjs';

const props = defineProps({
  layout_container: {
    default: false,
    type: Boolean
  }
});
</script>

<style scoped>
.main-container {
  margin: 40px auto;
}

@media (min-width: 600px) {
  .layout-container {
    display: flex;
  }
  main {
      flex: 1;
  }
}

</style>