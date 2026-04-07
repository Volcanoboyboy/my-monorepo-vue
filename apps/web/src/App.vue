<template>
  <div>
    <h1>Monorepo Vue Demo</h1>
    <Button @click="handleClick">Click Me from UI Lib</Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@my-repo/ui'

const handleClick = () => {
  alert('Hello from shared Vue component!')
}
</script>