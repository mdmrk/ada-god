<script lang="ts">
import HomeView from '@/views/HomeView.vue'
import Lang from '@/components/Lang.vue'

export default {
  components: {
    HomeView,
    Lang
  }
}
</script>

<template>
  <header>
    <nav><Lang /></nav>
  </header>
  <main>
    <HomeView />
  </main>
  <footer>
    <a href="https://github.com/mdmrk/ada-god" target="_blank">github.com/mdmrk/ada-god</a>
  </footer>
</template>
