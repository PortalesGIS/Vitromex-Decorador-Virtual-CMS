const getAllUsers=(state)=>{
    return state.listUsers;
  }
const getAllUsersFilter=(state)=>{
    return state.listUsersForFilter;
  }

const getAllStores=(state)=>{
    return state.listStores;
  }
const getAllStoresFilter=(state)=>{
    return state.listStoresFilter;
  }

const getAllProducts=(state)=>{
    return state.products;
  }
const getAllProductsFilter=(state)=>{
    return state.productsForFilter;
  }

  module.exports = {
      getAllUsers,
      getAllProducts,
      getAllStores,
      getAllProductsFilter,
      getAllUsersFilter,
      getAllStoresFilter,
  }