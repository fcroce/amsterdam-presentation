<template>
  <div id="app">
    <div id="background"></div>
    <transition mode="out-in"
      enter-active-class="animated bounceInLeft"
      @before-leave="beforeLeave"
    >
        <router-view/>
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
      animation: animations[0]
    };
  },
  methods: {
    beforeLeave: function(el) {
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

#background {
  background-image: url("assets/background-amsterdam.jpg");
  background-size: cover;
  display: block;
  filter: blur(5px);
  -webkit-filter: blur(20px);
  width: 105%;
  height: 105%;
  left: -3%;
  top: -3%;
  position: fixed;
  right: 0;
  z-index: -9999;
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
