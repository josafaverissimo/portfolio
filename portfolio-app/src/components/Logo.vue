<script setup>
const props = defineProps(['width', 'height'])
</script>

<template>
  <img src="/logo.png" :style="{height: props.height, width: props.width, objectFit: 'contain'}" alt="Logo do Site"/>
</template>