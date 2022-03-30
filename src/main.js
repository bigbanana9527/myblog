import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/bootstrap.css'
import './assets/js/bootstrap.bundle.js'
//引入markdown编辑器
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'



Vue.config.productionTip = false
Vue.use(mavonEditor)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
