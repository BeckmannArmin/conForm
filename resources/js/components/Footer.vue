<template>
  <footer class="page-footer font-small blue">
    <div class="container text-center">
    <div class="row">
      <hr class="clearfix w-100 d-md-none">
      <!-- Grid column -->
      <div class="col-md-3 mx-auto">
        <!-- Links -->
        <h5 class="font-weight-bold text-uppercase mt-3 mb-4" style="color: black">Resources</h5>
        <ul class="list-unstyled">
          <li>
            <a href="#!">Docs</a>
          </li>
          <li>
            <a href="#!">How to get started</a>
          </li>
        </ul>
      </div>
    </div>

  </div>
  <!-- Copyright -->
  <div class="footer-copyright text-center py-3">© 2020 Copyright:
    <a style="color: black"> conForm</a>
  </div>
  <!-- Copyright -->

</footer>
</template>

<script>
export default {
  props: ['mode']
}
</script>

<style lang="scss" scoped>
.footer-copyright {
    color: black;
}

.dark .page-footer {
  background: #20232a;

  .text-uppercase {
    color: white !important;
  }

  .list-unstyled a {
    color: white !important;
  }

  .footer-copyright {
    color: white !important;

    a {
      color: white !important;
    }

}
}

.page-footer {
    background: url('../../assets/footer-bg.png') no-repeat;
    background-size: 40% 100%;
    background-position: right center;
}
.list-unstyled a {
    color: black;
}
.row {
    margin: 0 auto 0;
}
</style>
