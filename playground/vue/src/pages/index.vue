<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})

</script>

<template>
  <div class="flex h-full flex-col gap-10 items-center">
    <h3 class="text-2xl mt-30">开发中</h3>
    <router-link to="transitions">
      <button border py-2 px-3 rounded>查看动画</button>
    </router-link>
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
  title: Home
  icon: i-tabler-home-dot
  isMenu: false
  transition: Fade
</route>
