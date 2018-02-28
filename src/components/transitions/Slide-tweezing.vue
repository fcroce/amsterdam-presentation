<template>
    <div id="slide-tweezing">
        <h1>Tweezing</h1>

        <h2>So much code for a TWEEN, is thre a better way?</h2>

        <div :style="[$parent.showStep(1) ? { opacity: 1 } : { opacity: 0 }]">
            <p>This is a library from Eduardo San Martin Morote (Twitter: @posva)</p>

            <p><b>GitHub:</b> https://github.com/posva/vue-tweezing</p>
        </div>

        <div id="tweezing-example" class="clearfix">
            <div class="float-left" :style="[$parent.showStep(1) ? { opacity: 1 } : { opacity: 0 }]">
                <button @click="toggle">toggle ({{ value }})</button>
                <Tweezing :to="value" :tween="tween" :duration="duration">
                  <pre slot-scope="val">
    target: {{ value }}
    val: {{ val }}
                  </pre>
                </Tweezing>
                <Tweezing tween="tweenjs" :to="value" :duration="duration">
                    <template slot-scope="val">
                        <pre>
    target: {{ value }}
    val: {{ val }}
                        </pre>
                    </template>
                </Tweezing>
            </div>

            <div class="float-left" :style="[$parent.showStep(2) ? { opacity: 1 } : { opacity: 0 }]">
                <input type="number" v-model.number="value" />
                <input type="number" v-model.number="duration" />

                <Tweezing :to="object" tween="tweenjs" :duration="500">
                    <pre slot-scope="data">const myObject = {{ data }}</pre>
                </Tweezing>
                <br />
                <Tweezing :to="array" tween="tweenjs" :duration="500">
                    <pre slot-scope="data">const myArray = {{ data }}</pre>
                </Tweezing>
                <br />
                <Tweezing :to="value" tween="custom" :time="mouseXPer">
                    <pre slot-scope="data">Custom: {{ data }}</pre>
                </Tweezing>
            </div>
        </div>

        <div class="blackbox" :style="[$parent.showStep(2) ? { opacity: 1 } : { opacity: 0 }]">
            <div class="code">
                <span>&lt;Tweezing :to="object" tween="tweenjs" :duration="500"&gt;</span><br />
                    <span><i class="tab"></i> &lt;pre slot-scope="data"&gt;{{ data }}&lt;/pre&gt;</span><br />
                <span>&lt;/Tweezing&gt;</span><br />
                <br />
                <span>&lt;Tweezing :to="array" tween="tweenjs" :duration="500"&gt;</span><br />
                    <span><i class="tab"></i> &lt;pre slot-scope="data"&gt;{{ data }}&lt;/pre&gt;</span><br />
                <span>&lt;/Tweezing&gt;</span><br />
                <br />
                <span>&lt;Tweezing :to="value" tween="custom" :time="mouseXPer"&gt;</span><br />
                    <span><i class="tab"></i> &lt;pre slot-scope="data"&gt;Custom: {{ data }}&lt;/pre&gt;</span><br />
                <span>&lt;/Tweezing&gt;</span>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from "vue";
    import { Tweezing, tweezerHelper, tweenjsHelper } from "vue-tweezing";
    import Tweezer from "tweezer.js";
    import TWEEN from "@tweenjs/tween.js";

    Vue.use(Tweezing, {
      tweezer: tweezerHelper(Tweezer),
      tweenjs: tweenjsHelper(TWEEN),
      custom(value, end, opts, vm) {
        if (vm._unwatchCustom) vm._unwatchCustom();
        const change = end - value;
        const duration = 1;

        vm._unwatchCustom = vm.$watch(
          "$attrs.time",
          time => {
            // linear easing inline
            opts.$setValue(change * time / duration + value);
          },
          { immediate: true }
        );
      }
    });
    const tick = () => {
      TWEEN.update();
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    export default {
      data: () => ({
        value: 0,
        duration: 500,
        array: [0],
        mouseX: 0,
        tween: "tweezer"
      }),
      methods: {
        toggle() {
          const target = 200;
          this.value = this.value > target / 2 ? 0 : target;
          this.array = Array.from(
            Array(1 + Math.floor(Math.random() * 3)),
            () => target * Math.random()
          );
        }
      },
      computed: {
        object() {
          return {
            value: this.value,
            duration: this.duration
          };
        },
        mouseXPer() {
          return this.mouseX / document.documentElement.clientWidth;
        }
      },
      components: { Tweezing }
    };
</script>

<style scoped>
    b {
      color: #8c3800;
    }

    #tweezing-example {
      width: 50%;
      margin: 30px auto 0;
      text-align: left;
    }
    .float-left {
      float: left;
      width: 50%;
    }

    button,
    input {
      color: #d3dce4;
      background: rgba(0, 0, 0, 0.85);
      padding: 6px 10px;
      margin: 30px 0;
      border-radius: 3px;
      -webkit-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);
      box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);
    }
    button {
      padding: 15px 30px;
      background: #ca5b10;
    }
</style>
