<template>
    <div id="slide-deployment">
        <h1>Deployment</h1>

        <h2>Nuxt offers <b>3</b> different ways to render your pages</h2>

        <div id="deployment-options">
            <div :style="[$parent.showStep(1) ? { opacity: 1 } : { opacity: 0 }]">
                <p><span></span> Server Rendered (Universal SSR)</p>

                <p>Development server with hot-reloading and <b>Vue Server Renderer</b> configured to automatically server-render your application</p>
            </div>

            <div :style="[$parent.showStep(2) ? { opacity: 1 } : { opacity: 0 }]">
                <p><span></span> Single Page Applications (SPA)</p>

                <p>If you prefer a SPA website you can run the server using:</p>

                <p><b>yarn run nuxt --spa</b></p>

                <p>it gives you a powerful SPA deployment mechanism without the need to use a Node.js runtime or any special server handling</p>
            </div>

            <div :style="[$parent.showStep(3) ? { opacity: 1 } : { opacity: 0 }]">
                <p><span></span> Static Generated (Pre Rendering)</p>

                <p>If you prefer a SPA website you can run the server using:</p>

                <p><b>yarn generate</b></p>

                <p>When building your application, it will generate the HTML for every one of your routes and store it in a file</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
#deployment-options {
  margin: 55px auto;
  width: 45%;
  text-align: left;
}
#deployment-options > div {
  margin-bottom: 60px;
}
#deployment-options p:first-child {
  font-size: 3em;
}
#deployment-options p:first-child > span {
  display: inline-block;
  background-color: #ca5b10;
  width: 30px;
  height: 30px;
  padding-right: 20px;
}
b {
  color: #8c3800;
}
</style>
