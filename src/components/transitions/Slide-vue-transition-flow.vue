<template>
    <div id="slide-vue-transition-flow">
        <h1>Transition flow</h1>

        <h2>The <b>6</b> CSS states explained in detail (vuejs.org)</h2>

        <img src="@/assets/transitions/flow.png" :style="[$parent.showStep(1) ? { opacity: 1 } : { opacity: 0 }]">
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
