<script lang='ts'>
import { Transition, TransitionGroup, computed, defineComponent } from 'vue'

export default defineComponent({
  components: {
    Transition,
    TransitionGroup,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    reverse: {
      type: Boolean,
      required: true,
    },
    duration: {
      type: [Number, Object],
      default: 0.3,
    },
    function: {
      type: String,
      default: 'ease',
    },
    group: {
      type: Boolean,
      required: false,
    },
  },
  setup(props) {
    const name = computed(() => {
      const ns = ['zrook', ...props.name.split('-').filter(Boolean)]
      if (props.reverse)
        ns.push('reverse')

      return ns.join('-')
    })

    const transitionComponent = computed(() => props.group ? 'TransitionGroup ' : 'Transition')

    return {
      name,
      transitionComponent,
      duration: props.duration,
    }
  },
})
</script>

<template>
  <component :is="transitionComponent" :name="name">
    <slot />
  </component>
</template>
