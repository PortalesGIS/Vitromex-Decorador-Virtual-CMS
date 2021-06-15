const getAllUsers=(state)=>{
    return state.listUsers;
  }

const getAllStores=(state)=>{
    return state.listStores;
  }

const getAllProducts=(state)=>{
    return state.products;
  }

  module.exports = {
      getAllUsers,
      getAllProducts,
      getAllStores,
  }