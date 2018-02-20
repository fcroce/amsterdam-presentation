import Vue from "vue";
import "babel-polyfill";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "animate.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.use(Vuetify);
Vue.config.productionTip = false;

new Vue({
  Vuetify,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
