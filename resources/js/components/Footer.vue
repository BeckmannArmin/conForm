<template>
  <footer class="page-footer footer mt-auto py-3">
    <div class="container text-center">
      <div class="row">
        <hr class="clearfix w-100 d-md-none" />
        <!-- Grid column -->
        <div class="col-md-3 mx-auto">
          <!-- Links -->
          <h5
            class="font-weight-bold text-uppercase mt-3 mb-4"
            style="color: black"
          >
            Resources
          </h5>
          <ul class="list-unstyled">
            <li>
              <a href="https://github.com/BeckmannArmin/laravel-conForm">
                <i class="fab fa-github header-github-link"></i>
              </a>
            </li>
            <LocaleSwitcher />
          </ul>
        </div>
      </div>
    </div>
    <!-- Copyright -->
    <div class="footer-copyright text-center py-3">
      © 2021 Copyright:
      <a style="color: black"> conForm</a>
    </div>
    <!-- Copyright -->
  </footer>
</template>

<script>
import LocaleSwitcher from "../components/LocaleSwitcher.vue";
export default {
  components: {
    LocaleSwitcher,
  },
};
</script>

<style lang="scss" scoped>
.header-github-link {
  font-size: 2rem;
}

.footer-copyright {
  color: black;
}

.dark .page-footer {
  background: #20232a;

  .text-uppercase {
    color: #ebedf0 !important;
  }

  .list-unstyled {
    .header-github-link {
      color: #fff
    }
    a {
      color: #ebedf0 !important;
    }
  }

  .footer-copyright {
    color: #ebedf0 !important;

    a {
      color: #ebedf0 !important;
    }
  }
}

.page-footer {
  background: url("../../assets/footer-bg.png") no-repeat;
  background-size: 40% 100%;
  background-position: right center;
}
.list-unstyled {
  display: flex;
  align-items: center;
  flex-flow: column;
  a {
    color: black;
  }
}
.row {
  margin: 0 auto 0;
}
</style>
