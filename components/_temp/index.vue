<script setup lang='ts'>
import { useName } from '../shared/hooks'

defineOptions({
  name: 'temp',
})

const name = useName('temp')
</script>

<template>
  <Transition :name="name">
    <slot />
  </Transition>
</template>
