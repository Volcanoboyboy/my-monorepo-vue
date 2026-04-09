# Input

用于文本输入、搜索框和表单字段的基础输入组件。

## Preview

<div style="display:grid;gap:16px;max-width:420px;">
  <Input label="Workspace name" placeholder="Enter a name" helper="This name is visible to your team." />
  <Input label="Search" placeholder="Search prompts" clearable>
    <template #prefix>⌕</template>
  </Input>
  <Input label="API key" model-value="Invalid token" error="Please provide a valid key." />
</div>

## Example

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Input } from '@zen-repo/ui'

const value = ref('')
</script>

<template>
  <Input
    v-model="value"
    label="Prompt"
    placeholder="Describe the UI you want"
    helper="Use a clear instruction for better results."
    clearable
  />
</template>
```

## Props

| Name          | Type                   | Default  | Description                          |
| ------------- | ---------------------- | -------- | ------------------------------------ |
| `modelValue`  | `string`               | `''`     | Current input value                  |
| `label`       | `string`               | `''`     | Field label                          |
| `placeholder` | `string`               | `''`     | Native placeholder                   |
| `helper`      | `string`               | `''`     | Helper text below input              |
| `error`       | `string`               | `''`     | Error message, overrides helper      |
| `type`        | `string`               | `'text'` | Native input type                    |
| `size`        | `'sm' \| 'md' \| 'lg'` | `'md'`   | Controls field height                |
| `disabled`    | `boolean`              | `false`  | Disables input                       |
| `clearable`   | `boolean`              | `false`  | Shows clear action when value exists |

## Slots

| Name     | Description                                         |
| -------- | --------------------------------------------------- |
| `prefix` | Content before the input                            |
| `suffix` | Content after the input when clear button is hidden |

## Events

| Name                | Payload      | Description                    |
| ------------------- | ------------ | ------------------------------ |
| `update:modelValue` | `string`     | Fired when input value changes |
| `clear`             | `void`       | Fired after clear action       |
| `focus`             | `FocusEvent` | Fired on focus                 |
| `blur`              | `FocusEvent` | Fired on blur                  |
