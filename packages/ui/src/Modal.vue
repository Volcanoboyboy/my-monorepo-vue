<template>
  <Teleport to="body">
    <div v-if="visible" class="my-modal-overlay" @click="handleOverlayClick">
      <div class="my-modal" @click.stop>
        <div class="my-modal-header">
          <slot name="header">{{ title }}</slot>
          <button class="my-modal-close" @click="handleClose">×</button>
        </div>
        <div class="my-modal-body">
          <slot />
        </div>
        <div class="my-modal-footer">
          <slot name="footer">
            <button class="my-modal-btn" @click="handleClose">关闭</button>
          </slot>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
defineProps<{
  visible: boolean
  title?: string
}>()

const emit = defineEmits<{
  'update:visible': [value: boolean]
  close: []
}>()

const handleClose = () => {
  emit('update:visible', false)
  emit('close')
}

const handleOverlayClick = () => {
  handleClose()
}
</script>

<style>
.my-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.my-modal {
  background: white;
  border-radius: 8px;
  width: 500px;
  max-width: 90%;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
}
.my-modal-header {
  padding: 16px 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
}
.my-modal-close {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
}
.my-modal-body {
  padding: 20px;
}
.my-modal-footer {
  padding: 12px 20px;
  border-top: 1px solid #eee;
  text-align: right;
}
.my-modal-btn {
  padding: 6px 12px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style> 