<script setup>
const props = defineProps(['backgroundColor'])
</script>

<template>
  <div class="right-triangle-separator">
    <slot />
  </div>
</template>

<style scoped>
  div.right-triangle-separator::before {
    content: "";
    display: block;
    width:100%;
    height:100px;
    background: linear-gradient(to left bottom, transparent 49%, v-bind("props.backgroundColor") 50%);
  }

  div.right-triangle-separator::after {
    content: "";
    display: block;
    width:100%;
    height:100px;
    background: linear-gradient(to right top, transparent 49%, v-bind("props.backgroundColor") 50%);
  }
</style>