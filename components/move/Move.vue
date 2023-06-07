<script setup lang='ts'>
import { computed } from 'vue'
import { useName } from '../hooks'

interface MoveProps {
  reverse?: boolean
  direction?: 'x' | 'y'
  group?: boolean
}

const props = withDefaults(defineProps<MoveProps>(), {
  reverse: false,
  direction: 'x',
})

defineOptions({
  name: 'Move',
})

const name = computed(() => {
  return useName(`move-${props.direction}`, props.reverse)
})
</script>

<template>
  <Transition :name="name" v-bind="props">
    <slot />
  </Transition>
</template>
