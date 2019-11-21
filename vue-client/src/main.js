import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import store from './store/'
import { routes } from './router/routes'

import VModal from 'vue-js-modal'
import ModalDirection from "./components/Model.vue"


Vue.use(VModal, { dynamic: true, dynamicDefaults: { clickToClose: false } })
Vue.use(VueRouter)
const router = new VueRouter({
  routes: routes,
  mode: 'history'
})
Vue.component("ModalDirection",ModalDirection)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
