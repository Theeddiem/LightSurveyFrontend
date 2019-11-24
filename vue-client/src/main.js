import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import store from './store/'
import { routes } from './router/routes'
import NavBar from './components/NavBar'
import Footer from './components/Footer'


Vue.component("NavBar",NavBar)
Vue.component("Footer",Footer)

// Vue.use(VModal, { dynamic: true, dynamicDefaults: { clickToClose: false } }) // need to unisall npm
Vue.use(VueRouter)


const router = new VueRouter({
  routes: routes,
  mode: 'history'
})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
