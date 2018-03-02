<template>
    <div id="slide-vue-transition-hooks-all">
        <h1>Transition hooks</h1>

        <h2>Overview</h2>

        <div class="blackbox" :style="[$parent.showStep(1) ? { opacity: 1 } : { opacity: 0 }]">
            <div class="code">
                <span><i class="tab"></i> methods: {</span><br />
                    <span><i class="tab"></i><i class="tab"></i> beforeEnter: function (el) {</span><br />
                        <span><i class="tab"></i><i class="tab"></i><i class="tab"></i> // ...</span><br />
                    <span><i class="tab"></i><i class="tab"></i> },</span><br />
                    <br />
                    <span><i class="tab"></i><i class="tab"></i> // the done callback is optional when</span><br />
                    <span><i class="tab"></i><i class="tab"></i> // used in combination with CSS</span><br />
                    <span><i class="tab"></i><i class="tab"></i> enter: function (el, done) {</span><br />
                        <span><i class="tab"></i><i class="tab"></i><i class="tab"></i> // ...</span><br />
                        <span><i class="tab"></i><i class="tab"></i><i class="tab"></i> done()</span><br />
                    <span><i class="tab"></i><i class="tab"></i> },</span><br />
                    <br />
                    <span><i class="tab"></i><i class="tab"></i> afterEnter: function (el) {</span><br />
                        <span><i class="tab"></i><i class="tab"></i><i class="tab"></i> // ...</span><br />
                    <span><i class="tab"></i><i class="tab"></i> },</span><br />
                    <br />
                    <span><i class="tab"></i><i class="tab"></i> enterCancelled: function (el) {</span><br />
                        <span><i class="tab"></i><i class="tab"></i><i class="tab"></i> // ...</span><br />
                    <span><i class="tab"></i><i class="tab"></i> },</span><br />
                    <br />
                    <span><i class="tab"></i><i class="tab"></i> beforeLeave: function (el) {</span><br />
                        <span><i class="tab"></i><i class="tab"></i><i class="tab"></i> // ...</span><br />
                    <span><i class="tab"></i><i class="tab"></i> },</span><br />
                    <br />
                    <span><i class="tab"></i><i class="tab"></i> // the done callback is optional when</span><br />
                    <span><i class="tab"></i><i class="tab"></i> // used in combination with CSS</span><br />
                    <span><i class="tab"></i><i class="tab"></i> leave: function (el, done) {</span><br />
                        <span><i class="tab"></i><i class="tab"></i><i class="tab"></i> // ...</span><br />
                        <span><i class="tab"></i><i class="tab"></i><i class="tab"></i> done()</span><br />
                    <span><i class="tab"></i><i class="tab"></i> },</span><br />
                    <br />
                    <span><i class="tab"></i><i class="tab"></i> afterLeave: function (el) {</span><br />
                        <span><i class="tab"></i><i class="tab"></i><i class="tab"></i> // ...</span><br />
                    <span><i class="tab"></i><i class="tab"></i> },</span><br />
                    <br />
                    <span><i class="tab"></i><i class="tab"></i> // leaveCancelled only available with v-show</span><br />
                    <span><i class="tab"></i><i class="tab"></i> leaveCancelled: function (el) {</span><br />
                        <span><i class="tab"></i><i class="tab"></i><i class="tab"></i> // ...</span><br />
                    <span><i class="tab"></i><i class="tab"></i> }</span><br />
                <span>}</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .code span {
      font-size: 1em;
    }
</style>
