 <template>
 <div class="hero">
    <div class="container">
      <div class="row">
        <div class="col col--11 col-offset-1">
          <div class="headline-hero">
             <h1 class="hero--title">Colloboration war noch nie so einfach.</h1>
              <div class="hero--lead">
               conForm entfesselt dein ganzes Potential.
            </div>
          </div>
          <a href="" class="button hero--button">Wie kann ich loslegen?</a>
        </div>
        <div class="col">
          <img src="../../assets/join-lobby.svg" />
      </div>
      </div>
    </div>
 </div>
</template>

<style scoped>

.container, .row .col {
    padding: 0 1rem;
    width: 100%;
}

.row .col {
    max-width: 100%;
    flex: 1 0;
    margin-left: 0;
}

.row .col, img {
    max-width: 100%;
}

.hero--illustration {
    display: flex;
    height: 637px;
    top: -57px;
    right: 35px;
}
.hero--button, .hero--lead, .hero--title {
    transform: translateY(29px) translateX(22px);
}
.button {
    display: inline-block;
    font-family: "Poppins",sans-serif !important;
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
    background-color: #171c5d;
    height: 785px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0 99px;
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
  font-family: "Poppins",sans-serif !important;
   font-size: 47px;
    line-height: 55px;
    color: #fff;
    letter-spacing: 0;
    margin: 0;
    max-width: 674px;
    font-weight: 400;
    margin-bottom: 15px;
}

.headline-hero {
    margin-bottom: 2rem;
}

.container, .row .col{
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
import JoinLobbyModal from "../components/modals/JoinLobbyModal.vue";
export default {
  components: {
    JoinLobbyModal,
  },
};
</script>
