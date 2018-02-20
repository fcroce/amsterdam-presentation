<template>
  <div id="app">
    <div id="background"></div>
      <transition name="fade" mode="out-in"
        enter-active-class="animated bounceInLeft"
        @before-leave="beforeLeave"
      >
          <router-view/>
      </transition>
  </div>
</template>

<script>
const animations = ['bounceOutRight', 'rubberBand', 'fadeOutRight', 'tada', 'jello', 'flipOutY', 'zoomOutRight'];

export default {
    data() {
        return {
            animation: animations[0]
        }
    },
    methods: {
        beforeLeave: function (el) {
            this.animation = animations[Math.floor(Math.random() * animations.length)];
            el.className = "animated " + this.animation;
        }
    }
}
</script>

<style>
html{
    min-height:100%;
    position:relative;
    overflow-y: auto;
}
body{
    height:100%
}
a {
    color: #212121;
}

#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #212121;
}

#background {
    background-image: url(assets/background-amsterdam.jpg);
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
    z-index: -1;
}
</style>
