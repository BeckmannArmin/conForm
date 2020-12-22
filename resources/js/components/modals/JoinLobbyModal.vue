<template>
  <div
    class="modal fade"
    id="joinLobbyModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel"> {{ $t('lobbyModal.join') }}</h5>
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
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            {{ $t('lobbyModal.cancel') }}
          </button>
          <button type="button" class="btn btn-primary" data-dismiss="modal" @click="joinLobby">
            {{ $t('lobbyModal.submit') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as authService from "../../services/auth_service";
export default {
  data() {
    return {
      joinCode: "",
    };
  },
  methods: {
    joinLobby() {
      this.$router.push({
        name: "conceptPaper",
        params: { joincode: this.joinCode },
      });
    },
  },
};
</script>

<style scoped>
</style>