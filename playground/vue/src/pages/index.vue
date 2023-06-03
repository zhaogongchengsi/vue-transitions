<script setup lang="ts">
import { RightLeft } from '@zrook/vue-transitions'

defineOptions({
  name: 'IndexPage',
})
</script>

<template>
  <div>
    <RightLeft> <div>M </div> </RightLeft>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
