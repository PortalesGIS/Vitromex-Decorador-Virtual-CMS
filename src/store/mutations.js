

const setAllUsers = (state,payload) =>{
    state.listUsers = payload.users;
}

const setAllStores = (state,payload) =>{
    state.listStores = payload.shops;
}

module.exports ={
    setAllUsers,
    setAllStores
}