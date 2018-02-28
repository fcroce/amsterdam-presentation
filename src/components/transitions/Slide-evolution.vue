<template>
    <div id="slide-evolution">
        <h1>Evolution</h1>

        <h2 :style="[$parent.showStep(1) ? { opacity: 1 } : { opacity: 0 }]">Lets see how Vue.js can improve transitions</h2>

        <img src="@/assets/transitions/evolution.gif" :style="[$parent.showStep(1) ? { opacity: 1 } : { opacity: 0 }]">
    </div>
</template>

<style scoped>
    img {
        margin: 120px auto;
        width: 40%;
    }
</style>
