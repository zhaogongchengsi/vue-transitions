<script lang="ts" setup>
import { availableLocales, loadLanguageAsync } from "~/modules/i18n";

const { t, locale } = useI18n();

async function toggleLocales() {
  // change to some real logic
  const locales = availableLocales;
  const newLocale =
    locales[(locales.indexOf(locale.value) + 1) % locales.length];
  await loadLanguageAsync(newLocale);
  locale.value = newLocale;
}

const router = useRouter();
const menus = computed(() => {
  const routers = router.getRoutes();
  const cache = [];
  const menus: { title: string; icon?: string }[] = routers.map((router) => {
    if (!router.meta || !router.meta.isMenu || cache.includes(router.path)) {
      return null;
    }
    cache.push(router.path);
    return {
      path: router.path,
      ...router.meta,
    };
  });
  return menus.filter(Boolean);
});
</script>

<template>
  <div class="w-full h-screen flex">
    <div class="w-50 h-screen border-r-1 border-black/30  dark:border-white/40 flex flex-col">
      <div class="p-3 border-b-1 border-black/30  dark:border-white/40 flex items-center">
        <button icon-btn :title="t('button.toggle_dark')" @click="toggleDark()">
          <div i="carbon-sun dark:carbon-moon" />
        </button>
      </div>
      <ul class="flex-1 divide-y">
        <li v-for="(item, index) of menus" :key="index" class="hover:bg-slate-200/40">
          <RouterLink icon-btn :to="item.path" class="py-3 px-2 w-full">
            <div class="flex items-center gap-3">
              <div :class="item.icon" class="w-5 h-5" />
              <span>{{ item.title || "未知的名字" }}</span>
            </div>
          </RouterLink>
        </li>
      </ul>
    </div>
    <main flex-1 px-4 py-10 text="center gray-700 dark:gray-200">
      <RouterView />
    </main>
  </div>
</template>
