import Vue from "vue";
import App from "./App.vue";
import VueMaterial from "vue-material";
import router from "./router";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default-dark.css";
import VueCookies from "vue-cookies";

Vue.use(VueMaterial);
Vue.use(VueCookies);

Vue.$cookies.config("30d");

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
