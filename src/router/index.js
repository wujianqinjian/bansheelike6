import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import About from  '../views/About.vue'
import Bansheevue from "../views/Bansheevue.vue";
import Consolegame from "@/views/Consolegame.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },{
    path: '/banshee',
    //name: 'banshee',
    component: Bansheevue
  },{
    path: '/consolegame',
    component: Consolegame
  }
]

const router = new VueRouter(

    {
      mode:'history',
      base:process.env.BASE_URL,
      routes
})

export default router
