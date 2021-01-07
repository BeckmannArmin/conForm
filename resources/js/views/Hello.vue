 <template>
  <div class="main-content-wrapper h-100">
    <section id="hero" class="hero-section hero bg-top">
    <div class="hero">
      <div class="container">
        <div class="row">
          <div class="col col--11 col-offset-1">
            <div class="headline-hero">
              <h1 class="hero--title">
                {{ $t('hello.conform_slogan') }}
              </h1>
              <div class="hero--lead">
                 {{ $t('hello.conform_potential') }}
              </div>
            </div>
            <a href="#howstart" class="button hero--button"> {{ $t('hello.button_start') }}?</a>
          </div>
          <div class="col">
            <img src="../../assets/join-lobby.svg" />
          </div>
        </div>
      </div>
    </div>
    </section>
    <JoinLobbySection />
    <HowToStartSection />
    <JoinLobbyModal />
    <ResourceSection :mode="mode"/>   
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/scss/_animations.scss";

.hero-section {
  background: url('../../assets/background-banner.png') no-repeat;
  background-size: 100% 80%;
}

.hero {
    padding-top: 40px !important; 
}

.dark .main-content-wrapper {
  background-color: #121212;

  .hero-section {
    background: none !important;
  }

}

.hero--illustration {
  display: flex;
  height: 637px;
  top: -57px;
  right: 35px;
}
.hero--button,
.hero--lead,
.hero--title {
  transform: translateY(29px) translateX(22px);
}
.button {
  display: inline-block;
  font-family: "Poppins", sans-serif !important;
  font-size: 27px;
  color: #fff;
  letter-spacing: 0;
  text-align: center;
  text-decoration: none;
  background: #ff7e85;
  border-radius: 3px;
  padding: 18px 48px 14px;
  font-weight: 500;
}
.hero {
  position: relative;
  height: 785px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}

.dark .hero-section {
  background-color: #20232a;

  .hero--title {
    color: #EBEDF0 !important;
  }
}

.hero--lead {
  font-size: 36px;
  line-height: 33px;
  color: #6c72ae;
  letter-spacing: 0;
  max-width: 568px;
  margin: 0 0 33px;
}

.hero--title {
  font-family: "Poppins", sans-serif !important;
  font-size: 47px;
  line-height: 55px;
  color: #4a4a4a;
  letter-spacing: 0;
  margin: 0;
  max-width: 674px;
  font-weight: 400;
  margin-bottom: 15px;
}

.headline-hero {
  margin-bottom: 2rem;
}

.container,
.row .col {
  padding: 0 1rem;
  width: 100%;
}
.row .col.col--11 {
  flex: 0 0 50%;
  max-width: 50%;
}
.row {
  display: flex;
  flex-direction: row;
  flex-wrap: row;
  margin: 0 calc(1rem * -1);
}
.container {
  max-width: 1140px;
  margin: 0 auto;
}
</style>

<script>
import Footer from "../components/Footer.vue";
import NavBar from "../components/NavBar.vue";
import JoinLobbyModal from "../components/modals/JoinLobbyModal.vue";
import ResourceSection from "../components/sections/ResourceSection.vue";
import GetStarted from "../components/sections/GetStarted.vue";
import JoinLobbySection from "../components/sections/JoinLobbySection.vue";
import HowToStartSection from "../components/sections/HowToStart.vue";

export default {
  components: {
    Footer,
    NavBar,
    ResourceSection,
    JoinLobbyModal,
    GetStarted,
    JoinLobbySection,
    HowToStartSection
  },
  data() {
    return {
      mode: 'light',
      isLoggedIn: null,
    }
  },
  mounted() {
    this.isLoggedIn = localStorage.getItem("jwt");
  },
  methods: {
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
