<script lang="ts" setup>
// import { availableLocales, loadLanguageAsync } from '~/modules/i18n'
const { t } = useI18n()

// async function toggleLocales() {
//   // change to some real logic
//   const locales = availableLocales
//   const newLocale
//     = locales[(locales.indexOf(locale.value) + 1) % locales.length]
//   await loadLanguageAsync(newLocale)
//   locale.value = newLocale
// }

const router = useRouter()
const menus = computed(() => {
  const routers = router.getRoutes()
  const cache: string[] = []
  // @ts-ignore
  const menus: { title: string; icon?: string, path: string }[] = routers.map((router) => {
    if (!router.meta || !router.meta.isMenu || cache.includes(router.path))
      return null

    cache.push(router.path)
    return {
      path: router.path,
      ...router.meta,
    }
  })
  return menus.filter(Boolean)
})
</script>

<template>
  <div class="h-screen w-full flex">
    <div class="h-screen w-70 flex flex-col border-r-1 a-border-color dark:border-white/40">
      <div class="flex items-center justify-between border-b-1 a-border-color p-3 dark:border-white/40 h-15">
        <div @click="router.push('/')" icon-btn class="w-8 h-8" i-tabler-home />
        <div @click="router.back()" icon-btn class="i-tabler-arrow-back-up w-8 h-8" />
      </div>
      <ul class="flex-1 flex flex-col gap-2 p-2">
        <li v-for="(item, index) of menus" :key="index" class=" h-12">
          <RouterLink :to="item.path" class="w-full h-full flex items-center px-2 rounded-lg"
            hover="router-link_hover_active" active-class="router-link_hover_active">
            <div class="flex items-center gap-3">
              <div :class="item.icon" class="h-6 w-6" />
              <span class="text-5">{{ item.title || "未知的名字" }}</span>
            </div>
          </RouterLink>
        </li>
      </ul>
    </div>
    <main flex-1 class="flex flex-col h-screen">
      <header class="h-15 border-b-1 a-border-color flex items-center px-5">

        <button icon-btn i="tabler-sun dark:tabler-moon" class="w-8! h-8! ml-auto" :title="t('button.toggle_dark')" @click="toggleDark()" />

        <a href="https://github.com/zhaogongchengsi/vue-transitions" target="_blank"  class="flex items-center justify-center ml-5"> <div icon-btn class="w-8 h-8" i="tabler-brand-github"  /> </a>

      </header>
      <div class="flex-1">
        <RouterView />
      </div>
    </main>
  </div>
</template>

<style>
.router-link_hover_active {
  @apply ring-1 ring-purple-500 bg-white text-purple-500 dark: bg-slate-700 dark:text-white
}
</style>
