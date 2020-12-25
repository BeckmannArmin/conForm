<template>
  <section id="joinLobby" class="join-section pb-16">
    <!-- guests can join a lobby but not crate a paper -->
    <div v-if="!isLoggedIn" class="container">
      <div class="inner py-5 px-3 px-md-6 text-center">
        <h3>{{ $t('joinlobby.join') }}.</h3>
        <p>{{ $t('joinlobby.waiting') }}.</p>
        <p>
          <button
            type="button"
            class="btn btn-join"
            data-toggle="modal"
            data-target="#joinLobbyModal"
          >
            {{ $t('joinlobby.btn_join') }}
          </button>
        </p>
      </div>
    </div>
    <!-- only for logged in users -->
    <div v-if="isLoggedIn" class="container">
      <div class="inner py-5 px-3 px-md-6 text-center">
        <h3>{{ $t('joinlobby.createPaper') }}.</h3>
        <p>{{ $t('joinlobby.steps') }}.</p>
        <p>
          <button
            type="button"
            class="btn btn-join"
            @click="createConceptPaper"
          >
            {{ $t('joinlobby.btn') }}
          </button>
        </p>
      </div>
    </div>
    <p v-if="isLoggedIn" class="or-divider">OR</p>
    <div v-if="isLoggedIn" class="container">
      <div class="inner py-5 px-3 px-md-6 text-center">
        <h3>{{ $t('joinlobby.join') }}.</h3>
        <p>{{ $t('joinlobby.waiting') }}.</p>
        <p>
          <button
            type="button"
            class="btn btn-join"
            data-toggle="modal"
            data-target="#joinLobbyModal"
          >
            {{ $t('joinlobby.btn_join') }}
          </button>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isLoggedIn: null,
    }
  },
   mounted() {
    this.isLoggedIn = localStorage.getItem("jwt");
  },
  methods: {
    createConceptPaper() {
      this.$router.push('conceptPaperCreator');
    }
  }
}
</script>

<style lang="scss" scoped>
.or-divider{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: "futura-pt";
  font-size: 3em;
  margin: 0 1em;
}

.or-divider::before{
  content: '';
  height: .1em;
  background: black;
  flex: 1;
  margin: 0 .25em 0 0;
}
.or-divider::after{
  content: '';
  height: .1em;
  background: black;
  flex: 1;
  margin: 0 0 0 .25em;
}
#joinLobby .inner {
    background: #42548e;
    background: -webkit-gradient(linear, left top, left bottom, from(#42548e), to(#6b668c));
    background: linear-gradient(180deg, #42548e 0%, #6b668c 100%);
    border-radius: 12px;
    color: #EBEDF0;

    .btn-join {
      background: #ff7e85;
      color: #fff;
    }
}

.dark {
  #joinLobby .inner {
    background: #42548e;
    background: -webkit-gradient(linear, left top, left bottom, from(#42548e), to(#5c55ba));
    background: linear-gradient(180deg, #42548e 0%, #5c55ba 100%);
  }
}
</style>
