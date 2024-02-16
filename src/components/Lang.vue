<template>
  <button class="relative" @click="toggle" v-click-away="away">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-locale"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 5h7" />
      <path d="M9 3v2c0 4.418 -2.239 8 -5 8" />
      <path d="M5 9c0 2.144 2.952 3.908 6.7 4" />
      <path d="M12 20l4 -9l4 9" />
      <path d="M19.1 18h-6.2" />
    </svg>
    <transition name="dropdown-content">
      <div
        class="origin-top-right absolute right-0 mt-4 bg-dark-room rounded-xl p-2 flex flex-col align-center justify-center z-50 border border-gray-darker cursor-default gap-0.5"
        @click.stop
        v-if="active"
      >
        <button
          v-for="(locale, localeCode) in locales"
          :key="localeCode"
          class="px-2 py-1 w-36 h-8 hover:bg-night rounded-xl items-center justify-start flex flex-row gap-2"
          :class="{ 'bg-night': localeCode === activeLocale }"
          @click="changeLocale(localeCode)"
        >
          <div
            class="uppercase text-[9px] text-xs tracking-widest border-gray-darker border rounded-full w-8 flex items-center justify-center text-gray-light"
          >
            {{ localeCode }}
          </div>
          <span class="text-sm text-gray-light">{{ locale }}</span>
        </button>
      </div>
    </transition>
  </button>
</template>

<script lang="ts">
import i18n, { availableLocales } from '@/i18n'

export default {
  name: 'LangItem',
  data() {
    return {
      active: false,
      locales: availableLocales
    }
  },
  methods: {
    toggle() {
      this.active = !this.active
    },
    away() {
      this.active = false
    },
    changeLocale(lang: string) {
      i18n.global.locale.value = lang
      document.querySelector('html')!.setAttribute('lang', lang)
      localStorage.setItem('user-locale', lang)
    }
  },
  computed: {
    activeLocale() {
      return i18n.global.locale.value
    }
  }
}
</script>

<style>
.dropdown-content-enter-active,
.dropdown-content-leave-active {
  transition: all 0.2s;
}

.dropdown-content-enter,
.dropdown-content-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>
