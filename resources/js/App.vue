<template>
  <div>
    <NavBar/>
    <main class="py-4 full-height">
      <!-- Here are the child components of our view-->
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

export default {
  components: {
    Footer,
    NavBar
  },
};
</script>

<style scoped>
.full-height {
  height: 100vh;
}
</style>