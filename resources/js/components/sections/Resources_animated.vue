<template>
  <section id="resources" class="resources pt-16 pb-16">
    <div class="container">
      <div class="row">
        <div class="col-offset">
          <div class="headline-resources">
            <h2 class="title-msts">
              {{ $t("resources.browse") }}
            </h2>
          </div>
        </div>
      </div>
      <ol class="articles mb-0">
        <li
          v-scrollanimation
          class="articles__article"
          style="--animation-order: 1"
        >
          <a href="https://github.com/BeckmannArmin/laravel-conForm/wiki" target="_blank" class="articles__link">
            <div class="articles__content articles__content--lhs">
              <h2 class="articles__title">
                {{ $t("resources.checkdocs") }}
              </h2>
              <div class="articles__footer">
                <p>{{ $t("resources.docs") }}</p>
              </div>
            </div>
            <div
              class="articles__content articles__content--rhs"
              aria-hidden="true"
            >
              <h2 class="articles__title">
                {{ $t("resources.checkdocs") }}
              </h2>
              <div class="articles__footer">
                <p>{{ $t("resources.docs") }}</p>
              </div>
            </div>
          </a>
        </li>
         <li
          v-scrollanimation
          class="articles__article"
          style="--animation-order: 3"
        >
          <a href="https://github.com/BeckmannArmin/laravel-conForm/issues" target="_blank" class="articles__link">
            <div class="articles__content articles__content--lhs">
              <h2 class="articles__title">
                {{ $t('resources.updates') }}
              </h2>
              <div class="articles__footer">
                <p> {{ $t('resources.fixes') }}</p>
              </div>
            </div>
            <div
              class="articles__content articles__content--rhs"
              aria-hidden="true"
            >
              <h2 class="articles__title">
              {{ $t('resources.updates') }}
              </h2>
              <div class="articles__footer">
                <p> {{ $t('resources.fixes') }}</p>
              </div>
            </div>
          </a>
        </li>
        <li
          v-scrollanimation
          class="articles__article"
          style="--animation-order: 2"
        >
          <a href="https://github.com/BeckmannArmin/laravel-conForm/pulls" target="_blank" class="articles__link">
            <div class="articles__content articles__content--lhs">
              <h2 class="articles__title">
                {{ $t("resources.improve") }}
              </h2>
              <div class="articles__footer">
                <p>{{ $t("resources.contribute") }}</p>
              </div>
            </div>
            <div
              class="articles__content articles__content--rhs"
              aria-hidden="true"
            >
              <h2 class="articles__title">
                {{ $t("resources.improve") }}
              </h2>
              <div class="articles__footer">
                <p>{{ $t("resources.contribute") }}</p>
              </div>
            </div>
          </a>
        </li>
      </ol>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

.dark .resources {
  background-color: #121212;
  background: none !important;

  .articles__content {
    background-color: #20232a !important;
}

.title-msts {
    color: #ebedf0 !important
}

.articles__title {
    color: #ebedf0 !important
}

.articles__footer {
  p {
    color: #cc68d8;
    font-weight: 500 !important;
  }
}

.articles__article:before {
    border: 1px dashed #f3f3f3;
    background-image: repeating-linear-gradient(-24deg, transparent, transparent 1px, #f3f3f3 1px, #f3f3f3 1px);
}

.articles__link:hover .articles__content--rhs {
    background-color: #101114 !important;
    transform: rotateY(-50deg);
}

}
.resources {
   background: url('../../../assets/feature-background.svg') no-repeat;
  background-position: bottom;
  background-size: cover ;
}
.container,
.row {
  padding: 0 1rem;
  width: 100%;

  .headline-resources {
    margin-bottom: 2rem;

    .title-msts {
      max-width: 500px;
      font-size: 2rem;
      line-height: 1.5;
      word-spacing: -0.25rem;
      font-weight: 600;
      color: #4a4a4a;
    }
  }
}
@media screen and (min-width: 576px) {
  .title-msts {
    font-size: 2.8rem;
  }
}
.container {
  margin: 0 auto;
}

.howstart-area {
  background: #f7faff;
}

.articles {
  display: grid;
  grid-row-gap: calc(8px * 8);
  grid-column-gap: calc(8px * 6);
  grid-template-columns: repeat(auto-fit, minmax(calc(8px * 35), 1fr));
  justify-items: center;
}

.articles__article {
  cursor: pointer;
  display: block;
  position: relative;
  perspective: 1000px;
  animation-name: animateIn;
  animation-duration: 0.35s;
  animation-delay: calc(var(--animation-order) * 100ms);
  animation-fill-mode: both;
  animation-timing-function: ease-in-out;
}

.articles__article:before {
  content: "";
  position: absolute;
  top: calc(8px * -2);
  left: calc(8px * -2);
  border: 2px dashed #fff;
  background-image: repeating-linear-gradient(
    -24deg,
    transparent,
    transparent 4px,
    rgba(255, 255, 255, 0.5) 0,
    rgba(255, 255, 255, 0.5) 5px
  );
  z-index: -1;
}

.articles__article,
.articles__article:before {
  width: 350px;
  height: 350px;
}

.articles__link {
  background-color: #5c55ba;
  border: 2px solid #fff;
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 22px;
}

.articles__link:after {
  content: "";
  position: absolute;
  top: 50%;
  right: calc(8px * 3);
  width: calc(8px * 2);
  height: calc(8px * 2);
  margin-top: calc(8px * -1);
  clip-path: polygon(75% 0, 100% 50%, 75% 100%, 0 100%, 25% 50%, 0 0);
  -webkit-clip-path: polygon(75% 0, 100% 50%, 75% 100%, 0 100%, 25% 50%, 0 0);
  background-color: #fff;
  opacity: 0;
  transition: opacity 0.5s ease-in, transform 0.3s ease-in-out 0ms;
}

.articles__content {
  background-color: #fff;
  color: #1a1a1a;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: calc(8px * 2);
  display: flex;
  flex-direction: column;
  border: 2px solid rgba(0, 0, 0, 0.125);
  border-radius: 22px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.articles__content--lhs {
  clip-path: polygon(0 0, 51% 0, 51% 100%, 0 100%);
  -webkit-clip-path: polygon(0 0, 51% 0, 51% 100%, 0 100%);
}

.articles__content--rhs {
  clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);
  -webkit-clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);
  transition: transform 0.5s ease-in-out, background-color 0.4s ease-in-out;
}

.articles__title {
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.5;
  margin: 0 0 1rem 0;
  color: #7a7780;
}

.articles__footer {
  margin-top: auto;
  font-size: calc(8px * 2);
  line-height: calc(8px * 2);
  display: flex;
  justify-content: space-between;
  color: #5c55ba;

  p {
    font-size: calc(8px * 2);
    font-weight: 600;
  }
}

.articles__link:hover .articles__content--rhs {
  background-color: #f5f5f5;
  transform: rotateY(-50deg);
}

.articles__link:hover:after {
  opacity: 1;
  transform: translateX(calc(8px * 1.5));
  transition: opacity 0.5s ease-in, transform 0.3s ease-in-out 0.25s;
}
</style>