<template>
  <router-view v-slot="{ Component, route }">
    <component :is="route.meta.transition">
      <component :is="Component" />
    </component>
  </router-view>
</template>
