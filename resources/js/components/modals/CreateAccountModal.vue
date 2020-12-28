<template>
  <div
    class="modal"
    id="createAccountModal"
    tabindex="-1"
    aria-labelledby="createAccountModalLabel"
    aria-hidden="true"
    style="display: block"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <img src="../../../assets/conForm_logo.png" />
          <p class="text-muted">{{ $t('conceptPaper.notloggedin') }}.</p>
          <button
            type="button"
            class="button-close r-10"
            data-dismiss="modal"
            aria-label="Close"
            @click="$emit('close')"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-dismiss="modal"
            @click="$emit('close')"
          >
            Cancel
          </button>
         <router-link
          :to="{ name: 'register' }" class="btn btn-primary">{{ $t('conceptPaper.signup') }}
          </router-link>
          <router-link
          :to="{ name: 'login' }" class="btn btn-primary">{{ $t('conceptPaper.signin') }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal {
  .modal-dialog {
    max-width: 600px;
    .modal-content {
      border-radius: 24px;
      .modal-header {
        flex-flow: column;
        border: none;

        img {
          width: 150px;
        }
        .text-muted {
           margin: 0;
          font-weight: 700;
          color: #b3b3b3;
        }
        .button-close {
          position: absolute;
          right: 42px;
          top: 10px;
          color: #333;
          background-color: #ededed;
          width: 44px;
          height: 44px;
          padding: 0;
          border-radius: 24px;
        }

        .button-close.r-10 {
          right: 10px;
        }
      }

      .modal-body {
        margin-top: -40px;
      }

      .modal-footer {
        .btn-primary {
    background-color: #6c72ae;
    border-color: #6c72ae;
}
      }
    }
  }
}
</style>
