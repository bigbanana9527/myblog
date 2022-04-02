import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/bootstrap.css'
import './assets/js/bootstrap.bundle.js'
//引入markdown编辑器
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
//引入axios
import axios from 'axios'
Vue.config.productionTip = false
Vue.prototype.$http= axios
axios.defaults.baseURL='http://localhost:8080'

//定义时间过滤器
Vue.filter('dateFormat',dtStr=>{
  const dt =new Date(dtStr)
  const y =padZero(dt.getFullYear())
  const m =padZero(dt.getMonth()+1)
  const d =padZero(dt.getDate())

  const hh =padZero(dt.getHours())
  const mm =padZero(dt.getMinutes())
  const ss =padZero(dt.getSeconds())
  
  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
  function padZero(n){
    return n>9 ? n: '0'+n
  }
})

Vue.config.productionTip = false
Vue.use(mavonEditor)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
