 <template>
  <div class="container">
    <div class="row content">

      <!-- left side image -->
      <div class="col-md-6 img-left">
        <img src="../../assets/account_register.svg" class="img-fluid" alt="image">
      </div>

      <!-- right side register card -->
      <div class="col-md-6">
         <h3 class="signin-text mb-3"> Register </h3>

            <form method="POST" action="/register">
              <div class="form-group">
                <label for="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    class="form-control"
                    v-model="name"
                    required
                    autofocus
                  />
              </div>

              <div class="form-group">
                <label for="email">E-Mail Address</label>
                  <input
                    id="email"
                    type="email"
                    class="form-control"
                    v-model="email"
                    required
                  />
              </div>

              <div class="form-group">
                <label
                  for="password"
                  >Password</label>
                  <input
                    id="password"
                    type="password"
                    class="form-control"
                    v-model="password"
                    required
                  />
              </div>

              <div class="form-group">
                <label
                  for="password-confirm"
                  >Confirm Password</label>
                  <input
                    id="password-confirm"
                    type="password"
                    class="form-control"
                    v-model="password_confirmation"
                    required
                  />
              </div>
              
               <!-- we have a handleSubmit method that is called when a 
               user submits the registration form. It sends all the form data to the API, 
               takes the response and saves the jwt to localStorage -->

               <!-- register button -->
              <div class="form-group">
                  <button
                    type="submit"
                    class="btn btn-class"
                    @click="handleSubmit"
                  >
                    Register
                  </button>
              </div>
            </form>
            <div class="text-center">
              <router-link to="/login" class="d-block small mt-3">Login</router-link>
              <router-link to="/reset-password" class="d-block small mt-3">Reset password</router-link>
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
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();

      if (
        this.password === this.password_confirmation &&
        this.password.length > 0
      ) {
        axios
          .post("api/register", {
            name: this.name,
            email: this.email,
            password: this.password,
            c_password: this.password_confirmation,
          })
          .then((response) => {
            localStorage.setItem("user", response.data.success.name);
            localStorage.setItem("jwt", response.data.success.token);

            if (localStorage.getItem("jwt") != null) {
              this.$router.go("/board");
            }
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        this.password = "";
        this.passwordConfirm = "";

        return alert("Passwords do not match");
      }
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

.img-left {
 display: flex;
}

</style>