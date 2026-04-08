# Button 按钮

## 基础用法

<DemoBlock>
<Button @click="() => alert('clicked')">Click me</Button>
</DemoBlock>

## 代码

```vue
<template>
  <Button @click="handleClick">Click me</Button>
</template>

<script setup>
import { Button } from '@zen-repo/ui'
const handleClick = () => alert('clicked')
</script>
```