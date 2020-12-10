<template>
    <div class="modal fade" id="joinLobbyModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Lobby beitreten</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <input v-model="joinCode" class="form-control" type="text" placeholder="Gib hier deinen Join Code ein">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Abbrechen</button>
        <button type="button" class="btn btn-primary" @click="joinLobby">Beitreten</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import * as authService from '../../services/auth_service';
export default {
    data() {
        return {
            joinCode: ''
        }
    },
    methods: {
        joinLobby() {
            console.log("lobby joined");
            console.log(this.joinCode);
            this.$router.push({name: 'conceptPaper', params: { joincode: this.joinCode }});
            this.flashMessage.error({
                    message: 'Ups, es scheint, dass der Join Code nicht korrekt ist. Probier es noch einmal.',
                    time: 5000
                });
        }
    }
}
</script>

<style scoped>

</style>