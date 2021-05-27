import { createStore } from 'vuex'
import router from '../router'

export default createStore({
  state: {
    adminStateLogin:false,
  },
  mutations: {
    setAdminStateLogin(state,payload){
      state.adminStateLogin = payload;
      localStorage.setItem("isLogged","true");
      router.push("/");
    }
  },
  actions: {
    AdminLogin({commit},payload){
      // TODO: consumir api
      // 
      commit("setAdminStateLogin",payload);
    }
  },
  modules: {
  }
})
