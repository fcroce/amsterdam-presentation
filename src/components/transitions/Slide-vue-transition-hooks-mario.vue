<template>
    <div id="slide-vue-transition-hooks-mario">
        <h1>Transition hooks</h1>

        <h2>Now Imagine if we could hook the action to a <b>JavaScript</b> method</h2>

        <img src="@/assets/transitions/hook.png" :style="[$parent.showStep(1) ? { opacity: 1 } : { opacity: 0 }]">
    </div>
</template>

<style scoped>
    b {
        color: #8c3800;
    }

    img {
        -webkit-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);
        border-radius: 3px;
        margin: 60px auto;
    }
</style>