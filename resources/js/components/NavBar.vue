<template>
  <nav class="navbar navbar-expand-md navbar-light navbar-laravel">
    <div class="container">
      <router-link :to="{ name: 'welcome' }" class="navbar-brand"
        >conForm</router-link
      >
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
        <!-- Right Side Of Navbar -->
        <ul class="navbar-nav ml-auto">
          <!-- Authentication Links -->
          <router-link
            :to="{ name: 'login' }"
            class="nav-link"
            v-if="!isLoggedIn"
            >Login</router-link
          >
          <router-link
            :to="{ name: 'register' }"
            class="nav-link"
            v-if="!isLoggedIn"
            >Register</router-link
          >
          <li class="nav-link" v-if="isLoggedIn">Hi, {{ name }}</li>
          <router-link
            :to="{ name: 'board' }"
            class="nav-link"
            v-if="isLoggedIn"
            >Board</router-link
          >

          <button v-if="isLoggedIn" class="btn btn-primary" @click="logout">Logout</button>
  
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import * as auth from '../services/auth_service';
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
    logout: async function() {
      try {
        auth.logout();
        this.$router.push('/login');
      } catch (error) {
        console.log(error);
      }
    }
  }
};
  </script>