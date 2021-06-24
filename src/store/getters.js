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

  const getAllSeries = (state)=>{
    return state.listSeries
  }
  const getAllSeriesFilter = (state)=>{
    return state.listSeriesFilter
  }

  const getAllSpaces = (state)=>{
    return state.listSpaces }
  const getAllSpacesFilter = (state)=>{
    return state.listSpacesFilter
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
      getAllAdminsFilter,
      getAllSeries,
      getAllSeriesFilter,
      getAllSpaces,
      getAllSpacesFilter,
  }