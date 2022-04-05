import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ArticleDetail from '../views/ArticleDetail.vue'
import ArticleHome from '../views/ArticleHome.vue'
import PlaceOnFile from '../views/PlaceOnFile.vue'
import PostArcitle from '../views/back/PostArcitle.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    //重定向
    redirect: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/home',
        component: ArticleHome,
      },
      {
        path: '/articledetail/:id',
        component: ArticleDetail,
        name:'articleDetail',
      },
      
      {
        path: '/placeonfile',
        component: PlaceOnFile
      },
      {
        path: '/about',
        component: About
      },
      {
        path: '/postarticle',
        component: PostArcitle
      }
    ]
  },


  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
