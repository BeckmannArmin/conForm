<template>
  <div>
    <NavBar/>
    <main class="py-4 full-height">
      <!-- Here are the child components of our view-->
      <router-view></router-view>
    </main>
    <ResourceSection />
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
import NavBar from "./components/NavBar.vue";
import ResourceSection from "./components/sections/ResourceSection.vue";

export default {
  components: {
    Footer,
    NavBar,
    ResourceSection
  },
};
</script>

<style scoped>
.full-height {
  height: 100vh;
}

.py-4 {
  padding-top: 180px !important;
}
</style>