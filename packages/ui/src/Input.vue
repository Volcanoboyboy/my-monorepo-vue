<template>
  <input
    :value="modelValue"
    @input="updateValue"
    class="my-input"
    :placeholder="placeholder"
  />
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string
  placeholder?: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const updateValue = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>

<style>
.my-input {
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  width: 200px;
}
.my-input:focus {
  outline: none;
  border-color: #007bff;
}
</style>