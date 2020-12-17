 <template>
  <div class="main-content-wrapper">
    <section id="hero" class="hero-section">
    <div class="hero">
      <div class="container">
        <div class="row">
          <div class="col col--11 col-offset-1">
            <div class="headline-hero">
              <h1 class="hero--title">
                Kolloboration war noch nie so einfach.
              </h1>
              <div class="hero--lead">
                conForm entfesselt dein ganzes Potential.
              </div>
            </div>
            <a href="#resources" class="button hero--button">Wie kann ich loslegen?</a>
          </div>
          <div class="col">
            <img src="../../assets/join-lobby.svg" />
          </div>
        </div>
      </div>
    </div>
    </section>
    <section id="cards" class="cards-section">
    <div class="cards">
      <div class="cards-container">
        <div class="cards-wrapper">
          <div class="card col row-l revealOnScroll delay-2">
            <div class="cards-header">
              <img src="../../assets/idea.svg" />
            </div>
            <div class="cards-body">
              <span class="item-pink">Ideen</span>
              <p>Sammelt gemeinsam Ideen und arbeitet zusammen</p>
            </div>
          </div>
          <div class="card col row-m revealOnScroll delay-3">
            <div class="cards-header">
              <img src="../../assets/brainstorm.svg" />
            </div>
            <div class="cards-body">
              <span class="item-orange">Planung</span>
              <p>Plant euren Ablauf und erstellt Tasks</p>
            </div>
          </div>
          <div class="card col row-r revealOnScroll delay-4">
            <div class="cards-header">
              <img src="../../assets/colloboration.svg" />
            </div>
            <div class="cards-body">
              <span class="item-green">Kolloboration</span>
              <p>
                Gute Ideen kommen von allen. Arbeitet gemeinsam an eurem Paper
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
    <GetStarted :mode="mode" />
    <JoinLobbyModal />
    <ResourceSection :mode="mode"/>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/scss/_animations.scss";

@media (max-width: 1024px) {
.cards-wrapper {
    grid-template-columns: 1fr !important;
    grid-row-gap: 7.8125vmin;
}
}

.hero-section {
  background-color: #f2f6fa;
}

.dark .main-content-wrapper {
  background-color: #121212;

  .card {
    background-color: #20232a;
  }

  .cards-body p {
    color: white;
  }
}

.cards-action {
  margin-top: 10px;
}

.cards-wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 50px;
}

.item-pink {
  color: #cc68d8;
}
.item-orange {
  color: #fd804e;
}

.item-green {
  color: #40ac76;
}

.cards-body {
  font-weight: 500;
  font-size: 22px;
  line-height: 31px;
  color: #7a7780;
  letter-spacing: 0;
}

.cards-container .card {
  background-color: #fff;
  border-radius: calc(0.4rem * 2);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  padding: 25px 27px 28px;
}

.cards-header {
  display: flex;
  justify-content: center;
}

.cards-container .col {
  max-width: 100%;
  flex: 1 0;
  margin-left: 0;
}

.cards-container {
  max-width: 1140px;
  margin: 0 auto;
}

.cards-container .col {
  max-width: 100%;
}

.cards-header img {
  height: 125px;
  max-width: 100%;
  margin: 20px 15px;
}

.row-l,
.row-m,
.row-r {
  display: flex;
  flex-flow: column;
}

.cards {
  margin-bottom: 110px;
}

.cards-container {
  display: flex;
  justify-content: center;
}

.container,
.row .col {
  padding: 0 1rem;
  width: 100%;
}

.row .col {
  max-width: 100%;
  flex: 1 0;
  margin-left: 0;
}

.row .col,
img {
  max-width: 100%;
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
  margin: 0 0 99px;
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

export default {
  components: {
    Footer,
    NavBar,
    ResourceSection,
    JoinLobbyModal,
    GetStarted
  },
  data() {
    return {
      mode: 'light'
    }
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
