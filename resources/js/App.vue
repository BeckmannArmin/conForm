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
   beforeMount() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
     handleScroll() {
      const elementsToShow = document.querySelectorAll('.revealOnScroll');
      /** better get the feature section here instead of hard coded values */
      if (window.scrollY > 390) {
        elementsToShow.forEach((element) => {
          element.classList.add('animated');
          element.classList.add('fadeInLeft');
        });
      }
    },
  }
};
</script>

<style scoped>
@import '../assets/scss/_animations.scss';
.full-height {
  height: 100vh;
}

.py-4 {
  padding-top: 180px !important;
}
</style>