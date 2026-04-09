# Button

用于主要动作、次要动作和危险操作的基础按钮组件。

## Preview

<div style="display:flex;gap:12px;flex-wrap:wrap;align-items:center;">
  <Button>Primary</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="ghost">Ghost</Button>
  <Button variant="danger">Danger</Button>
  <Button loading>Loading</Button>
</div>

## Sizes

<div style="display:flex;gap:12px;flex-wrap:wrap;align-items:center;">
  <Button size="sm">Small</Button>
  <Button size="md">Medium</Button>
  <Button size="lg">Large</Button>
</div>

## Prefix And Suffix Slots

<div style="display:flex;gap:12px;flex-wrap:wrap;align-items:center;">
  <Button>
    <template #prefix>+</template>
    Create
  </Button>
  <Button variant="secondary">
    Next
    <template #suffix>→</template>
  </Button>
</div>

## Example

```vue
<script setup lang="ts">
import { Button } from '@zen-repo/ui'
</script>

<template>
  <Button variant="primary" size="md">Generate</Button>
  <Button variant="secondary">Save draft</Button>
  <Button variant="ghost">Skip</Button>
  <Button variant="danger">Delete</Button>
</template>
```

## Props

| Name         | Type                                              | Default     | Description                    |
| ------------ | ------------------------------------------------- | ----------- | ------------------------------ |
| `variant`    | `'primary' \| 'secondary' \| 'ghost' \| 'danger'` | `'primary'` | Controls visual style          |
| `size`       | `'sm' \| 'md' \| 'lg'`                            | `'md'`      | Controls height and padding    |
| `nativeType` | `'button' \| 'submit' \| 'reset'`                 | `'button'`  | Native button type             |
| `disabled`   | `boolean`                                         | `false`     | Disables interaction           |
| `loading`    | `boolean`                                         | `false`     | Shows spinner and blocks click |
| `block`      | `boolean`                                         | `false`     | Expands to full width          |

## Slots

| Name      | Description          |
| --------- | -------------------- |
| `default` | Button label         |
| `prefix`  | Content before label |
| `suffix`  | Content after label  |

## Events

| Name    | Payload      | Description                      |
| ------- | ------------ | -------------------------------- |
| `click` | `MouseEvent` | Fired when button is interactive |
