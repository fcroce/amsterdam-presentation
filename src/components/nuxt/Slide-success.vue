<template>
    <div id="slide-success">
        <h1>Easy start</h1>

        <h2 :style="[$parent.showStep(1) ? { opacity: 1 } : { opacity: 0 }]">With Nuxt.js we can easily create a new project and start building our web page, no need to waste time in configurations</h2>

        <img src="@/assets/nuxt/success.gif" :style="[$parent.showStep(1) ? { opacity: 1 } : { opacity: 0 }]">
    </div>
</template>

<style scoped>
    img {
        margin: 120px auto;
        width: 40%;
    }
</style>
