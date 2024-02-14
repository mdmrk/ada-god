<template>
  <button class="relative" @click="toggle" v-click-away="away">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-language"
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
        class="origin-top-right absolute right-0 mt-4 bg-dark-room rounded-xl p-2 flex flex-col align-center justify-center z-50 border border-gray-darker cursor-default"
        @click.stop
        v-if="active"
      >
        <button
          v-for="lang in languages"
          :key="lang"
          class="px-1 py-1 hover:bg-night rounded-full items-center justify-start"
          @click="changeLanguage(lang)"
        >
          <div
            class="uppercase text-[10px] text-xs border-gray-darker border rounded-full w-24 flex items-center justify-center text-gray-light py-1"
          >
            {{ lang }}
          </div>
        </button>
      </div>
    </transition>
  </button>
</template>

<script lang="ts">
import i18n from '@/i18n'
import messages from '@intlify/unplugin-vue-i18n/messages'

export default {
  name: 'LangItem',
  data() {
    return {
      active: false,
      languages: Object.keys(messages)
    }
  },
  methods: {
    toggle() {
      this.active = !this.active
    },
    away() {
      this.active = false
    },
    changeLanguage(lang: string) {
      i18n.global.locale.value = lang
      document.querySelector('html')!.setAttribute('lang', lang)
      localStorage.setItem('user-locale', lang)
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
