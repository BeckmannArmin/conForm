 <template>
  <div class="container register" style="padding-top: 160px !important">
    <div class="row content">
      <!-- left side image -->
      <div class="col-md-6 img-left">
        <img
          src="../../assets/account_register.svg"
          class="img-fluid"
          alt="image"
        />
      </div>

      <!-- right side register card -->
      <div class="col-md-6">
        <h3 class="signin-text mb-3">{{ $t("login.register") }}</h3>

        <form
          v-on:submit.prevent="handleSubmit"
          method="POST"
          action="/register"
        >
          <div class="form-group">
            <label for="name">Name</label>
            <input
              id="name"
              type="text"
              class="form-control"
              v-model="user.name"
              autofocus
            />
            <div class="invalid-feedback" v-if="errors.name">
              {{ errors.name[0] }}
            </div>
          </div>

          <div class="form-group">
            <label for="email">{{ $t("login.email") }}</label>
            <input
              id="email"
              type="email"
              class="form-control"
              v-model="user.email"
            />
            <div class="invalid-feedback" v-if="errors.email">
              {{ errors.email[0] }}
            </div>
          </div>

          <div class="form-group">
            <label for="password">{{ $t("login.password") }}</label>
            <input
              id="password"
              type="password"
              class="form-control"
              v-model="user.password"
            />
            <div class="invalid-feedback" v-if="errors.password">
              {{ errors.password[0] }}
            </div>
          </div>

          <div class="form-group">
            <label for="password-confirm">{{ $t("login.confirm") }}</label>
            <input
              id="password-confirm"
              type="password"
              class="form-control"
              v-model="user.password_confirmation"
            />
            <div class="invalid-feedback" v-if="errors.password">
              {{ errors.password[0] }}
            </div>
          </div>

          <!-- we have a handleSubmit method that is called when a 
               user submits the registration form. It sends all the form data to the API, 
               takes the response and saves the jwt to localStorage -->

          <!-- register button -->
          <div class="form-group">
            <button class="btn btn-class">
              {{ $t("login.register") }}
            </button>
          </div>
        </form>
        <div class="text-center">
          <router-link to="/login" class="d-block small mt-3">{{
            $t("login.signin")
          }}</router-link>
          <router-link
            to="/reset-password-request"
            class="d-block small mt-3"
            >{{ $t("login.reset") }}</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import * as auth from "../services/auth_service";
export default {
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
      errors: {},
    };
  },
  methods: {
    handleSubmit() {
      this.errors = {};
      axios
        .post("api/register", this.user)
        .then((response) => {
          console.log(response);
          this.$router.push("/login");
        })
        .catch((error) => {
          switch (error.response.status) {
            case 422:
              this.errors = error.response.data.errors;
              break;
            case 500:
              this.flashMessage.error({
                message:
                  "Oop, etwas ist schiefgelaufen. Versuch es noch einmal.",
                time: 5000,
              });
              break;
            default:
              this.flashMessage.error({
                message:
                  "Oop, etwas ist schiefgelaufen. Versuch es noch einmal.",
                time: 5000,
              });
              break;
          }
        });
    },
  },

  /**
   * the callback checks if the user is logged in and redirects him to the board
   */
  beforeRouteEnter(to, from, next) {
    if (localStorage.getItem("jwt")) {
      return next("board");
    }

    next();
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
body {
  font-family: "Poppins", sans-serif;
}

.dark {
  .content {
    background-color: #20232a;
  }

  .form-group {
    label {
      color: #fff;
    }
    
      input {
        background-color: #20232a !important;
        color: #f3f3f3 !important;
      }
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
}
.content {
  margin: 8%;
  background-color: #fff;
  padding: 4rem 1rem 4rem 1rem;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.05);
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
  border-color: #5c55ba !important;
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
  border-color: #5c55ba;
  color: #5c55ba;
}

.btn-class:hover {
  background-color: #5c55ba;
}

.img-left {
  display: flex;
}
</style>