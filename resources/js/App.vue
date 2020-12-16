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
      mode: localStorage.getItem('theme-color'),
      currentTheme: ''
    }
  },
  components: {
    Footer,
    NavBar,
  },
   beforeMount() {
    window.addEventListener('scroll', this.handleScroll);
    if (localStorage.getItem('theme-color')) {
      this.currentTheme = localStorage.getItem('theme-color')
    } else {
       this.currentTheme = localStorage.setItem('theme-color', 'light')
    }
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
      const storedTheme = localStorage.getItem('theme-color');
       if(storedTheme === 'dark') {
        localStorage.setItem('theme-color', 'light');
         this.mode = "light"
        this.currentTheme = localStorage.getItem('theme-color');
      } else {
        localStorage.setItem('theme-color', 'dark');
        this.mode = "dark"
        this.currentTheme = localStorage.getItem('theme-color');
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