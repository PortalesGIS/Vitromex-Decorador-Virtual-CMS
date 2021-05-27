import { createStore } from 'vuex'
import router from '../router'
const baseUrl = "http://localhost:8080";


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
    }
  },
  modules: {
  }
})
