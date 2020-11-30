<template>
  <nav class="navbar sticky-top navbar-expand-md navbar-light navbar-laravel">
      <div class="container">
        <router-link :to="{ name: 'welcome' }" class="navbar-brand">
          <img
            src="../../assets/conForm_logo.png"
            width="80"
            height="80"
            alt=""
          />
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <!-- Left Side Of Navbar -->
          <ul class="navbar-nav mr-auto"></ul>
          <router-link :to="{ name: 'categorie' }" class=""
            >Categories</router-link
          >
           <ul class="navbar-nav mr-auto"></ul>
          <router-link :to="{ name: 'whiteboard' }" class=""
            >Whiteboard</router-link
          >
          <!-- Right Side Of Navbar -->
          <ul class="navbar-nav ml-auto">
          <a
        href="https://github.com/BuchholzTim/MTI-Projekt"
        target="_blank"
        rel="noopener noreferrer"
        class="header-github-link"
        aria-label="Github Repository"
      >
        <img src="../../assets/images/github-logo.svg" style="height: 25px" />
      </a>
            <!-- Authentication Links -->
            <router-link
              :to="{ name: 'login' }"
              class="nav-link nav-link-login"
              v-if="!isLoggedIn"
              >Login</router-link
            >
            <router-link
              :to="{ name: 'register' }"
              class="nav-link nav-link-register"
              v-if="!isLoggedIn"
              >Register</router-link
            >
            <li class="nav-link" v-if="isLoggedIn">Hi, {{ name }}</li>

            <button v-if="isLoggedIn" class="btn btn-logout" @click="logout">
              Logout
            </button>
          </ul>
        </div>
      </div>
  </nav>
</template>

<script>
import * as auth from "../services/auth_service";
export default {
  data() {
    return {
      isLoggedIn: null,
      name: null,
    };
  },
  mounted() {
    this.isLoggedIn = localStorage.getItem("jwt");
    this.name = localStorage.getItem("user");
  },
  methods: {
    logout: async function () {
      try {
        auth.logout();
        this.$router.push("/login");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.header-github-link {
  display: flex;
  align-items: center;
  margin-right: 10px;
}
.navbar {
  box-shadow: 3px 3px 16px 0 #e8e8e8;
  background-color: #fff;
  border-radius: 5px;
  padding-top: 6px;
  padding-bottom: 6px;
  left: 0%;
  top: 16px;
  right: 0%;
  bottom: auto;
  width: 90%;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  position: fixed;
} 

.navbar-collapse a {
text-align: center;
}

.nav-link {
  color: #5c55ba !important;
}
.nav-link-login {
  font-weight: 600 !important;
}

.nav-link-register {
  border: 1px solid #5c55ba;
  border-radius: 5px;
}

.btn-logout {
  background-color: #5c55ba;
color: #fff;
}
</style>