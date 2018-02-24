<template>
    <div class="home">
        <img class="logo" src="@/assets/logo-orange.png">
        <div class="home-menu">
            <h1>Frontend Love Amsterdam 2018</h1>
            <h3>Topics</h3>
            <ul>
                <li>
                    <router-link to="/vue-cli">vue-cli 3.0.0-beta.1</router-link>
                </li>
                <li>
                    <router-link to="/transitions">CSS Transitions</router-link>
                </li>
                <li>
                    <router-link to="/state-transitions">Vue Transitions</router-link>
                </li>
                <li>
                    <router-link to="/tweezing">Nuxt</router-link>
                </li>
                <li>
                    <router-link to="/vue-cli">Vuex</router-link>
                </li>
                <li>
                    <router-link to="/panel">Vuetify Panel</router-link>
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
        height: 300px;
        margin: 40px 0 60px;
    }
    .home-menu {
        background: rgba(255, 255, 255, 0.35);
        border-radius: 3px;
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);
        padding: 60px;
    }

    h3 {
        font-size: 1.5em;
        font-weight: 900;
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
    a {
        color: #212121;
    }

    .github-url {
        text-align: center;
        padding: 100px 0 0;
    }
    .github-url > img {
        display: inline-block;
        width: 150px;
        border-radius: 5px;
    }
</style>