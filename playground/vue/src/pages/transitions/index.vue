<script setup lang="ts">

defineOptions({
  name: 'TransitionsIndexPage',
})

</script>

<template>
  <div class="flex h-full flex-col gap-10 items-center">
    首页
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
  title: Home
  icon: i-tabler-home-dot
  isMenu: false
  transition: Fade
</route>
