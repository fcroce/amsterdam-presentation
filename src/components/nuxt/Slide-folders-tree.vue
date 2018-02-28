<template>
    <div id="slide-folders-tree">
        <h1>Folders Tree</h1>

        <img src="@/assets/nuxt/folders-tree.png" :style="[$parent.showStep(1) ? { opacity: 1 } : { opacity: 0 }]">

        <div>
            <p :style="[$parent.showStep(2) ? { opacity: 1 } : { opacity: 0 }]"><span></span> Middleware</p>

            <p :style="[$parent.showStep(3) ? { opacity: 1 } : { opacity: 0 }]"><span></span> Pages</p>

            <p :style="[$parent.showStep(4) ? { opacity: 1 } : { opacity: 0 }]"><span></span> Components</p>

            <p :style="[$parent.showStep(5) ? { opacity: 1 } : { opacity: 0 }]"><span></span> .Nuxt</p>
        </div>
    </div>
</template>

<style scoped>
img {
  margin: 40px auto;
}

div {
  margin-top: 30px;
}
div p {
  font-size: 3em;
  display: inline-block;
  margin-right: 30px;
}
div p > span {
  display: inline-block;
  background-color: #ca5b10;
  width: 30px;
  height: 30px;
  padding-right: 20px;
}
</style>
