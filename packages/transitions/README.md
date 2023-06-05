# @zrook/transitions

This is a library for animation switching with vue3 Transition api

## Use


```html
<script setup lang="ts">
/* import '@zrook/transitions' Get all animations, most of the time you don't need to */

import '@zrook/transitions/fade'

const show = ref(false)

</script>

<template>
  <Transition name="zrook">
      <div v-if="show"  />
  </Transition>
</template>
```

### Animation class name

Default prefix is zrook

1. `fade-x` `fade-x-reverse`

### ! Welcome to contribute your interesting

More [Transition](https://vuejs.org/guide/built-ins/transition.html#the-transition-component)


❕This is a css library without any js logic
