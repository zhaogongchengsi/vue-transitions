<script setup lang='ts'>
import { computed } from 'vue'
import type { Transition } from '../../types/index'
import { transitionConfig } from '../utils'
import ZrookTransition from '../ZrookTransition.vue'

const props = withDefaults(defineProps<FadeProps>(), {
  direction: 'x',
  reverse: false,
  ...transitionConfig,
})

defineOptions({
  name: 'Fade',
})

interface FadeProps extends Transition {
  direction?: 'x' | 'y'
  reverse?: boolean
}

const name = computed(() => {
  return `fade-${props.direction}`
})
</script>

<template>
  <ZrookTransition :name="name" v-bind="props">
    <slot />
  </ZrookTransition>
</template>
