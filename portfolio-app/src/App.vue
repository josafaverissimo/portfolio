<script setup>
import Header from '@/components/Header.vue'

</script>

<template>
  <div class="root-wrapper">
    <Header />

    <router-view />
  </div>
</template>

<style scoped>
  .root-wrapper {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
</style>