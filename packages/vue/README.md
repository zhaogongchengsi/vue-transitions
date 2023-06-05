# @zrook/vue-transitions

Vue transition animation library

[![NPM version](https://img.shields.io/npm/v/@zrook/vue-transitions?color=a1b858&label=)](https://www.npmjs.com/package/@zrook/vue-transitions)

## Install

```sh
npm install @zrook/vue-transitions
# or
pnpm install @zrook/vue-transitions
```

## Use

```ts
// main.ts
import "@zrook/vue-transitions/style"
```
```html
<script setup lang="ts">
/* import '@zrook/transitions' Get all animations, most of the time you don't need to */
import Fade from '@zrook/vue-transitions/fade'
const show = ref(false)
// reverse 反向动画
</script>

<template>
  <Fade direction="x" reverse>
      <div v-if="show"  />
  </Fade>
</template>
```

[MIT](./LICENSE) License © 2023 [zhaogongchengsi](https://github.com/zhaogongchengsi)

