<template>
    <div id="slide-introduction">
        <h1>Nuxt</h1>

        <div class="quote">
            <p>Nuxt.js is a framework for creating Universal Vue.js Applications.</p>
            <p>nuxtjs.org</p>
        </div>

        <h2 :style="[$parent.showStep(1) ? { opacity: 1 } : { opacity: 0 }]">A Nuxt.js project starts with a list of useful packages pre-configured</h2>

        <div id="nuxt-packages" :style="[$parent.showStep(2) ? { opacity: 1 } : { opacity: 0 }]">
            <p><span></span> Vue 2</p>

            <p><span></span> Vue Router</p>

            <p><span></span> Vuex (included only when using the store option)</p>

            <p><span></span> Vue Server Renderer (excluded when using mode: 'spa')</p>

            <p><span></span> vue-meta</p>
        </div>

        <h1 :style="[$parent.showStep(3) ? { opacity: 1 } : { opacity: 0 }]">Installation</h1>

        <div :style="[$parent.showStep(4) ? { opacity: 1 } : { opacity: 0 }]">
            <h2><b>#</b> npm install nuxt</h2>

            <p>OR</p>

            <h2><b>#</b> yarn add nuxt</h2>
        </div>
    </div>
</template>

<style scoped>
b {
  color: #8c3800;
}

#nuxt-packages {
  text-align: left;
  width: 45%;
  margin: 60px auto;
}
#nuxt-packages p {
  font-size: 1.8em;
}
#nuxt-packages p > span {
  display: inline-block;
  background-color: #ca5b10;
  width: 30px;
  height: 30px;
  margin-right: 20px;
  float: left;
}
</style>
