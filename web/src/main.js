import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import './assets/scss/style.scss'
import axios from 'axios'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts;
Vue.prototype.$http = axios.create({
  baseURL: "http://localhost:3000/"
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
