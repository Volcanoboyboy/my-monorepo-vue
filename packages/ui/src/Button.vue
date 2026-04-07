<template>
  <button class="my-button" @click="emit('click')">
    <slot />
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  click: []
}>()
</script>
