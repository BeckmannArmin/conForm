<template>
<!-- Modal -->
<div class="modal fade" id="inviteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Share this paper</h5>
        <p class="text-muted">Here you can share your concept paper with other people and enable them to colloborate with you.</p>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="grid">
            <!-- Join code -->
            <div class="flex-middle wh-100 mb-2">
                <div class="grid grid-column-3">
                    <p class="text-muted"> Share via link:</p>
                </div>
                <div class="grid grid-column-7">
                    <input id="join-code" class="input js-board-link input-readonly" type="text" readonly :value="joinCode">
                </div>
                <div class="grid grid-column-2">
                     <button ref="btnCopy" class="btn btn-sm btn-copy" @click.stop.prevent="copyLink">
                        <span v-if="!isToggled">Copy link</span>
                        <span v-if="isToggled">Copied</span>
                    </button>
                </div>
            </div>
            <!-- QR Code -->
            <div class="flex-middle wh-100 mb-2">
                <div class="grid grid-column-3">
                    <p class="text-muted"> Share via QR-Code:</p>
                </div>
                 <div class="grid grid-column-7">
                </div>
                <div class="grid grid-column-2">
                    <button class="btn btn-sm btn-copy" @click="generateQRCode">Generate Code</button>
                </div>
                <div class="modal-popup js-qr-popup" :class="{ isvisible : generated  }" v-if="generated">
                    <div class="modal-content-qr">
                    <button type="button" @click="generated = false">x</button>
                    <qrcode :value="`${$store.state.serverPath}/#/conceptPaper/lobby/${joinCode}`" :options="{ width: 320 }"></qrcode>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Got it</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
props: ['joinCode'],
  data() {
      return {
        isToggled: false,
        generated: false
      }
  },
  methods: {
      copyLink() {
      this.isToggled = true;
      setTimeout(() => {
        this.isToggled = false;
      }, 2000);
      const copyText = document.getElementById('join-code');
      copyText.select();
      copyText.setSelectionRange(0, 99999);
      document.execCommand('copy');
    },
    generateQRCode() {
        this.generated = !this.generated;
    }
  }
};
</script>

<style scoped>
.modal-popup .modal-content-qr {
    max-width: 320px;
    max-height: 320px;
    width: 100%;
    display: block;
}

.modal-body {
    display: block;
    flex: 1 1 auto;
    padding: 1rem;
    position: unset;
}

.modal-popup.isvisible {
    display: flex;
}

.modal-popup {
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(255,255,255,.95);
    border-radius: 24px;
    z-index: 300;
    justify-content: center;
    align-items: center;
}

.input-readonly {
    color: #000;
    background-color: #f8f8f8;
}
.input {
    width: 90%;
    padding: 0 16px;
    font-size: 15px;
    height: 40px;
    color: #b3b3b3;
    background-color: #fff;
    font-family: inherit;
    border-color: #ddd;
    border-radius: 8px;
    line-height: 1;
    width: 100%;
}
.btn-copy {
    color: #fff;
    background-color: #6c72ae ;
    cursor: pointer;
    display: inline-block;
    vertical-align: middle;
    text-decoration: none;
    outline: 0;
    overflow: hidden;
    font-weight: 700;
    text-align: center;
    border-radius: 24px;
    transition: .6s cubic-bezier(.165,.84,.44,1);
}
.text-muted {
    margin: 0;
    font-weight: 700;
    color: #b3b3b3;
}
.grid-column-2 {
    flex-basis: 16.66667%;
    max-width: 16.66667%;
}
.grid-column-7 {
    flex-basis: 58.33333%;
    max-width: 58.33333%;
}
.grid-column-3 {
    flex-basis: 25%;
    max-width: 25%;
}
.modal {
    border-radius: 24px;
}
.modal-dialog {
    max-width: 700px;
}
.modal-content {
    border-radius: 24px;
}
.modal-header {
    display: flex;
    flex-flow: column;
}

.modal-body .grid  {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -4px;
}
.modal-title {
    font-size: 32px;
    font-weight: 400;
    color: #191919;
    margin-right: 20px;
}

.grid .flex-middle {
    display: flex!important;
    justify-content: center;
    align-items: center;
}

.wh-100 {
    width: 100%;
}

</style>