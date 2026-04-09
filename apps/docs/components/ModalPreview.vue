<script setup lang="ts">
import { ref } from 'vue'
import { Button, Modal } from '@zen-repo/ui'

const open = ref(false)
</script>

<template>
  <div style="display: grid; gap: 16px; max-width: 480px">
    <Button @click="open = true">Open modal</Button>
    <Modal
      v-model:visible="open"
      title="Ship the next AI flow"
      description="Review the summary before you publish this version."
      confirm-text="Publish"
      cancel-text="Not yet"
    >
      <p style="margin: 0; color: rgba(236, 242, 255, 0.78); line-height: 1.7">
        This modal supports overlay close, ESC close, and custom footer content.
      </p>
    </Modal>
  </div>
</template>
