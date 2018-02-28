<template>
    <div id="slide-success">
        <h1>That's cool</h1>

        <h2 :style="[$parent.showStep(1) ? { opacity: 1 } : { opacity: 0 }]">Using native transitions, SASS, Vue transitions and hooks we can easily add cool effects to our pages</h2>

        <img src="@/assets/transitions/success.gif" :style="[$parent.showStep(1) ? { opacity: 1 } : { opacity: 0 }]">
    </div>
</template>

<style scoped>
    img {
        margin: 120px auto;
        width: 40%;
    }
</style>
