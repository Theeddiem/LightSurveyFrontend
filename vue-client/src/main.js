import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import store from "./store/";
import { routes } from "./router/routes";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import './registerServiceWorker'
import Meta from 'vue-meta';


Vue.component("NavBar", NavBar);
Vue.component("Footer", Footer);


Vue.use(VueRouter);
Vue.use(Meta);

const router = new VueRouter({
  routes: routes,
  mode: "history"
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
