<script lang="ts">
import Header from "@/components/Header.vue"
import HomeView from "@/views/HomeView.vue"
import Footer from "@/components/Footer.vue"

export default {
  components: {
    Header,
    HomeView,
    Footer,
  },
}
</script>

<template>
  <header><Header /></header>
  <main>
    <HomeView />
  </main>
  <footer>
    <Footer />
  </footer>
</template>
