 <template>
  <div class="container" style="padding-top: 160px !important">
    <div class="row content">

      <!-- left side image -->
      <div class="col-md-6 img-left">
        <img src="../../assets/forgot_password.svg" class="img-fluid" alt="image">
      </div>

      <!-- right side register card -->
      <div class="col-md-6">
         <h3 class="signin-text mb-3">{{ $t("login.forgotpw")}}</h3>
          <p style="font-weight:100">{{ $t("login.noprob")}}.</p>
            <form method="POST" action="/forgotpassword">
            
              <div class="form-group">
                <label for="email">{{ $t("login.email")}}</label>
                  <input
                    id="email"
                    type="email"
                    class="form-control"
                    v-model="user.email"
                    required
                  />
                  <div class="invalid-feedback" v-if="errors.email">{{errors.email[0]}}</div>
              </div>

               <!-- forgot password button -->
              <div class="form-group">
                  <button
                    type="submit"
                    class="btn btn-class"
                    @click="resetPassword"
                    ref="btnSubmit"
                  >
                    Request password
                  </button>
              </div>
            </form>
            <div class="text-center">
              <router-link to="/login" class="d-block small mt-3">{{ $t("login.signin")}}</router-link>
              <router-link to="/register" class="d-block small mt-3">{{ $t("login.register")}}</router-link>
            </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import * as authService from '../services/auth_service.js';
export default {
  name: 'ResetPasswordRequest',
  data() {
    return {
      user: {
        email: ""
      },
      btnOldHtml: '',
      errors: {}
    }
  },
  methods: {
    resetPassword: async function() {
      try {
        this.disableSubmission(this.$refs.btnSubmit);
        this.errors = {};
        const response = await authService.resetPasswordRequest(this.user);
        console.log(response);
        this.flashMessage.success({
          message: response.data.message,
          time: 5000
        });
        this.$router.push({name: 'reset', params: {email: this.user.email}});
      } catch (error) {
        switch (error.response.status) {
          case 422:
            this.errors = error.response.data.errors;
            break;
          default:
            this.flashMessage.error({
              message: 'Oops, etwas ist schiefgelaufen. Versuche es erneut.',
              time: 5000
            });
            break;
        }
        this.enableSubmission(this.$refs.btnSubmit);
      }
    },
    disableSubmission(btn) {
      btn.setAttribute('disabled', 'disabled');
      this.btnOldHtml = btn.innerHTML;
      btn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Please wait...'
    },
    enableSubmission(btn) {
      btn.removeAttribute('disabled');
      btn.innerHTML = this.btnOldHtml;
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
body {
  font-family: 'Poppins', sans-serif;
}

.dark {
  .content {
    background-color: #20232a;
  }

  .form-control {
    background-color: #20232a;
  }

  .col-md-6 {
    .text-center {
      a {
        color: #f3f3f3;
      }
    }
  }

  .signin-text {
    color: #fff;
  }
  .form-group {
    label {
      color: #fff
    }
  }
}
.content {
  margin: 8%;
  background-color: #fff;
  padding: 4rem 1rem 4rem 1rem;
  box-shadow: 0 0 5px 5px rgba(0,0,0, .05);
  border-radius: 12px;
}
.signin-text {
  font-style: normal;
  font-weight: 600 !important;
}

.form-control {
  display: block;
  width: 100%;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  border-color: #5C55BA !important;
  border-style: solid !important;
  border-width: 0 0 2px 0 !important;
  height: auto;
  color: #495057;
  padding: 0px !important;
  border-radius: 0;
  background-color: #fff;
  background-clip: padding-box;
}

.form-control:focus {
  color: #495957;
  background-color: #fff;
  border-color: #fff;
  outline: 0;
  box-shadow: none;
}

.btn-class {
  border-color: #5C55BA;
  color: #5C55BA;
}

.btn-class:hover {
  background-color: #5C55BA;
}
</style>