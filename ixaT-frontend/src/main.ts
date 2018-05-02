// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import './hooks' // This must be imported before any component
import {} from '@types/googlemaps'
import services from './services'
import store from './store'

import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.use(Vuetify, {
  theme: {
    primary: '#66BB6A',
    secondary: '#424242'
  }
})

// tslint:disable-next-line:no-unused-expression
new Vue({
  router,
  store,
  provide: { ...services },
  render: (h) => h(App)
}).$mount('#app')
