const { default: router } = require("../router");

const setAllUsers = (state,payload) =>{
    state.listUsers = payload.users;
}

const setAllStores = (state,payload) =>{
    state.listStores = payload.shops;
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
    setAllProdutsFilter
}