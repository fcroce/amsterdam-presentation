<template>
    <div id="slide-first-application">
        <h1>First Application</h1>

        <h2># vue create MyFirstApplication</h2>

        <img src="@/assets/vueCli/vue-cli-first-app-1.png" :style="[$parent.showStep(1) ? { opacity: 1 } : { opacity: 0 }]" />

        <h2 :style="[$parent.showStep(2) ? { opacity: 1 } : { opacity: 0 }]">Interactive UI if we want to manually select features</h2>

        <img src="@/assets/vueCli/vue-cli-first-app-2.png" :style="[$parent.showStep(3) ? { opacity: 1 } : { opacity: 0 }]" />
    </div>
</template>

<style scoped>
    img {
        display: block;
        margin: 60px auto;
        width: 65%;
    }
</style>