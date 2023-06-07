<script setup lang='ts'>
import { useName } from '../hooks'

defineOptions({
  name: 'Fade',
})

const name = useName('fade')
</script>

<template>
  <Transition :name="name">
    <slot />
  </Transition>
</template>
