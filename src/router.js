import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import VueCli from "./views/VueCli.vue";
import Transitions from "./views/Transitions.vue";
import Nuxt from "./views/Nuxt.vue";
import Panel from "./views/Panel.vue";
import Questions from "./views/Questions.vue";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/vue-cli",
      name: "vue-cli",
      component: VueCli
    },
    {
      path: "/transitions",
      name: "transitions",
      component: Transitions
    },
    {
      path: "/nuxt",
      name: "nuxt",
      component: Nuxt
    },
    {
      path: "/vuetify-panel",
      name: "panel",
      component: Panel
    },
    {
      path: "/questions",
      name: "questions",
      component: Questions
    }
  ]
});
