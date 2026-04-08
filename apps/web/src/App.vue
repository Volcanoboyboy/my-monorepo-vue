<template>
  <div>
    <h1>Monorepo Demo</h1>
    <p>Today is {{ todayFormatted }}</p>
    <Button @click="showModal = true">Open Modal</Button>
    <Modal v-model:visible="showModal" title="Welcome">
      <p>This is a modal content. Cloned object: {{ clonedObj }}</p>
    </Modal>
    <Input v-model="inputValue" placeholder="Type something" />
    <p>You typed: {{ inputValue }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Button, Input, Modal } from '@zen-repo/ui'
import { formatDate, deepClone } from '@zen-repo/utils'

const showModal = ref(false)
const inputValue = ref('')

const todayFormatted = computed(() => formatDate(new Date()))

const original = { a: 1, b: { c: 2 } }
const clonedObj = deepClone(original)
</script>