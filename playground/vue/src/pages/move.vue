<script setup lang="ts">
import { Move } from '@zrook/vue-transitions'

defineOptions({
  name: 'IndexPage',
})

const isShow = ref(false)
</script>

<template>
  <div class="flex h-full flex-col gap-10 items-center">
    <button class="border px-3 py-2" @click="isShow = !isShow">
      切换
    </button>
    <div class="flex flex-col items-center gap-5">
      <span> {{ isShow ? '出现' : '消失' }} </span>
      <Move direction="x">
        <div v-if="isShow" class="h-50 w-50 bg-red">
          测试小方块
        </div>
      </Move>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
  title: Move
  icon: i-tabler-home-dot
  isMenu: true
  transition: Fade
</route>
