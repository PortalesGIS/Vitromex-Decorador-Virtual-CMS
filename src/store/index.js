import { createStore } from 'vuex'
import {
  getAllUsersApp,
  getAllStore,
  AdminLogin
} from './actions'
import {setAllUsers,setAllStores,setAdminStateLogin} from './mutations'
import {getAllUsers,getAllStores} from './getters'


export default createStore({
  state: {
    adminStateLogin:false,
    activeWindow:1,
    listUsers:[],
    listStores:[],
  },
  mutations: {
    setAllUsers,
    setAllStores,
    setAdminStateLogin,
    setView(state,payload){
      state.activeWindow = payload;
    }
  },
  actions: {
    getAllUsersApp,
    getAllStore,
    AdminLogin,
    onChangeViewWindow({commit},payload){      
      commit("setView",payload);
    }
  },
  getters:{
    getAllUsers,
    getAllStores,
    getVieWindow(state){
      return state.activeWindow;
    }
  },
  modules: {
  }
})
