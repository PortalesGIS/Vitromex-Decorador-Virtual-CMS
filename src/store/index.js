import { createStore } from 'vuex'
import {
  getAllUsersApp,
  getAllStore,
  AdminLogin,
  getAllproductsdb,
  filterProductsForString
} from './actions'
import {setAllUsers,setAllStores,setAdminStateLogin,setAllProduts,setAllProdutsFilter} from './mutations'
import {getAllUsers,getAllStores,getAllProducts,getAllProductsFilter} from './getters'


export default createStore({
  state: {
    adminStateLogin:false,
    activeWindow:1,
    listUsers:[],
    listStores:[],
    products:[],
    productsForFilter:[],

  },
  mutations: {
    setAllUsers,
    setAllStores,
    setAdminStateLogin,
    setAllProduts,
    setAllProdutsFilter,
    setView(state,payload){
      state.activeWindow = payload;
    }
  },
  actions: {
    getAllUsersApp,
    getAllStore,
    AdminLogin,
    getAllproductsdb,
    filterProductsForString,
    onChangeViewWindow({commit},payload){      
      commit("setView",payload);
    }
  },
  getters:{
    getAllUsers,
    getAllStores,
    getAllProducts,
    getAllProductsFilter,
    getVieWindow(state){
      return state.activeWindow;
    }
  },
  modules: {
  }
})
