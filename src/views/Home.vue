<template>
    <div class="home">
        <img class="logo" src="@/assets/logo-orange.png">
        <div class="home-menu">
            <h1>Frontend Love Amsterdam 2018</h1>
            <h2>Topics</h2>
            <ul>
                <li>
                    <router-link to="/vue-cli">vue-cli 3.0.0-beta.1</router-link>
                </li>
                <li>
                    <router-link to="/transitions">Transitions</router-link>
                </li>
                <li>
                    <router-link to="/vuex">Vuex</router-link>
                </li>
                <li>
                    <router-link to="/nuxt">Nuxt</router-link>
                </li>
                <li>
                    <router-link to="/vuetify-panel">Vuetify Panel</router-link>
                </li>
            </ul>

            <div class="github-url">
                <img src="@/assets/github-url.jpg">
                <p>
                    <a href="https://github.com/fcroce/AmsterdamPresentation" target="_blank">You can download the source on GihHub</a>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style scoped>
    img.logo {
        display: inline-block;
        height: 250px;
        margin: 40px 0;
    }
    .home-menu {
        background: rgba(255, 255, 255, 0.35);
        border-radius: 3px;
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);
        padding: 60px;
    }

    h1 {
        font-size: 3em;
    }

    h2 {
        font-size: 2em;
        font-weight: 900;
        margin: 40px 0;
    }

    li {
        font-size: 1.5em;
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #212121;
    }

    .github-url {
        text-align: center;
        padding: 80px 0 0;
    }
    .github-url > img {
        display: inline-block;
        width: 100px;
        border-radius: 5px;
    }
    .github-url > p {
        font-size: 1em;
        margin-top: 10px;
    }
</style>