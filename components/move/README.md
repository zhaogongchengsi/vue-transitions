# @zrook/vue-transition-move

```sh
pnpm add @zrook/vue-transition-move
```
```html

<script  setup lang="ts" >
import Move from '@zrook/vue-transition-move'
import '@zrook/vue-transition-move/style'
</script>

<template>
  ...
  <Move>
        <div v-if="isShow" class="h-50 w-50 bg-red"> </div>
  </Move>
  ...
</template>

```

### Props

- direction
  - desc: movement
  - type: `x | y`
  - default: `x`
- reverse:
  - desc: Whether to reverse
  - type: `boolean`
  - default: `false`
