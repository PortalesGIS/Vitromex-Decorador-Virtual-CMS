import { createStore } from 'vuex'
import router from '../router'
import {
  getAllUsersApp
} from './actions'
import {setAllUsers} from './mutations'
import {getAllUsers} from './getters'

const baseUrl = "http://localhost:8080";


export default createStore({
  state: {
    adminStateLogin:false,
    activeWindow:1,
    listUsers:[],
  },
  mutations: {
    setAllUsers,
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
    getAllUsersApp,
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
    getAllUsers,
    getVieWindow(state){
      return state.activeWindow;
    }
  },
  modules: {
  }
})
