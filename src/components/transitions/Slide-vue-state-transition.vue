<template>
    <div id="slide-vue-state-transition">
        <h1>State Transition</h1>

        <h2>Sometimes CSS alone isn't enough</h2>

        <div :style="[$parent.showStep(1) ? { opacity: 1 } : { opacity: 0 }]">
            <img id="tween-logo" src="@/assets/transitions/tweenlogo.png">

            <p>We can use a state transition library like Tween.js!<br />(or any other similar library)</p>
        </div>

        <p :style="[$parent.showStep(2) ? { opacity: 1 } : { opacity: 0 }]">I know.. the logo is horrible but that's the only one I could find in the rush</p>

        <div :style="[$parent.showStep(3) ? { opacity: 1 } : { opacity: 0 }]">
            <input v-model="number" type="number" step="20">
            <p>{{ animatedNumber }}</p>
        </div>

        <div class="blackbox"  :style="[$parent.showStep(4) ? { opacity: 1 } : { opacity: 0 }]">
            <div class="code">
                <span>number (newValue, oldValue) {</span><br />
                    <span><i class="tab"></i> const vm = this;</span><br />
                    <span><i class="tab"></i> let animationFrame;</span><br />
                    <span><i class="tab"></i> let animate = (time) => {</span><br />
                        <span><i class="tab"></i><i class="tab"></i> TWEEN.update(time);</span><br />
                        <span><i class="tab"></i><i class="tab"></i> animationFrame = requestAnimationFrame(animate);</span><br />
                    <span><i class="tab"></i> };</span><br />
                    <br />
                    <span><i class="tab"></i> let tweenObj = { tweeningNumber: oldValue };</span><br />
                    <span><i class="tab"></i> new TWEEN.Tween(tweenObj)</span><br />
                        <span><i class="tab"></i><i class="tab"></i> .easing(TWEEN.Easing.Quadratic.Out)</span><br />
                        <span><i class="tab"></i><i class="tab"></i> .to({ tweeningNumber: newValue }, 500)</span><br />
                        <span><i class="tab"></i><i class="tab"></i> .onUpdate(function () {</span><br />
                        <span><i class="tab"></i><i class="tab"></i><i class="tab"></i> vm.animatedNumber = tweenObj.tweeningNumber.toFixed(0);</span><br />
                        <span><i class="tab"></i><i class="tab"></i> })</span><br />
                        <span><i class="tab"></i><i class="tab"></i> .onComplete(function () {</span><br />
                        <span><i class="tab"></i><i class="tab"></i><i class="tab"></i> cancelAnimationFrame(animationFrame);</span><br />
                        <span><i class="tab"></i><i class="tab"></i> })</span><br />
                        <span><i class="tab"></i><i class="tab"></i> .start();</span><br />
                    <span><i class="tab"></i> animationFrame = requestAnimationFrame(animate);</span><br />
                <span>}</span>
            </div>
        </div>
    </div>
</template>

<script>
import TWEEN from "@tweenjs/tween.js";

export default {
  data() {
    return {
      number: 0,
      animatedNumber: 0
    };
  },
  watch: {
    number(newValue, oldValue) {
      const vm = this;
      let animationFrame;
      let animate = time => {
        TWEEN.update(time);
        animationFrame = requestAnimationFrame(animate);
      };

      let tweenObj = { tweeningNumber: oldValue };
      new TWEEN.Tween(tweenObj)
        .easing(TWEEN.Easing.Quadratic.Out)
        .to({ tweeningNumber: newValue }, 500)
        .onUpdate(function() {
          vm.animatedNumber = tweenObj.tweeningNumber.toFixed(0);
        })
        .onComplete(function() {
          cancelAnimationFrame(animationFrame);
        })
        .start();
      animationFrame = requestAnimationFrame(animate);
    }
  }
};
</script>

<style scoped>
#tween-logo {
  display: block;
  width: 140px;
  background-color: #cdcfcf;
  padding: 30px;
  margin: 60px auto;
  border-radius: 3px;
  -webkit-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);
}

input {
  color: #d3dce4;
  background: rgba(0, 0, 0, 0.85);
  padding: 6px 10px;
  border-radius: 3px;
  -webkit-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);
}

.blackbox {
  margin: 20px 120px;
}
.blackbox span {
  font-size: 1em;
}
</style>
