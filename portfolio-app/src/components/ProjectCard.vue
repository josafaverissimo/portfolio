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
    width: 30rem;
    object-fit: contain;
    border-radius: 1rem;
  }
}
</style>