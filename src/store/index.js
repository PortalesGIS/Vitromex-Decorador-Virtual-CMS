import { createStore } from 'vuex'
import {
  getAllUsersApp,
  getAllStore,
  AdminLogin,
  getAllproductsdb
} from './actions'
import {setAllUsers,setAllStores,setAdminStateLogin,setAllProduts} from './mutations'
import {getAllUsers,getAllStores,getAllProducts} from './getters'


export default createStore({
  state: {
    adminStateLogin:false,
    activeWindow:1,
    listUsers:[],
    listStores:[],
    products:[]
  },
  mutations: {
    setAllUsers,
    setAllStores,
    setAdminStateLogin,
    setAllProduts,
    setView(state,payload){
      state.activeWindow = payload;
    }
  },
  actions: {
    getAllUsersApp,
    getAllStore,
    AdminLogin,
    getAllproductsdb,
    onChangeViewWindow({commit},payload){      
      commit("setView",payload);
    }
  },
  getters:{
    getAllUsers,
    getAllStores,
    getAllProducts,
    getVieWindow(state){
      return state.activeWindow;
    }
  },
  modules: {
  }
})
