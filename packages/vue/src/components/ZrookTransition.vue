<script setup lang='ts'>
import { computed } from 'vue'
import type { Transition } from '../types/index'
import { transitionConfig } from './utils'

interface FadeProps extends Transition {
  name: string
  reverse: boolean
}

const props = withDefaults(defineProps<FadeProps>(), {
  reverse: false,
  ...transitionConfig,
})

const name = computed(() => {
  const ns = ['zrook', ...props.name.split('-')]
  if (props.reverse)
    ns.push('reverse')

  return ns.join('-')
})
</script>

<template>
  <Transition :name="name">
    <slot />
  </Transition>
</template>
