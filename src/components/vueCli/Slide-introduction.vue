<template>
    <div id="slide-introduction">
        <h1>Vue CLI</h1>

        <h2>What's new in vue-cli 3.0.0-Beta.1</h2>

        <img src="@/assets/vueCli/vue-cli-help.png" :style="[$parent.showStep(1) ? { opacity: 1 } : { opacity: 0 }]" />

        <div>
            <p :style="[$parent.showStep(2) ? { opacity: 1 } : { opacity: 0 }]"><span></span> New interface</p>

            <p :style="[$parent.showStep(3) ? { opacity: 1 } : { opacity: 0 }]"><span></span> Plugin support</p>

            <p :style="[$parent.showStep(4) ? { opacity: 1 } : { opacity: 0 }]"><span></span> Interactive</p>
        </div>
    </div>
</template>

<style scoped>
    img {
        margin: 30px auto;
    }

    li {
        opacity: 0;
        -webkit-transition: all 250ms ease;
        -moz-transition: all 250ms ease;
        -o-transition: all 250ms ease;
        transition: all 250ms ease;
    }

    div {
        margin-top: 30px;
    }
    div p {
        font-size: 3em;
        display: inline-block;
        margin-right: 30px;
    }
    div p > span {
        display: inline-block;
        background-color: #ca5b10;
        width: 30px;
        height: 30px;
        padding-right: 20px;
    }
</style>