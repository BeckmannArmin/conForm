<template>
  <header id="header" class="header">
    <nav class="navbar navbar-expand-lg fixed-top">
      <div class="container">
        <a class="navbar-brand">
          <router-link :to="{ name: 'welcome' }" class="navbar-brand">
            <img
              class="img-light"
              src="../../assets/conForm_logo_light.png"
              width="100"
              height="100"
              alt=""
            />
            <img
              class="img-dark"
              src="../../assets/conForm_logo_dark.png"
              width="100"
              height="100"
              alt=""
              style="display: none"
            />
          </router-link>
        </a>

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
          <!-- Right Side Of Navbar -->
          <ul class="navbar-nav ml-auto">
            <!-- Dark Mode toggle -->
            <Toggle :mode="mode" @toggle="$emit('toggle')" />

            <!-- Dropdown -->
            <li v-if="isLoggedIn" class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Produkte
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item">
                  <router-link
                    :to="{ name: 'conceptPaperCreator' }"
                    class="nav-link"
                    >Konzeptpapier Creator</router-link
                  ></a
                >
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  <router-link :to="{ name: 'kanban' }" class="nav-link"
                    >Kanban Board</router-link
                  ></a
                >
              </div>
            </li>

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
  </header>
</template>

<script>
import * as auth from "../services/auth_service";
import Toggle from "../components/Toggler.vue";
export default {
  props: ["mode"],
  components: {
    Toggle,
  },
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
        this.$router.go(0);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.header-github-link {
  display: flex;
  align-items: center;
  margin-right: 10px;
}

.dark {
  .navbar {
    background: #20232a;
  }
  .navbar.active {
    background: #20232a;
  }
  .nav-link {
    color: #fff !important;
  }
  .img-light {
    display: none;
  }
  .img-dark {
    display: block !important;
  }
}

.navbar.active {
  background: #fff;
  padding-top: 1rem !important;
  padding-bottom: 1rem !important;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
}

.navbar {
  padding: 0.5rem 1rem;
}

.navbar {
  transition: all 0.3s;
  padding-top: 1.5rem !important;
  padding-bottom: 1.5rem !important;
  height: 100px;
}

.navbar-collapse a {
  text-align: center;
}

.nav-link {
  color: #1c1e21 !important;
}
.nav-link-login {
  font-weight: 600 !important;
}

.nav-link-register {
  border: 1px solid #5c55ba;
  border-radius: 5px;
  background: #5c55ba;
  color: #fff !important;
}

.btn-logout {
  background-color: #5c55ba;
  color: #fff;
}

@media (min-width: 768px) {
  .navbar-nav .nav-link {
    padding-right: 1rem;
    padding-left: 1rem;
  }
}

@media (min-width: 992px) {
  .navbar-expand-lg .navbar-nav .nav-link {
    padding-right: 1.5rem;
    padding-left: 1.5rem;
  }
}
</style>