# Modal

用于确认动作、展示详情和承载自定义内容的对话框组件。

## Preview

<ClientOnly>
  <ModalPreview />
</ClientOnly>

## Example

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Modal, Button } from '@zen-repo/ui'

const open = ref(false)
</script>

<template>
  <Button @click="open = true">Open modal</Button>
  <Modal
    v-model:visible="open"
    title="Delete workspace"
    description="This action cannot be undone."
    confirm-text="Delete"
    cancel-text="Keep it"
    @confirm="handleDelete"
  >
    <p>Review this action before continuing.</p>
  </Modal>
</template>
```

## Props

| Name             | Type               | Default     | Description                               |
| ---------------- | ------------------ | ----------- | ----------------------------------------- |
| `visible`        | `boolean`          | -           | Controls visibility                       |
| `title`          | `string`           | `''`        | Modal title                               |
| `description`    | `string`           | `''`        | Supporting text below title               |
| `width`          | `string \| number` | `520`       | Modal width                               |
| `closable`       | `boolean`          | `true`      | Shows close button                        |
| `closeOnOverlay` | `boolean`          | `true`      | Close on overlay click                    |
| `closeOnEsc`     | `boolean`          | `true`      | Close on Escape key                       |
| `showFooter`     | `boolean`          | `true`      | Shows default footer                      |
| `confirmText`    | `string`           | `'Confirm'` | Confirm button text                       |
| `cancelText`     | `string`           | `'Cancel'`  | Cancel button text                        |
| `loading`        | `boolean`          | `false`     | Disables confirm action and updates label |

## Slots

| Name      | Description                            |
| --------- | -------------------------------------- |
| `default` | Modal body content                     |
| `header`  | Replaces title and description section |
| `footer`  | Replaces default actions               |

## Events

| Name             | Payload   | Description                                     |
| ---------------- | --------- | ----------------------------------------------- |
| `update:visible` | `boolean` | Fired when component requests open state change |
| `close`          | `void`    | Fired whenever the modal closes                 |
| `confirm`        | `void`    | Fired on primary action                         |
| `cancel`         | `void`    | Fired on cancel action                          |
