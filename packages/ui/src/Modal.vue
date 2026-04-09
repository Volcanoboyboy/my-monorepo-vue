<template>
  <Teleport to="body">
    <Transition name="zen-modal-fade">
      <div v-if="visible" class="zen-modal-overlay" @click="handleOverlayClick">
        <div
          class="zen-modal"
          :style="modalStyle"
          role="dialog"
          aria-modal="true"
          :aria-labelledby="title ? titleId : undefined"
          @click.stop
        >
          <header v-if="$slots.header || title || closable" class="zen-modal__header">
            <div>
              <slot name="header">
                <h2 v-if="title" :id="titleId" class="zen-modal__title">{{ title }}</h2>
                <p v-if="description" class="zen-modal__description">{{ description }}</p>
              </slot>
            </div>
            <button
              v-if="closable"
              class="zen-modal__close"
              type="button"
              aria-label="Close modal"
              @click="handleClose"
            >
              ×
            </button>
          </header>

          <section class="zen-modal__body">
            <slot />
          </section>

          <footer v-if="showFooter || $slots.footer" class="zen-modal__footer">
            <slot name="footer">
              <button
                class="zen-modal__action zen-modal__action--ghost"
                type="button"
                @click="handleCancel"
              >
                {{ cancelText }}
              </button>
              <button
                class="zen-modal__action zen-modal__action--primary"
                type="button"
                :disabled="loading"
                @click="handleConfirm"
              >
                {{ loading ? 'Working...' : confirmText }}
              </button>
            </slot>
          </footer>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, watch } from 'vue'

const props = withDefaults(
  defineProps<{
    visible: boolean
    title?: string
    description?: string
    width?: string | number
    closable?: boolean
    closeOnOverlay?: boolean
    closeOnEsc?: boolean
    showFooter?: boolean
    confirmText?: string
    cancelText?: string
    loading?: boolean
  }>(),
  {
    title: '',
    description: '',
    width: 520,
    closable: true,
    closeOnOverlay: true,
    closeOnEsc: true,
    showFooter: true,
    confirmText: 'Confirm',
    cancelText: 'Cancel',
    loading: false,
  }
)

const emit = defineEmits<{
  'update:visible': [value: boolean]
  close: []
  confirm: []
  cancel: []
}>()

const titleId = `zen-modal-title-${Math.random().toString(36).slice(2, 10)}`

const modalStyle = computed(() => ({
  width: typeof props.width === 'number' ? `${props.width}px` : props.width,
}))

const closeModal = () => {
  emit('update:visible', false)
  emit('close')
}

const handleClose = () => {
  closeModal()
}

const handleCancel = () => {
  emit('cancel')
  closeModal()
}

const handleConfirm = () => {
  emit('confirm')
}

const handleOverlayClick = () => {
  if (props.closeOnOverlay) {
    closeModal()
  }
}

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && props.visible && props.closeOnEsc) {
    closeModal()
  }
}

watch(
  () => props.visible,
  (visible) => {
    if (typeof window === 'undefined') {
      return
    }

    if (visible) {
      window.addEventListener('keydown', handleKeydown)
      document.body.style.overflow = 'hidden'
      return
    }

    window.removeEventListener('keydown', handleKeydown)
    document.body.style.overflow = ''
  },
  { immediate: true }
)

onBeforeUnmount(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('keydown', handleKeydown)
    document.body.style.overflow = ''
  }
})
</script>
