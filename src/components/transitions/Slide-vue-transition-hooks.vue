<template>
    <div id="slide-vue-transition-hooks">
        <h1>Transition hooks</h1>

        <h2>In fact it is possible thanks to Vue.js!</h2>

        <div class="blackbox" :style="[$parent.showStep(1) ? { opacity: 1 } : { opacity: 0 }]">
            <div class="code">
                <span>&lt;transition</span><br />
                        <span><i class="tab"></i> v-on:before-enter="beforeEnter"</span><br />
                        <span><i class="tab"></i> v-on:enter="enter"</span><br />
                        <span><i class="tab"></i> v-on:after-enter="afterEnter"</span><br />
                        <span><i class="tab"></i> v-on:enter-cancelled="enterCancelled"</span><br />
                        <br />
                        <span><i class="tab"></i> v-on:before-leave="beforeLeave"</span><br />
                        <span><i class="tab"></i> v-on:leave="leave"</span><br />
                        <span><i class="tab"></i> v-on:after-leave="afterLeave"</span><br />
                        <span><i class="tab"></i> v-on:leave-cancelled="leaveCancelled"</span><br />
                <span>&gt;</span><br />
                    <span>&lt;!-- ... --&gt;</span><br />
                <span>&lt;/transition&gt;</span>
            </div>
        </div>

        <h2 :style="[$parent.showStep(2) ? { opacity: 1 } : { opacity: 0 }]">
            In the <b>methods: { ... }</b> section of our component we could use something like
        </h2>

        <div class="blackbox" :style="[$parent.showStep(3) ? { opacity: 1 } : { opacity: 0 }]">
            <div class="code">
                <span>methods: {</span><br />
                    <span><i class="tab"></i> beforeEnter: function (el) {</span><br />
                    <span><i class="tab"></i><i class="tab"></i>  // ...</span><br />
                    <span><i class="tab"></i> },</span><br />
                <span>}</span>
            </div>
        </div>
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
