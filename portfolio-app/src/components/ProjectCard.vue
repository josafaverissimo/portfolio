<script setup>
const props = defineProps(['src'])
</script>

<template>
  <div class="card">
    <img :src="props.src" alt="Image do projeto"/>
    <div class="footer">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.card {
  img {
    width: 100%;
    max-width: 100vw;
    object-fit: contain;
    border-radius: 1rem;
  }
}
</style>