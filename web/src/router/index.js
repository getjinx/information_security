import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index/index-frame/index-frame.vue'
import objectManage from './object-manage.js'
import assetManage from './asset-manage.js'
import vulnerability from './vulnerability.js'
import threatenManage from './threaten-manage.js'
import analysis from './analysis.js'
import document from './document'
Vue.use(VueRouter)

const routes = [
  {
    path: '/index',
    name: 'index',
    meta: { title: "首页" },
    component: Index,
    children: [
      objectManage,
      assetManage,
      vulnerability,
      threatenManage,
      analysis,
      document,
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
