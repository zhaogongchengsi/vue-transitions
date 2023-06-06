<script setup lang='ts'>
import ZrookTransition from '@zrook/vue-base-transition'

defineOptions({
  name: 'Fade',
})
</script>

<template>
  <ZrookTransition name="fade" :reverse="false">
    <slot />
  </ZrookTransition>
</template>
