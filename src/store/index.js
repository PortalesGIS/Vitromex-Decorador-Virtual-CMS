import { createStore } from 'vuex'
import * as actionsProducts from './products/actionsProducts'
import * as mutationsProducts from './products/mutationsProducts'
import * as gettersProducts from './products/gettersProducts'
import * as actionsShop from './shops/actionsShop'
import * as gettersShop from './shops/gettersShops'
import * as mutationsShop from './shops/mutationsShop'
import * as actionsAdmin from './admins/actionsAdmin'
import * as gettersAdmin from './admins/gettersAdmin'
import * as mutationsAdmin from './admins/mutationsAdmin'
import * as actionsUsers from './users/actionsUsers'
import * as mutationsUsers from './users/mutationsUsers'
import * as gettersUsers from './users/gettersUsers'
import * as actionsSeries from './series/actionsSeries'
import * as gettersSeries from './series/gettersSeries'
import * as mutationsSeries from './series/mutationsSeries'
import * as actionsOnboarding from './onboarding/actionsOnboarding'
import * as gettersOnboarding from './onboarding/gettersOnboarding'
import * as mutationsOnboarding from './onboarding/mutationsOnboarding'

// const baseUrl = "https://vitromex-arko-api.herokuapp.com";
// const baseUrl = "http://localhost:8080";
// const plataforma ="vitromex"

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
    listSeries:[],
    listSeriesFilter:[],
    listSpaces:[],
    listSpacesFilter:[],
    listTypologies:[],
    listTypologiesFilter:[],    
  },
  mutations: {
    ...mutationsProducts,
    ...mutationsShop,
    ...mutationsAdmin,
    ...mutationsUsers,
    ...mutationsSeries,
    ...mutationsOnboarding,
    setView(state,payload){
      state.activeWindow = payload;
    }
  },
  actions: {
  ...actionsProducts,
   ...actionsShop,
   ...actionsAdmin,
   ...actionsUsers,
   ...actionsSeries,
   ...actionsOnboarding,
    onChangeViewWindow({commit},payload){      
      commit("setView",payload);
    }
  },
  getters:{
    ...gettersProducts,
    ...gettersShop,
    ...gettersAdmin,
    ...gettersUsers,
    ...gettersSeries,
    ...gettersOnboarding,
    getVieWindow(state){
      return state.activeWindow;
    }
  },
  modules: {
  }
})
