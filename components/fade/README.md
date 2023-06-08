# @zrook/vue-transition-fade

```sh
pnpm add @zrook/vue-transition-fade
```
```html

<script  setup lang="ts" >
import Fade from '@zrook/vue-transition-fade'
import '@zrook/vue-transition-fade/style'
</script>

<template>
  ...
  <Fade direction="x">
        <div v-if="isShow" class="h-50 w-50 bg-red"> </div>
  </Fade>
  ...
</template>

```

### Props
