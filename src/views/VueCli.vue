<template>
    <transition name="fade"
        enter-active-class="animated pulse"
        leave-active-class="animated bounceOutRight"
    >
        <div class="home">
            <img class="logo" src="@/assets/logo-orange.png">
            <div class="main-menu">
                <h1>Frontend Love Amsterdam 2018</h1>
                <h3>Topics</h3>
                <ul>
                    <li>
                        <router-link to="/vue-cli">vue-cli 3.0.0-beta.1</router-link>
                    </li>
                    <li>
                        <router-link to="/vue-cli">Transitions</router-link>
                    </li>
                    <li>
                        <router-link to="/vue-cli">State Transitions</router-link>
                    </li>
                    <li>
                        <router-link to="/vue-cli">Tweezing / Tween.js</router-link>
                    </li>
                    <li>
                        <router-link to="/vue-cli">vuex</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
  name: "home"
};
</script>

<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition-property: opacity;
        transition-duration: .25s;
    }

    .fade-enter-active {
        transition-delay: .25s;
    }

    .fade-enter, .fade-leave-active {
        opacity: 0
    }
    img.logo {
        display: inline-block;
        height: 300px;
        margin: 40px 0 60px;
    }
    .main-menu {
        background: rgba(255, 255, 255, 0.35);
        border-radius: 3px;
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);
        padding: 60px;
    }

    h1 {
        color: #ca5b10;
    }

    h3 {
        font-size: 1.5em;
        margin: 40px 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }
</style>