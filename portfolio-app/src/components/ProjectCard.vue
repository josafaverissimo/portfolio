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
  display: flex;
  flex-direction: column;
  gap: 2rem;

  img {
    width: 100%;
    max-width: 100vw;
    object-fit: contain;
    aspect-ratio: 16/9;
  }
}
</style>