<template>
  <section id="resources" class="resources">
    <div class="resources-container">
      <div class="row">
        <!-- TODO: Look over this, this does not seem right for ipads -->
        <div class="col col--11 col--offset-1">
          <div class="headline-resources">
            <h2 class="title-msts">
               {{ $t('resources.browse') }}
            </h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div v-scrollanimation class="col resource-cards-left">
          <a
            class="card card-l1"
            href="https://github.com/BeckmannArmin/laravel-conForm/wiki/Getting-started"
          >
            <div class="card--header">
              <div class="card--icon">
                <i class="fas fa-question"></i>
              </div>
              <div class="card--body" style="padding-left: 0 !important">
                <p> {{ $t('resources.howto') }}?</p>
              </div>
            </div>
          </a>
          <a
            class="card card-l1"
            href="https://github.com/BeckmannArmin/laravel-conForm/issues"
          >
            <div class="card--header">
              <div class="card--icon">
                <i class="fas fa-wrench"></i>
              </div>
              <div class="card--body" style="padding-left: 0 !important">
                <p> {{ $t('resources.updates') }}</p>
              </div>
            </div>
          </a>
        </div>
        <div v-scrollanimation class="col resource-cards-middle">
          <a href="https://github.com/BeckmannArmin/laravel-conForm/wiki" class="card card-m1">
            <div class="card--header">
              <div class="card--icon">
                <i class="fas fa-book"></i>
              </div>
              <h3> {{ $t('resources.docs') }}</h3>
            </div>
            <div class="card--body">
              <p> {{ $t('resources.checkdocs') }}</p>
            </div>
          </a>
        </div>
        <div v-scrollanimation class="col resource-cards-right">
          <a href="https://github.com/BeckmannArmin/laravel-conForm/pulls" class="card card-m1">
            <div class="card--header">
              <div class="card--icon">
                <i class="fab fa-github"></i>
              </div>
              <h3> {{ $t('resources.contribute') }}</h3>
            </div>
            <div class="card--body">
              <p> {{ $t('resources.improve') }}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['mode']
}
</script>

<style lang="scss" scoped>
.resource-cards-left,
.resource-cards-middle,
.resource-cards-right {
  display: flex;
  flex-direction: column;
}
p {
  margin: 0 0 calc(1.25 * 1rem);
}
.card--icon i {
  font-size: 2.5rem;
}
.card--icon {
  margin-bottom: 1rem;
}
.card--body > :last-child,
.card--footer > :last-child,
.card--header > :last-child {
  margin-bottom: 0;
}

h3 {
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.5;
  margin: 0 0 1rem 0;
}

.card--body:not(:last-child),
.card--footer:not(:last-child),
.card--header:not(:last-child) {
  padding-bottom: 0;
}
.card--body,
.card--footer,
.card--header {
  padding: 1rem 1rem;
}
.card--icon,
.card--header h3 {
  color: #5c55ba;
}
.resource-cards-left,
.resource-cards-middle a {
  color: unset;
  text-decoration: none;
}
.card-l1,
.card-m1 {
  flex-grow: 1; /** should grow to bottom of container */
  justify-content: center; /** looks better centered  */
}
.card {
  margin: 1rem 0;
  padding: 0.5rem;
  border: 1px solid #eee; /** material */
      color: #4a4a4a;
}

.card {
  background-color: #fff;
  border-radius: calc(0.4rem * 2);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;

  .card--body {
    p {
      color: #7a7780;
    }
  }
}

.card {
  overflow: hidden;
}

.row .col {
  max-width: 100%;
  flex: 1 0;
  margin-left: 0;
}

.row .col,
img {
  max-width: 100%;
}
@media screen and (min-width: 576px) {
  .title-msts {
    font-size: 2.8rem;
  }
}
.title-msts {
  max-width: 500px;
  font-size: 2rem;
  line-height: 1.5;
  word-spacing: -0.25rem;
  font-weight: 600;
  color: #4a4a4a;
}
.headline-resources {
  margin-bottom: 2rem;
}
.row .col.col-11 {
  max-width: 50%;
}
.row .col-11.col--offset-1 {
  margin-left: 9%;
}

.row .col.col--11 {
  flex: 0 0 50%;
  max-width: 50%;
}
.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 calc(1rem * -1); /** + and - operators must be surrounded by whitespace. */
}
.resources-container,
.row .col {
  padding: 0 1rem;
  width: 100%;
}
.resources-container {
  max-width: 1140px;
  margin: 0 auto;
}
.resources {
  padding: 5rem 0;
  //background-color: #f2f6fa;
  background: url('../../../assets/features-background.png') no-repeat;
  background-size: 40% 100%;
  background-position: left center ;
}

.dark .resources {
  background-color: #121212;
  background: none !important;
  
  .headline-resources {
    .title-msts {
      color: #EBEDF0;
    }
  }

  .card {
    background-color: #20232a;
    border: none;

    .card--body {
      p {
        color: white;
      }
    }

    .card--header {
      h3 {
        color: white;
      }
      .card--icon {
        color: #b2beff;
      }
    }

    h2 {
      color: white;
    }
  }
}
</style>
