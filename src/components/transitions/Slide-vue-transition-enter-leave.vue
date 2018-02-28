<template>
    <div id="slide-vue-transition-enter-leave">
        <h1>Enter / Leave Transitions</h1>

        <h2>Vue provides <b>6</b> default CSS states</h2>

        <div class="clearfix" :style="[$parent.showStep(1) ? { opacity: 1 } : { opacity: 0 }]">
            <div id="transition-states">
                <p><span></span> v-enter</p>

                <p><span></span> v-enter-active</p>

                <p><span></span> v-enter-to</p>

                <p><span></span> v-leave</p>

                <p><span></span> v-leave-active</p>

                <p><span></span> v-leave-to</p>
            </div>

            <div id="transition-right-notes">
                <p>Where <b>"v"</b> is the default name if no <b>name=&quot;...&quot;</b> is provided</p>

                <div id="transition-example" class="blackbox" :style="[$parent.showStep(2) ? { opacity: 1 } : { opacity: 0 }]">
                    <div class="code">
                        <span>&lt;transition name=&quot;fade&quot; &gt;</span><br />
                        <span><i class="tab"></i> &lt;div&gt;&lt;/div&gt;</span><br />
                        <span>&lt;/transition&gt;</span>/>
                    </div>
                </div>
            </div>
        </div>

        <div class="blackbox" :style="[$parent.showStep(3) ? { opacity: 1 } : { opacity: 0 }]">
            <div class="code">
                <span>.fade-enter-active, .fade-leave-active {</span><br />
                  <span><i class="tab"></i> transition: opacity 250ms;</span><br />
                <span>}</span><br />
                <span>.fade-enter, .fade-leave-to {</span><br />
                  <span><i class="tab"></i> opacity: 0;</span><br />
                <span>}</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
b {
  color: #8c3800;
}

#transition-states {
  float: left;
  text-align: left;
  width: 15%;
  margin: 60px 0 0 20%;
}
#transition-states p {
  font-size: 1.8em;
}
#transition-right-notes {
  float: left;
  width: 55%;
  margin: 60px 0 0 100px;
}
#transition-states p > span {
  display: inline-block;
  background-color: #ca5b10;
  width: 30px;
  height: 30px;
  margin-right: 20px;
  float: left;
}

#transition-example {
  width: 65%;
  margin: 60px auto;
}
</style>
