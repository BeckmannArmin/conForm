<template>
  <div class="error-container vertical-center">
    <div class="img-wrapper">
      <img src="../../assets/images/page-not-found.svg" />
    </div>
    <div class="content-wrapper">
      <h1 class="has-text-centered is-bold">
        Ooops! Lost in space?
      </h1>
      <router-link to="/">
        <button class="btn btn-lg">Get me back home</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
  layout: 'empty',
};
</script>

<style lang="scss" scoped>
.error-container.vertical-center {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  min-height: 100%;
  min-height: 100vh;

  .img-wrapper {
    display: flex;
    justify-content: center;

    img {
      max-width: 75%;
    }
  }

  .content-wrapper {
    display: flex;
    flex-flow: column;
    align-items: center;
    margin-top: 40px;

    .is-bold {
      font-size: 28px;
      font-weight: 700;
      color: #4a4a4a;
    }

    button {
      margin-top: 10px;
      background-color: #5c55ba;
      color: #fff;
    }

  }
}
</style>
