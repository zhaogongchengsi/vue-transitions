<script setup lang='ts'>
import '@zrook/transitions/fade'
import { computed } from 'vue'
import type { Transition } from '../types/index'
import { transitionConfig } from './config'
import ZrookTransition from './ZrookTransition.vue'

interface FadeProps extends Transition {
  direction?: 'x' | 'y'
  reverse?: boolean
}

const props = withDefaults(defineProps<FadeProps>(), {
  direction: 'x',
  reverse: false,
  ...transitionConfig,
})

const name = computed(() => {
  return `fade-${props.direction}`
})
</script>

<template>
  <ZrookTransition :name="name" v-bind="props">
    <slot />
  </ZrookTransition>
</template>
