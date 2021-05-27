import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/HomeView.vue'
import Login from '../views/login/LoginView.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{protected :true}
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
]
const router = createRouter({
  mode:"history",
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to,from,next)=>{
  if(to.name==="Login" && localStorage.getItem("isLogged")){
    next("/")
    return;
  }
  if(to.meta.protected){
    if(localStorage.getItem("isLogged")){
      next();
    }
    else{
      next("/login");
    }
  }
  else{
    next();
  }
})

export default router
