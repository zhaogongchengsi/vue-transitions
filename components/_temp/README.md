# @zrook/vue-transition-temp

```sh
pnpm add @zrook/vue-transition-temp
```
```html

<script  setup lang="ts" >
import temp from '@zrook/vue-transition-temp'
import '@zrook/vue-transition-temp/style'
</script>

<template>
  ...
  <temp direction="x">
        <div v-if="isShow" class="h-50 w-50 bg-red"> </div>
  </temp>
  ...
</template>

```

### Props
