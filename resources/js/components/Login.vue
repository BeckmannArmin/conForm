<template>
  <div class="container" style="padding-top: 160px !important">
    <div class="row content">
      <!-- left side image -->
      <div class="col-md-6">
        <img
          src="../../assets/account_login.svg"
          class="img-fluid"
          alt="image"
        />
      </div>

      <!-- right side login card -->
      <div class="col-md-6">
        <h3 class="signin-text mb-3">{{ $t("login.signin")}}</h3>

        <form method="POST" action="/login">
          <div class="form-group">
            <label for="email">{{ $t("login.email")}}</label>
            <input
              id="email"
              type="email"
              class="form-control"
              v-model="email"
              required
              autofocus
            />
          </div>

          <div class="form-group">
            <label for="password">{{ $t("login.password")}}</label>
            <input
              id="password"
              type="password"
              class="form-control"
              v-model="password"
              required
            />
          </div>

          <!-- submit button -->
          <div class="form-group">
            <button type="submit" class="btn btn-class" @click="handleSubmit">
              {{ $t("login.signin")}}
            </button>
          </div>
        </form>
        <div class="text-center">
          <router-link to="/register" class="d-block small mt-3"
            >{{ $t("login.register")}}</router-link
          >
          <router-link to="/reset-password-request" class="d-block small mt-3"
            >{{ $t("login.forgotpw")}}?</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

     <script>
     import axios from 'axios';
     import * as auth from '../services/auth_service';
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();

      if (this.password.length > 0) {
        axios
          .post("api/login", {
            email: this.email,
            password: this.password,
          })
          .then((response) => {
            localStorage.setItem("user", response.data.user.name);
            localStorage.setItem("jwt", response.data.success.token);

            if (auth.isLoggedIn()) {
              this.$router.go("/board");
            }
          })
          .catch(function (error) {
            console.error(error);
          });
      }
    },
  },
  beforeRouteEnter(to, from, next) {
    if (auth.isLoggedIn()) {
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
  .signin-text {
    color: #7a7780;
  }
  .form-group {
    label {
      color: #7a7780
    }
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
</style>