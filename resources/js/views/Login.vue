<template>
  <div class="container">
    <div class="row content">

      <!-- left side image -->
      <div class="col-md-6">
        <img src="../../assets/account_login.svg" class="img-fluid" alt="image">
      </div>

      <!-- right side login card -->
      <div class="col-md-6">
        <h3 class="signin-text mb-3"> Sign in </h3>

            <form method="POST" action="/login">
              <div class="form-group">
                <label for="email">E-Mail Address</label>
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
                <label
                  for="password">Password</label>
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
                  <button
                    type="submit"
                    class="btn btn-class"
                    @click="handleSubmit"
                  >
                    Login
                  </button>
              </div>
            
            </form>
            <div class="text-center">
          <router-link to="/register" class="d-block small mt-3"
            >Register an account</router-link
          >
          <router-link to="/reset-password" class="d-block small mt-3"
            >Forgot password?</router-link
          >
        </div>
    </div>
  </div>
  </div>
</template>

     <script>
     import axios from 'axios';
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
            localStorage.setItem("user", response.data.success.name);
            localStorage.setItem("jwt", response.data.success.token);

            if (localStorage.getItem("jwt") != null) {
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
    if (localStorage.getItem("jwt")) {
      return next("board");
    }

    next();
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
body {
  font-family: 'Poppins', sans-serif;
}
.content {
  margin: 8%;
  background-color: #fff;
  padding: 4rem 1rem 4rem 1rem;
  box-shadow: 0 0 5px 5px rgba(0,0,0, .05);
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