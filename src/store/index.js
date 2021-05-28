import { createStore } from 'vuex'
import router from '../router'
const baseUrl = "http://localhost:8080";


export default createStore({
  state: {
    adminStateLogin:false,
    activeWindow:1,
  },
  mutations: {
    setAdminStateLogin(state,payload){
      state.adminStateLogin = payload;
      localStorage.setItem("isLogged","true");
      router.push("/");
    },
    setView(state,payload){
      state.activeWindow = payload;
    }
  },
  actions: {
    AdminLogin({commit},payload){
      // TODO: consumir api
      fetch(`${baseUrl}/api/admin/login`,{
        method: "POST",
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email:payload.email,
          password:payload.password
        }),
      })
      .then(result => result.json())
      .then(response => console.log("ok",response) )
      .catch(error => console.error('Error:', error))
      // 
      commit("setAdminStateLogin",payload);
    },
    onChangeViewWindow({commit},payload){      
      commit("setView",payload);
    }
  },
  getters:{
    getVieWindow(state){
      return state.activeWindow;
    }
  },
  modules: {
  }
})
