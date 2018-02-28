<template>
    <div id="slide-deployment-nuxtjs-org">
        <h1>Fun fact about Static Generated deployment</h1>

        <h2>That's how nuxtjs.org deploys on GitHub Pages</h2>

        <div :style="[$parent.showStep(1) ? { opacity: 1 } : { opacity: 0 }]">
            <img id="nuxtjs-screenshot" src="@/assets/nuxt/deployment-nuxtjs-org.png">

            <img src="@/assets/nuxt/mario-high-five.gif">
        </div>
    </div>
</template>

<style scoped>
#nuxtjs-screenshot {
  display: block;
  margin: 60px auto;
  -webkit-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
}
</style>
