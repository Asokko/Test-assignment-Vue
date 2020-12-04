import Vue from 'vue'
import store from './store/index'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'

Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
