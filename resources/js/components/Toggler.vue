<template>
    <div class="toggle-wrapper">
        <label class="toggle">
            <input 
            type="checkbox" 
            :checked="(mode === 'dark') ? 'checked' : false" 
            @change="$emit('toggle')"
            />
            <span class="toggler round">
                <div class="toggler-left">
                  <span>🌞</span>
                </div>
                <div class="toggler-right">
                    <span>🌙</span>
                </div>
            </span>
        </label>
    </div>
</template>

<script>
export default {
    props: ['mode']
}
</script>

<style lang="scss" scoped>
.toggle {
    position: relative;
    display: inline-block;
    width: 75px;
    height: 34px;
}

.toggle input {
    opacity: 0;
    width: 0;
    height: 0;
}

.toggler {
    position: absolute;
    cursor: pointer;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: #15202B;
    -webkit-transition: 0.4s;
    transition: 0.4s;
}

.toggler:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background: #FFF;
    -webkit-transition: 0.4s;
    transition: 0.4s;
}

input:checked + .toggler {
    background: #4d4d4d;

}

input:focus + .toggler {
    box-shadow: 0 0 2px #2196F3;
}
input:checked + .toggler:before {
    -webkit-transform: translateX(41px);
    -ms-transform: translateX(41px);
    transform: translateX(41px);
}

.toggler.round {
    border-radius: 24px;
    background: #4d4d4d;

    .toggler-left, .toggler-right {
        height: 10px;
        top: 0;
        bottom: 0;
        margin: auto 0;
        position: absolute;
    }

    .toggler-left {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 14px;
        left: 8px;
        opacity: 0;
        transition: opacity .25s;
    }

    .toggler-right {
        width: 10px;
        right: 10px;
    }

    .toggler-right {
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 1;
        transition: opacity .25s;
    }
}
.toggler.round:before {
    border-radius: 50%
}

.dark {
    .toggler.round {
        .toggler-left {
            opacity: 1;
            transition: opacity .25s;
        }
        .toggler-right {
            opacity: 0;
        }
    }
}
</style>