import { createStore } from 'vuex'
import {
  getAllUsersApp,
  getAllStoreDB,
  AdminLogin,
  getAllproductsdb,
  filterProductsForString,
  filterUsersForCountry,
  filterUsersForCity,
  filterShops
} from './actions'
import {setAllUsers,setAllStores,setAdminStateLogin,setAllProduts,setAllProdutsFilter,setAllUsersFilter,
  setAllStoresFilter} from './mutations'
import {getAllUsers,getAllStores,getAllProducts,getAllProductsFilter,getAllUsersFilter,getAllStoresFilter} from './getters'


export default createStore({
  state: {
    adminStateLogin:false,
    activeWindow:1,
    listUsers:[],
    listUsersForFilter:[],
    listStores:[],
    listStoresFilter:[],
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
    setAllStoresFilter,
    setView(state,payload){
      state.activeWindow = payload;
    }
  },
  actions: {
    getAllUsersApp,
    getAllStoreDB,
    AdminLogin,
    filterUsersForCountry,
    getAllproductsdb,
    filterProductsForString,
    filterUsersForCity,
    filterShops,
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
    getAllStoresFilter,
    getVieWindow(state){
      return state.activeWindow;
    }
  },
  modules: {
  }
})
