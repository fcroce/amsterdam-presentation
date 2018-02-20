import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import VueCli from "./views/VueCli.vue";
import Panel from "./views/Panel.vue";

Vue.use(Router);

export default new Router({
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
        path: "/panel",
        name: "panel",
        component: Panel
    },

  ]
});
