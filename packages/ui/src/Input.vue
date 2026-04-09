<template>
  <label
    class="zen-input"
    :class="[`zen-input--${size}`, { 'is-disabled': disabled, 'is-invalid': !!error }]"
  >
    <span v-if="label" class="zen-input__label">{{ label }}</span>
    <span class="zen-input__control">
      <span v-if="$slots.prefix" class="zen-input__icon zen-input__icon--prefix">
        <slot name="prefix" />
      </span>
      <input
        class="zen-input__field"
        :value="modelValue"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :aria-invalid="!!error"
        @input="handleInput"
        @focus="emit('focus', $event)"
        @blur="emit('blur', $event)"
      />
      <button
        v-if="clearable && modelValue && !disabled"
        class="zen-input__clear"
        type="button"
        aria-label="Clear input"
        @click="handleClear"
      >
        ×
      </button>
      <span v-else-if="$slots.suffix" class="zen-input__icon zen-input__icon--suffix">
        <slot name="suffix" />
      </span>
    </span>
    <span v-if="error || helper" class="zen-input__message">
      {{ error || helper }}
    </span>
  </label>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    modelValue?: string
    label?: string
    placeholder?: string
    helper?: string
    error?: string
    type?: string
    size?: 'sm' | 'md' | 'lg'
    disabled?: boolean
    clearable?: boolean
  }>(),
  {
    modelValue: '',
    label: '',
    placeholder: '',
    helper: '',
    error: '',
    type: 'text',
    size: 'md',
    disabled: false,
    clearable: false,
  }
)

const emit = defineEmits<{
  'update:modelValue': [value: string]
  clear: []
  focus: [event: FocusEvent]
  blur: [event: FocusEvent]
}>()

const handleInput = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}

const handleClear = () => {
  emit('update:modelValue', '')
  emit('clear')
}
</script>
