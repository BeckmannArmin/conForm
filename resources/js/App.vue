<template>
  <div class="app" :class="mode">
     <NavBar :mode="mode" @toggle="toggle"/>
    <main class="py-4 full-height">
      <!-- Here are the child components of our view-->
      <router-view></router-view>
      <FlashMessage position="right bottom"></FlashMessage>
    </main>
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
import NavBar from "./components/NavBar.vue";

export default {
  data() {
    return {
      mode: 'light'
    }
  },
  components: {
    Footer,
    NavBar,
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
    toggle() {
      if (this.mode === "dark") {
        this.mode = "light"
      } else {
        this.mode = "dark"
      }
    }
  }
};
</script>

<style scoped>
@import '../assets/scss/_animations.scss';
.full-height {
  height: 100vh;
}

.py-4 {
  padding-top: 160px !important;
}
</style>