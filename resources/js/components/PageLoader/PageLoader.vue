<template>
    <div class="pageloader" v-if="loaded">
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
    </div>
</template>

<script>
export default {
    props: {
        loaded: Boolean
    }
}
</script>

<style lang="scss" scoped>
    $colors: #8CC271, #69BEEB, #F5AA39, #E9643B;

    .pageloader {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color:rgba($color: #333, $alpha: 0.5);
        z-index: 9999;
    }

    .cube {
        width: 40px;
        height: 40px;
        margin-right: 10px;

        @for $index from 1 through length($colors) {
            &:nth-child(#{$index}) {
                background-color: nth($list: $colors, $n: $index);
            }
        }

        &:first-child {
            animation: left 1s infinite;
        }

         &:last-child {
            animation: right 1s infinite .5s;
        }
    }

    @keyframes left {
        40% {
            transform: translateX(-60px);
        }
        50% {
            transform: translateX(0);
        }
    }

     @keyframes right {
        40% {
            transform: translateX(60px);
        }
        50% {
            transform: translateX(0);
        }
    }
</style>