<template>
  <div v-scrollanimation  class="demo-container" id="demo">
    <div class="column has-text-centered" id="demo-top">
      <h1 class="title is-2">{{ $t("getstarted.create") }}?</h1>
    </div>
    <br />
    <div class="columns">
      <!-- this is dynamic -->
      <div class="column is-7 margin-center">
        <!-- Tasks -->
        <div
          id="demo1"
          class="box box-shadow-lift box-shadow-blue"
          style="display: block"
        >
          <video
            class
            autoplay="autoplay"
            loop="loop"
            muted="muted"
            src=""
          ></video>
          <hr />
        </div>
        <!-- Concept Paper -->
        <div
          id="demo2"
          class="box box-shadow-lift box-shadow-yellow"
          style="display: none"
        >
          <video
            class
            autoplay="autoplay"
            loop="loop"
            muted="muted"
            src=""
          ></video>
          <hr />
        </div>
      </div>
      <!-- click here to show the vid´s -->
      <div class="column has-text-centered is-4">
        <div class="box">
          <p class="subtitle">{{ $t("getstarted.plan") }}</p>
          <hr />
          <button class="btn btn-block is-blue btn-lg">
            <a target="_blank" rel="noopener" style="color: white !important"
              >Task Planner</a
            >
          </button>
        </div>
        <div class="box">
          <p class="subtitle">{{ $t("getstarted.concept") }}</p>
          <hr />
          <button class="btn btn-block btn-lg is-yellow">
            <a target="_blank" rel="noopener" style="color: black !important"
              >{{ $t("getstarted.conceptPaper") }} Creator</a
            >
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["mode"],
};
</script>

<style lang="scss" scoped>

.dark  {
  background: #20232a !important;

  .title {
    color: #ebedf0 !important;
  }
}

.box {
  margin-bottom: 1.5rem;
}
.btn.is-blue {
  background-color: #209cee;
}

.btn.is-yellow {
  background-color: #ffdd57;
}

.subtitle {
  color: #7a7780;
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.25;
}

.box video {
  object-fit: contain;
}

.box-shadow-lift.box-shadow-yellow {
  box-shadow: #ffdd57 0 7px 25px 0;
}

.box-shadow-lift.box-shadow-blue {
  box-shadow: #209cee 0 7px 25px 0;
}

.box-shadow-lift {
  box-shadow: rgba(0, 0, 0, 0.1) 0 7px 25px 0;
}

.box {
  background-color: white;
  border-radius: 6px;
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  color: #4a4a4a;
  display: block;
  padding: 1.25rem;
  -webkit-transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
  transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
}

.column {
  display: block;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;
  padding: 0.75rem;
}

.margin-center {
  margin: auto 0 auto 0;
}

@media screen and (min-width: 769px) {
  .column.is-4,
  .column.is-4-tablet {
    flex: none;
    width: 33.33333%;
  }
}

@media screen and (min-width: 769px) {
  .column.is-7,
  .column.is-7-tablet {
    flex: none;
    width: 58.33333%;
  }
}

@media screen and (min-width: 769px) {
  .columns:not(.is-desktop) {
    display: flex;
  }
}

.columns:last-child {
  margin-bottom: -0.75rem;
}

.columns {
  margin-left: -0.75rem;
  margin-right: -0.75rem;
  margin-top: -0.75rem;
}

.title {
  color: #4a4a4a;
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.125;
}

.title.is-2 {
  font-size: 2.5rem;
}

.demo-container {
  flex-grow: 1;
  margin: 0 auto;
  position: relative;
  width: auto;
}

@media screen and (min-width: 1408px) {
  .demo-container {
    max-width: 1344px;
  }
}
.column {
  display: block;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;
  padding: 0.75rem;
}
.has-text-centered {
  text-align: center !important;
}
</style>