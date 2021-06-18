const getAllUsers=(state)=>{
    return state.listUsers;
  }
const getAllUsersFilter=(state)=>{
    return state.listUsersForFilter;
  }

  const getAllAdmins =(state)=>{
    return state.listAdmins;
  }

  const getAllAdminsFilter =(state)=>{
    return state.listAdminsFilter;
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
      getAllAdmins,
      getAllAdminsFilter
  }