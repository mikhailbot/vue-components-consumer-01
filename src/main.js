import Vue from "vue";
import App from "./App.vue";
import httpVueLoader from "http-vue-loader";

Vue.config.productionTip = false;

Vue.use(httpVueLoader);

new Vue({
  render: h => h(App)
}).$mount("#app");
