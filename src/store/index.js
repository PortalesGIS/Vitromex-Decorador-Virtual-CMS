import { createStore } from 'vuex'
import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'


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

  },
  mutations: {
   ...mutations,
    setView(state,payload){
      state.activeWindow = payload;
    }
  },
  actions: {
    ...actions,
    onChangeViewWindow({commit},payload){      
      commit("setView",payload);
    }
  },
  getters:{
    ...getters,
    getVieWindow(state){
      return state.activeWindow;
    }
  },
  modules: {
  }
})
