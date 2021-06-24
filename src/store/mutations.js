const { default: router } = require("../router");

const setAllUsers = (state,payload) =>{
    state.listUsers = payload.users;
}
const setAllUsersFilter = (state,payload) =>{
    state.listUsersForFilter = payload.users;
}

const setAllAdmins =(state,payload)=>{
    state.listAdmins = payload.admins
}

const setAllSeries =(state,payload)=>{
    state.listSeries = payload.serie
}
const setAllSeriesFilter =(state,payload)=>{
    state.listSeriesFilter = payload.serie
}

const setAllSpaces =(state,payload)=>{
    state.listSpaces = payload.aplications
}
const setAllSpacesFilter =(state,payload)=>{
    state.listSpacesFilter = payload.aplications
}


const setAllAdminsFilter =(state,payload)=>{
    state.listAdminsFilter = payload.admins
}

const setAllStores = (state,payload) =>{
    state.listStores = payload.shops;
}
const setAllStoresFilter = (state,payload) =>{
    state.listStoresFilter = payload.shops;
}

const setAllProduts = (state,payload) =>{
    state.products = payload;
}
const setAllProdutsFilter = (state,payload) =>{
    state.productsForFilter =payload;
}

const setAdminStateLogin=(state,payload)=>{
    state.adminStateLogin = payload;
    localStorage.setItem("isLogged","true");
    router.push("/");
  }

module.exports ={
    setAllUsers,
    setAllStores,
    setAdminStateLogin,
    setAllProduts,
    setAllProdutsFilter,
    setAllUsersFilter,
    setAllStoresFilter,
    setAllAdmins,
    setAllAdminsFilter,
    setAllSeries,
setAllSeriesFilter,
setAllSpaces,
setAllSpacesFilter,
}