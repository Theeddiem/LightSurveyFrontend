import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import SurveyCreateForm from './components/SurveyCreateForm.vue'
import OptionInput from './components/OptionInput.vue'
import SurveyPageForm from './components/SurveyPageForm.vue'
import NavBar from './components/NavBar.vue'
import store from './store/'
import SingleOption from './components/SingleOption'

import { routes } from './router/routes'

Vue.use(VueRouter)
const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

Vue.config.productionTip = false

Vue.component('NavBar', NavBar)
Vue.component('SurveyCreateForm', SurveyCreateForm)
Vue.component('OptionInput', OptionInput)
Vue.component('SurveyPageForm', SurveyPageForm)
Vue.component('SingleOption', SingleOption)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
