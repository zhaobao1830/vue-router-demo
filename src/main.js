// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Home from './components/Home.vue'
import About from './components/About.vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routes =[
  {path: '/', component: App},
  {path:'/home', component:Home},
  {path:'/about',component:About}
]

// 创建实例，然后传routes配置
const router=new VueRouter({
  routes
});

//        创建和挂载根实例
const app = new Vue({
  router
}).$mount('#app');
