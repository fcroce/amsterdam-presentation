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
        min-height:100vh;
        overflow-y: auto;
    }
    body{ min-height:100vh; }

    h1 {
      color: #ca5b10;
      font-size: 6em;
      margin-bottom: 40px;
    }
    h2, p, span, a { color: #212121; }
    h2 {
      font-size: 3em;
      margin-bottom: 20px;
    }
    p, span { font-size: 2em; }
    span { display: inline-block; }

    ul {
      list-style-type: none;
      padding: 0;
    }
    li { display: block; }

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
        z-index: -9999;
    }

    .blackbox {
        text-align: left;
        background: black;
        margin: 60px 120px;
        padding: 60px 120px 40px;
    }

    .terminal {
        font-size: 2em;
        color: #3b7c15;
        margin-bottom: 20px;;
    }
    .terminal-cmd {
        color: #d3dce4;
    }
    .terminal > span {
        font-size: 1em;
        color: #ba3327;
    }
</style>
