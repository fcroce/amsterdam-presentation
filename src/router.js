import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import VueCli from "./views/VueCli.vue";
import Transitions from "./views/Transitions.vue";
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
            path: "/transitions",
            name: "transitions",
            component: Transitions
        },
        {
            path: "/vuetify-panel",
            name: "panel",
            component: Panel
        }
    ]
});
