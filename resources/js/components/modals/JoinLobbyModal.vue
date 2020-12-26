<template>
  <div
    class="modal fade"
    id="joinLobbyModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div
        id="modal-content"
        class="modal-content"
        :class="{ animated: animated }"
      >
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            {{ $t("lobbyModal.join") }}
          </h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <input
            v-model="joinCode"
            class="form-control"
            type="text"
            :placeholder="$t('lobbyModal.placeholder')"
          />
          <div class="invalid-feedback" v-if="error">
            {{ $t('joincode.incorrect') }}.
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            {{ $t("lobbyModal.cancel") }}
          </button>
          <button
            id="joinlby"
            type="button"
            class="btn btn-primary"
            @click="joinLobby"
          >
            {{ $t("lobbyModal.submit") }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as authService from "../../services/auth_service";
import axios from "axios";
export default {
  data() {
    return {
      joinCode: "",
      animated: false,
      error: false
    };
  },
  methods: {
    joinLobby: async function () {
      try {
        const response = await axios.get(`conceptPaper/lobby/${this.joinCode}`);
         this.$router.push({
        name: "conceptPaper",
        params: { joincode: this.joinCode },
      });
      } catch (error) {
        if (error.response.status === 404) {
          this.animated = true;
           this.error = true;
          setTimeout(() => {
            this.animated = false;
          }, 2000);
        }
      }
    },
  },
};
</script>

<style scoped>
.animated {
  -webkit-animation: shake 1s linear;
  animation: shake 1s linear;
}

@keyframes shake {
  8%,
  41% {
    -webkit-transform: translateX(-10px);
  }
  25%,
  58% {
    -webkit-transform: translateX(10px);
  }
  75% {
    -webkit-transform: translateX(-5px);
  }
  92% {
    -webkit-transform: translateX(5px);
  }
  0%,
  100% {
    -webkit-transform: translateX(0);
  }
}

@-webkit-keyframes shake {
  8%,
  41% {
    -webkit-transform: translateX(-10px);
  }
  25%,
  58% {
    -webkit-transform: translateX(10px);
  }
  75% {
    -webkit-transform: translateX(-5px);
  }
  92% {
    -webkit-transform: translateX(5px);
  }
  0%,
  100% {
    -webkit-transform: translateX(0);
  }
}
</style>