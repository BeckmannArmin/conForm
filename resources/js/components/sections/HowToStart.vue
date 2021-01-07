<template>
  <section id="howstart" class="howstart-area ptb-90 text-center pt-16">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="sec-title text-center">
            <h2 class="title is-2">
              {{ $t("howtostart.howstart") }}
            </h2>
            <div class="title-lead pt-4">
              {{ $t("howtostart.whatisit") }}
            </div>
            <div class="title-lead pt-2">
              {{ $t("howtostart.webapp") }}
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="cards">
          <div class="cards-container">
            <div class="cards-wrapper">
              <div v-scrollanimation class="card col row-l">
                <div class="cards-header">
                  <img src="../../../assets/idea.svg" />
                </div>
                <div class="cards-body text-left">
                  <span class="item-pink">{{
                    $t("howtostart.headings.createacc")
                  }}</span>
                  <p>{{ $t("howtostart.createacc") }}</p>
                </div>
              </div>
              <div v-scrollanimation class="card col row-m">
                <div class="cards-header">
                  <img src="../../../assets/brainstorm.svg" />
                </div>
                <div class="cards-body text-left">
                  <span class="item-orange">{{
                    $t("howtostart.headings.viewload")
                  }}</span>
                  <p>{{ $t("howtostart.viewdownload") }}</p>
                </div>
              </div>
              <div v-scrollanimation class="card col row-r">
                <div class="cards-header">
                  <img src="../../../assets/colloboration.svg" />
                </div>
                <div class="cards-body text-left">
                  <span class="item-green">{{
                    $t("howtostart.headings.indi")
                  }}</span>
                  <p>
                    {{ $t("howtostart.customize") }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@media (max-width: 1024px) {
  .cards-wrapper {
    grid-template-columns: 1fr !important;
    grid-row-gap: 7.8125vmin;
  }
}

.dark {
  .howstart-area {
    background: #20232a !important;

    .sec-title {
      .title {
        color: #ebedf0 !important;
      }
    }

    .card {
      background-color: #20232a;
      box-shadow: 0 1px 2px rgba(0, 0, 1, 0.9);
    }

    .cards-body {
      color: #ebedf0;
    }
  }
}

.howstart-area {
  background: url("../../../assets/feature-background.svg") no-repeat;
  background-size: cover;
}

.cards-action {
  margin-top: 10px;
}

.cards-wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 50px;
}

.item-pink {
  color: #cc68d8;
}
.item-orange {
  color: #fd804e;
}

.item-green {
  color: #40ac76;
}

.cards-body {
  font-weight: 500;
  font-size: 22px;
  line-height: 31px;
  color: #7a7780;
  letter-spacing: 0;
}

.cards-container .card {
  background-color: #fff;
  border-radius: calc(0.4rem * 2);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  padding: 25px 27px 28px !important;
}

.cards-header {
  display: flex;
  justify-content: center;
}

.cards-container .col {
  max-width: 100%;
  flex: 1 0;
  margin-left: 0;
}

.cards-container {
  max-width: 1140px;
  margin: 0 auto;
}

.cards-container .col {
  max-width: 100%;
}

.cards-header img {
  height: 125px;
  max-width: 100%;
  margin: 20px 15px;
}

.row-l,
.row-m,
.row-r {
  display: flex;
  flex-flow: column;
}

.cards {
  margin-bottom: 110px;
}

.cards-container {
  display: flex;
  justify-content: center;
}

.container,
.row .col {
  padding: 0 1rem;
  width: 100%;
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

.howstart-area {
  .ptb-90 {
    padding: 90px 0 90px 0;
  }
  .container {
    .row {
      .sec-title {
        margin: 0 auto 40px;

        .title {
          color: #4a4a4a;
          font-size: 2rem;
          font-weight: 600;
          line-height: 1.125;
        }
        .is-2 {
          font-size: 2.5rem;
        }

        .title-lead {
          font-size: 1.35rem;
          font-weight: 600;
          line-height: 1.125;
          color: #6c72ae;
        }
      }
    }
  }
}
</style>