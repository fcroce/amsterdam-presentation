<template>
    <div id="slide-vue-transition">
        <h1>Vue Transitions</h1>

        <div class="quote">
            <p>Vue provides a transition wrapper component, allowing you to add entering/leaving transitions</p>
            <p>vuejs.org</p>
        </div>

        <h2 :style="[$parent.showStep(1) ? { opacity: 1 } : { opacity: 0 }]">Context</h2>

        <div id="transition-context" :style="[$parent.showStep(2) ? { opacity: 1 } : { opacity: 0 }]">
            <p><span></span> Conditional rendering (using v-if)</p>

            <p><span></span> Conditional display (using v-show)</p>

            <p><span></span> Dynamic components</p>

            <p><span></span> Component root nodes</p>
        </div>

        <h2 :style="[$parent.showStep(3) ? { opacity: 1 } : { opacity: 0 }]">How does it work?</h2>

        <div id="transition-example" class="blackbox" :style="[$parent.showStep(4) ? { opacity: 1 } : { opacity: 0 }]">
            <div class="code">
                <span>&lt;transition&gt;</span><br />
                    <span><i class="tab"></i> &lt;div&gt;&lt;/div&gt;</span><br />
                <span>&lt;/transition&gt;</span>/>
            </div>
        </div>
    </div>
</template>

<style scoped>
#transition-context {
  text-align: left;
  width: 32%;
  margin: 60px auto;
}
#transition-context p {
  font-size: 1.8em;
}
#transition-context p > span {
  display: inline-block;
  background-color: #ca5b10;
  width: 30px;
  height: 30px;
  margin-right: 20px;
  float: left;
}

#transition-example {
  width: 28%;
  margin: 60px auto;
}
</style>
