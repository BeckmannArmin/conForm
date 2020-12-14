 <template>
  <div class="container">
    <div class="row content">

      <!-- left side image -->
      <div class="col-md-6 img-left">
        <img src="../../assets/forgot_password.svg" class="img-fluid" alt="image">
      </div>

      <!-- right side register card -->
      <div class="col-md-6">
         <h3 class="signin-text mb-3">Forgot your password?</h3>
          <p style="font-weight:100">Enter your email below and we will send you instructions on how to reset your password</p>
            <form method="POST" action="/forgotpassword">
            
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

               <!-- forgot password button -->
              <div class="form-group">
                  <button
                    type="submit"
                    class="btn btn-class"
                    @click="resetPassword"
                  >
                    Reset password
                  </button>
              </div>
            </form>
            <div class="text-center">
              <router-link to="/login" class="d-block small mt-3">Login</router-link>
              <router-link to="/register" class="d-block small mt-3">Regiser</router-link>
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
      email: ""
    }
  },
  methods: {
    resetPassword(e) {
      e.preventDefault();
    }
  }
}
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