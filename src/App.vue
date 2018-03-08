<template>
    <div id="app">
        <transition mode="out-in" @after-enter="bgAfterEnter">
            <div id="loader-0" class="loader" v-show="!loaded && loaderBg === 0"></div>
        </transition>

        <transition mode="out-in" @after-enter="bgAfterEnter">
            <div id="loader-1" class="loader" v-show="!loaded && loaderBg === 1"></div>
        </transition>

        <transition mode="out-in" @after-enter="bgAfterEnter">
            <div id="loader-2" class="loader" v-show="!loaded && loaderBg === 2"></div>
        </transition>

        <transition mode="out-in" @after-enter="bgAfterEnter">
            <div id="loader-3" class="loader" v-show="!loaded && loaderBg === 3"></div>
        </transition>

        <transition mode="out-in" @after-enter="bgAfterEnter">
            <div id="loader-4" class="loader" v-show="!loaded && loaderBg === 4"></div>
        </transition>

        <div id="background" v-if="loaded"></div>

        <transition mode="out-in"
            enter-active-class="animated bounceInLeft"
            @before-leave="beforeLeave"
        >
            <router-view v-if="loaded"/>
        </transition>
    </div>
</template>

<script>
const animations = [
  "bounceOutRight",
  "rubberBand",
  "fadeOutRight",
  "tada",
  "jello",
  "flipOutY",
  "zoomOutRight"
];

export default {
  data() {
    return {
      animation: animations[0],
      loaderBg: -1,
      lastBg: 0,
      loaded: false
    };
  },
  mounted() {
    this.loaderBg = 0;
    this.lastBg = document.getElementsByClassName("loader").length - 1;
  },
  methods: {
    bgAfterEnter(el) {
      el.style.setProperty("width", "100%");
      el.style.setProperty("height", "100%");
      el.style.setProperty("filter", "blur(0)");

      this.loadNextLoader();
    },
    loadNextLoader() {
      setTimeout(() => {
        if (this.loaderBg < this.lastBg) {
          this.loaderBg++;
        } else {
          this.loaded = true;
        }
      }, 2000);
    },
    beforeLeave(el) {
      this.animation =
        animations[Math.floor(Math.random() * animations.length)];
      el.className = "animated " + this.animation;
    }
  }
};
</script>

<style>
html {
  min-height: 100vh;
  overflow-y: auto;
}
body {
  min-height: 100vh;
  background-color: #f9c4a1;
}

h1 {
  color: #ca5b10;
  font-size: 4em;
  margin-bottom: 40px;
}
h2,
p,
span,
a {
  color: #212121;
}
h2 {
  font-size: 2em;
  margin-bottom: 20px;
}
p,
span {
  font-size: 1.5em;
}
span {
  display: inline-block;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #212121;
}

.loader,
#background {
  background-size: cover;
  display: block;
  width: 100%;
  height: 100%;
  position: fixed;
  right: 0;
  z-index: -9999;
  -webkit-transition: all 250ms ease-in;
  -moz-transition: all 250ms ease-in;
  -o-transition: all 250ms ease-in;
  transition: all 250ms ease-in;
}
.loader {
  filter: blur(20px);
}
#loader-0 {
  left: 0;
  top: 0;
  width: 200%;
  background-image: url("/amsterdam/foto-begin.jpg");
}
#loader-1 {
  left: auto;
  right: 0;
  top: 0;
  width: 200%;
  background-image: url("/amsterdam/foto1.jpg");
}
#loader-2 {
  right: 0;
  bottom: 0;
  top: auto;
  width: auto;
  height: 200%;
  background-image: url("/amsterdam/foto2.jpg");
}
#loader-3 {
  left: 0;
  bottom: 0;
  top: auto;
  width: auto;
  height: 200%;
  background-image: url("/amsterdam/conference.jpg");
}
#loader-4 {
  left: 0;
  top: 0;
  width: 200%;
  background-image: url("/amsterdam/background-amsterdam.jpg");
}
#background {
  background-image: url("/amsterdam/background-amsterdam.jpg");
  filter: blur(40px);
  width: 105%;
  height: 105%;
  left: -3%;
  top: -3%;
}

#home {
  display: block;
  position: fixed;
  bottom: 6%;
  left: 4%;
  width: 50px;
  height: 50px;
  z-index: 1;
  background: rgba(255, 255, 255, 0.1) url("assets/home.png") no-repeat center
    center;
  background-size: 60% 60%;
  -webkit-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  -webkit-transition: background-color 250ms ease;
  -moz-transition: background-color 250ms ease;
  -o-transition: background-color 250ms ease;
  transition: background-color 250ms ease;
}
#home:hover {
  background-color: rgba(255, 255, 255, 0.25);
}

.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

.quote {
  font-size: 1.3em;
  font-style: italic;
  margin-bottom: 40px;
}
.quote > p:nth-child(1):before {
  content: "“";
}
.quote > p:nth-child(1):after {
  content: "”";
}
.quote > p:nth-child(2):before {
  content: "~ ";
}
.quote > p:nth-child(2):after {
  content: " ~";
}

.blackbox {
  text-align: left;
  background: rgba(0, 0, 0, 0.85);
  margin: 60px 120px;
  padding: 40px 120px 40px;
  -webkit-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
}

.terminal {
  font-size: 1.3em;
  color: #3b7c15;
  margin-bottom: 20px;
}
.terminal-cmd {
  color: #d3dce4;
}
.terminal > span {
  font-size: 1em;
  color: #ba3327;
}

.code span {
  display: inline-block;
  color: #d3dce4;
}
.code i.tab {
  padding-left: 20px;
}
</style>
