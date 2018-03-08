<template>
    <div id="slide-transition-vs-animation">
        <h1>Transition VS Animation</h1>

        <h2>Too many people confuse CSS <b>transition</b> and <b>animation</b></h2>

        <h2 class="section" :style="[$parent.showStep(1) ? { opacity: 1 } : { opacity: 0 }]">Transition</h2>

        <p :style="[$parent.showStep(1) ? { opacity: 1 } : { opacity: 0 }]">It's the process of changing one state to another based on a condition (in this case <b>time</b>)</p>

        <p :style="[$parent.showStep(2) ? { opacity: 1 } : { opacity: 0 }]">It's a form of animation</p>

        <h2 class="section" :style="[$parent.showStep(3) ? { opacity: 1 } : { opacity: 0 }]">Animation (CSS)</h2>

        <p :style="[$parent.showStep(3) ? { opacity: 1 } : { opacity: 0 }]">It's the process of animate an element using <b>frames</b></p>

        <p :style="[$parent.showStep(4) ? { opacity: 1 } : { opacity: 0 }]">To create an animation we need to provide some keyframes</p>

        <div class="blackbox" :style="[$parent.showStep(5) ? { opacity: 1 } : { opacity: 0 }]">
            <div class="code">
                <span>@keyframes example {</span><br />
                    <span><i class="tab"></i> from {background-color: black;}</span><br />
                    <span><i class="tab"></i> to {background-color: white;}</span><br />
                <span>}</span><br />
                <br />
                <span>div {</span><br />
                    <span><i class="tab"></i> background-color: red;</span><br />
                    <span><i class="tab"></i> animation-name: example;</span><br />
                    <span><i class="tab"></i> animation-duration: 4s;</span><br />
                <span>}</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
    b {
        color: #8c3800;
    }

    .section {
        margin-top: 30px;
    }

    .blackbox {
        width: 50%;
        margin: 60px auto 0;
    }
</style>
