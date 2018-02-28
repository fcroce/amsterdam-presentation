<template>
    <div id="slide-make-cool-animations">
        <h1>Enjoy</h1>

        <h2 :style="[$parent.showStep(1) ? { opacity: 1 } : { opacity: 0 }]">Now we have all the tools to create cool animations!</h2>

        <img src="@/assets/transitions/cool-animations.gif" :style="[$parent.showStep(1) ? { opacity: 1 } : { opacity: 0 }]">
    </div>
</template>

<style scoped>
    img {
        margin: 120px auto;
        width: 40%;
    }
</style>
