const getAllUsers=(state)=>{
    return state.listUsers;
  }

const getAllStores=(state)=>{
    return state.listStores;
  }

  module.exports = {
      getAllUsers,
      getAllStores,
  }