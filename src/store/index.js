import { createStore } from 'vuex'
import {
  getAllUsersApp,
  getAllStoreDB,
  AdminLogin,
  getAllproductsdb,
  filterProductsForString,
  filterUsersForCountry,
  filterUsersForCity,
  filterShops,
  getAllAdminsDB,
  filterAdmin
} from './actions'
import {setAllUsers,
  setAllStores,
  setAdminStateLogin,
  setAllProduts,
  setAllAdmins,
setAllAdminsFilter,
  setAllProdutsFilter,
  setAllUsersFilter,
  setAllStoresFilter
} from './mutations'
import {getAllUsers,
  getAllStores,
  getAllProducts,
  getAllProductsFilter,
  getAllUsersFilter,
  getAllStoresFilter,
  getAllAdmins,
  getAllAdminsFilter,
} from './getters'


export default createStore({
  state: {
    adminStateLogin:false,
    activeWindow:1,
    listUsers:[],
    listUsersForFilter:[],
    listAdmins:[],
    listAdminsFilter:[],
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
    setAllAdmins,
  setAllAdminsFilter,
    setAllUsersFilter,
    setAllStoresFilter,
    setView(state,payload){
      state.activeWindow = payload;
    }
  },
  actions: {
    getAllUsersApp,
    filterAdmin,
    getAllStoreDB,
    AdminLogin,
    filterUsersForCountry,
    getAllproductsdb,
    filterProductsForString,
    filterUsersForCity,
    filterShops,
    getAllAdminsDB,
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
    getAllAdmins,
    getAllAdminsFilter,
    getVieWindow(state){
      return state.activeWindow;
    }
  },
  modules: {
  }
})
