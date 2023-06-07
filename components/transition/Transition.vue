<script lang='ts'>
import { computed, defineComponent } from 'vue'

export default defineComponent({
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
      type: Number,
      default: 0.3,
    },
    function: {
      type: String,
      default: 'ease',
    },
  },
  setup(props) {
    const name = computed(() => {
      const ns = ['zrook', ...props.name.split('-').filter(Boolean)]
      if (props.reverse)
        ns.push('reverse')

      return ns.join('-')
    })

    const onBeforeEnter = () => {
      console.log('123')
    }

    return {
      name,
      onBeforeEnter,
    }
  },
})
</script>

<template>
  <Transition :name="name" @before-enter="onBeforeEnter">
    <slot />
  </Transition>
</template>
