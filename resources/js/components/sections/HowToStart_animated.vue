<template>
  <section id="howstart" class="howstart-area pb-16 pt-16">
    <div class="container d-flex justify-content-between">
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
      <div class="cards-wrapper d-flex justify-content-around">
      <div v-scrollanimation class="card">
        <div class="face face1 d-flex justify-content-center item-orange">
          <div class="content">
            <img src="../../../assets/brainstorm.svg" />
            <h3>{{ $t("howtostart.headings.viewload") }}</h3>
          </div>
        </div>
        <div class="face face2 d-flex justify-content-center">
          <div class="content">
            <p>
              {{ $t("howtostart.viewdownload") }}
            </p>
          </div>
        </div>
      </div>
      <div v-scrollanimation class="card">
        <div class="face face1 d-flex justify-content-center item-pink">
          <div class="content">
            <img src="../../../assets/idea.svg" />
            <h3>{{ $t("howtostart.headings.indi") }}</h3>
          </div>
        </div>
        <div class="face face2 d-flex justify-content-center">
          <div class="content">
            <p>
              {{ $t("howtostart.customize") }}
            </p>
          </div>
        </div>
      </div>
      <div v-scrollanimation class="card">
        <div class="face face1 d-flex justify-content-center item-green">
          <div class="content">
            <img src="../../../assets/rocket_launch.png" />
            <h3>{{ $t("howtostart.headings.createacc") }}</h3>
          </div>
        </div>
        <div class="face face2 d-flex justify-content-center">
          <div class="content">
            <p>{{ $t("howtostart.createacc") }}</p>
            <router-link to="register">
              {{ $t("howtostart.headings.signup") }}
            </router-link>
          </div>
        </div>
      </div>
      </div>
      </div>
  </section>
</template>

<style lang="scss" scoped>
$pr-border-radius: 20px;
$pr-background-dark: #20232a;
$pr-background-light: #f5f5f5;
$pr-font-dark: #ebedf0;
$pr-font-light: #4a4a4a;

$itemColors: (
  "item-orange": #fd804e,
  "item-pink": #cc68d8,
  "item-green": #40ac76,
);

@each $itemColor, $i in $itemColors {
  .card:hover .face.face1.#{$itemColor} {
    background: $i !important;
  }
}

.dark {
  .howstart-area {
    background: none;

    .title.is-2 {
      color: $pr-font-dark !important;
    }

    .card:hover {
      .face.face1 {
        .content {
          opacity: 1 !important;
        }
      }
    }

    .face.face1 {
      background: $pr-background-dark !important;

      .content {
        opacity: 1 !important;
        h3 {
          color: $pr-font-dark !important;
        }
      }
    }

    .face.face2 {
      background: $pr-background-dark !important;

         p {
            color: $pr-font-dark !important;
            font-weight: 400 !important;
          }
          a {
            color: $pr-font-dark !important;
            font-weight: 400 !important;
          }
    }
  }
}

.howstart-area {
  background: url("../../../assets/feature-background.svg") no-repeat;
  background-size: cover;

  .container {
    position: relative;
    flex-flow: column;

    .row {
      .sec-title {
        margin: 0 auto 40px;

        .title {
          color: #4a4a4a;
          font-size: 1.5rem;
          font-weight: 600;
          line-height: 1.125;
        }
        .is-2 {
          font-size: 2rem;
        }

        .title-lead {
          font-size: 1.35rem;
          font-weight: 600;
          line-height: 1.125;
          color: #6c72ae;
        }
      }
    }

    .cards-wrapper {
        flex-wrap: wrap;
    }

    .card {
      position: relative;
      cursor: pointer;
      background: none;
      border: none;

      .face {
        width: 300px;
        height: 200px;
        transition: 0.5s;
      }

      .face.face1 {
        position: relative;
        background: $pr-background-light;
        align-items: center;
        z-index: 1;
        transform: translateY(100px);
        border-radius: $pr-border-radius;

        .content {
          display: flex;
          flex-flow: column;
          align-items: center;
          opacity: 0.8;
          transition: 0.5s;

          img {
            max-width: 100px;
          }

          h3 {
            margin: 10px 0 0;
            padding: 0;
            color: $pr-font-light;
            text-align: center;
            font-size: 1.5em;
          }
        }
      }

      .face.face2 {
        position: relative;
        background: #fff;
        align-items: center;
        padding: 20px;
        box-sizing: border-box;
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
        transform: translateY(-100px);
        border-radius: $pr-border-radius;

        .content {
          p {
            margin: 0;
            padding: 0;
            font-weight: 600;
            color: $pr-font-light;
          }
          a {
            margin: 15px 0 0;
            display: inline-block;
            text-decoration: none;
            font-weight: 900;
            color: #333;
            padding: 5px;
            border: 1px solid #333;
          }

          a:hover {
            background: #333;
            color: #fff;
          }
        }
      }
    }

    .card:hover {
      .face.face1 {
        transform: translateY(0);
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;

        .content {
          opacity: 1;

          h3 {
            color: #fff !important;
          }
        }
      }
    }

    .card:hover .face.face2 {
      transform: translateY(0);
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
      border-bottom-left-radius: $pr-border-radius;
      border-bottom-right-radius: $pr-border-radius;
    }
  }
}
</style>
