import { createStore } from 'vuex'
import {
  getAllUsersApp,
  getAllStore,
  AdminLogin,
  getAllproductsdb,
  filterProductsForString,
  filterUsersForCountry,
  filterUsersForCity
} from './actions'
import {setAllUsers,setAllStores,setAdminStateLogin,setAllProduts,setAllProdutsFilter,setAllUsersFilter} from './mutations'
import {getAllUsers,getAllStores,getAllProducts,getAllProductsFilter,getAllUsersFilter} from './getters'


export default createStore({
  state: {
    adminStateLogin:false,
    activeWindow:1,
    listUsers:[],
    listUsersForFilter:[],
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
    setAllUsersFilter,
    setView(state,payload){
      state.activeWindow = payload;
    }
  },
  actions: {
    getAllUsersApp,
    getAllStore,
    AdminLogin,
    filterUsersForCountry,
    getAllproductsdb,
    filterProductsForString,
    filterUsersForCity,
    onChangeViewWindow({commit},payload){      
      commit("setView",payload);
    }
  },
  getters:{
    getAllUsers,
    getAllStores,
    getAllProducts,
    getAllUsersFilter,
    getAllProductsFilter,
    getVieWindow(state){
      return state.activeWindow;
    }
  },
  modules: {
  }
})
