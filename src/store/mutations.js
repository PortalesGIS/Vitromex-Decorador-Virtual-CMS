const { default: router } = require("../router");

export const setAllUsers = (state,payload) =>{
    state.listUsers = payload.users;
}
export const setAllUsersFilter = (state,payload) =>{
    state.listUsersForFilter = payload.users;
}

export const setAllAdmins =(state,payload)=>{
    state.listAdmins = payload.admins
}

export const setAllSeries =(state,payload)=>{
    state.listSeries = payload.serie
}
export const setAllSeriesFilter =(state,payload)=>{
    state.listSeriesFilter = payload.serie
}

export const setAllSpaces =(state,payload)=>{
    state.listSpaces = payload.aplications
}
export const setAllSpacesFilter =(state,payload)=>{
    state.listSpacesFilter = payload.aplications
}


export const setAllAdminsFilter =(state,payload)=>{
    state.listAdminsFilter = payload.admins
}

export const setAllStores = (state,payload) =>{
    state.listStores = payload.shops;
}
export const setAllStoresFilter = (state,payload) =>{
    state.listStoresFilter = payload.shops;
}

export const setAllProduts = (state,payload) =>{
    state.products = payload;
}
export const setAllProdutsFilter = (state,payload) =>{
    state.productsForFilter =payload;
}

export const setAdminStateLogin=(state,payload)=>{
    state.adminStateLogin = payload;
    localStorage.setItem("isLogged","true");
    router.push("/");
  }
