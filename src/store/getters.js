const getAllUsers=(state)=>{
    return state.listUsers;
  }

const getAllStores=(state)=>{
    return state.listStores;
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
      getAllProductsFilter
  }