<template>
  <section id="joinLobby" class="join-section pb-16">
    <!-- only for logged in users -->
    <div v-if="isLoggedIn" class="container">
      <div class="inner py-5 px-3 px-md-6 text-center text-white">
        <h3>Tritt jetzt einer Lobby bei.</h3>
        <p>Deine teamkollegen warten bereits auf dich.</p>
        <p>
          <button
            type="button"
            class="btn btn-join"
            data-toggle="modal"
            data-target="#joinLobbyModal"
          >
            Jetzt beitreten
          </button>
        </p>
      </div>
    </div>
    <!-- guest -->
    <div v-if="!isLoggedIn" class="container">
      <div class="inner py-5 px-3 px-md-6 text-center text-white">
        <h3>Erstelle dein erstes Konzeptpapier.</h3>
        <p>In nur wenigen Schritten.</p>
        <p>
          <button
            type="button"
            class="btn btn-join"
            data-toggle="modal"
            data-target="#joinLobbyModal"
          >
            Jetzt erstellen
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
}
</script>

<style lang="scss" scoped>
#joinLobby .inner {
      background: #42548e;
    background: -webkit-gradient(linear, left top, left bottom, from(#42548e), to(#5c55ba));
    background: linear-gradient(180deg, #42548e 0%, #6b668c 100%);
    border-radius: 12px;

    .btn-join {
      background: #ff7e85;
      color: #fff;
    }
}
</style>
