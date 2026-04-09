<template>
  <button
    class="zen-button"
    :class="[
      `zen-button--${variant}`,
      `zen-button--${size}`,
      {
        'is-block': block,
        'is-loading': loading,
      },
    ]"
    :type="nativeType"
    :disabled="isDisabled"
    @click="handleClick"
  >
    <span v-if="$slots.prefix || loading" class="zen-button__prefix" aria-hidden="true">
      <span v-if="loading" class="zen-button__spinner"></span>
      <slot v-else name="prefix" />
    </span>
    <span class="zen-button__content">
      <slot />
    </span>
    <span v-if="$slots.suffix && !loading" class="zen-button__suffix" aria-hidden="true">
      <slot name="suffix" />
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
    size?: 'sm' | 'md' | 'lg'
    nativeType?: 'button' | 'submit' | 'reset'
    disabled?: boolean
    loading?: boolean
    block?: boolean
  }>(),
  {
    variant: 'primary',
    size: 'md',
    nativeType: 'button',
    disabled: false,
    loading: false,
    block: false,
  }
)

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const isDisabled = computed(() => props.disabled || props.loading)

const handleClick = (event: MouseEvent) => {
  if (isDisabled.value) {
    event.preventDefault()
    event.stopPropagation()
    return
  }

  emit('click', event)
}
</script>
