<script setup lang='ts'>
import { computed } from 'vue'
import ZrookTransition from '@zrook/vue-base-transition'

interface MoveProps {
  reverse?: boolean
  direction?: 'x' | 'y'
}

const props = withDefaults(defineProps<MoveProps>(), {
  reverse: false,
  direction: 'x',
})

defineOptions({
  name: 'Move',
})

const name = computed(() => {
  return `move-${props.direction}`
})
</script>

<template>
  <ZrookTransition :name="name" v-bind="props" :duration="3">
    <slot />
  </ZrookTransition>
</template>
