<template>
    <div id="slide-transition-explained">
        <h1>Transition parts</h1>

        <h2>A transition is composed by 4 parts</h2>

        <div id="transition-parts">
            <p :style="[$parent.showStep(1) ? { opacity: 1 } : { opacity: 0 }]"><span></span> transition-property</p>

            <p :style="[$parent.showStep(2) ? { opacity: 1 } : { opacity: 0 }]"><span></span> transition-duration</p>

            <p :style="[$parent.showStep(3) ? { opacity: 1 } : { opacity: 0 }]"><span></span> transition-timing-function</p>

            <p :style="[$parent.showStep(4) ? { opacity: 1 } : { opacity: 0 }]"><span></span> transition-delay</p>
        </div>
    </div>
</template>

<style scoped>
    #transition-parts {
        width: 36%;
        margin: 100px auto 0;
        text-align: left;
    }
    p {
        font-size: 3em;
        margin-top: 60px;
    }
    div p > span {
        display: inline-block;
        background-color: #ca5b10;
        width: 30px;
        height: 30px;
        padding-right: 20px;
    }
</style>
