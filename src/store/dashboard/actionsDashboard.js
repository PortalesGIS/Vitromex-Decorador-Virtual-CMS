import { baseUrl } from "../../types/data";

export const getNmberOfUsers = async ({ commit,getters }) => {
  let platform="";
  if(getters.getPageState){
     platform = "vitromex"
  }  
  else{
     platform = "arko"
  }
  let requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  fetch(`${baseUrl}/api/user/total/${platform}`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      commit("setDashboardProperti", {
        properti: "totalUserRegister",
        value: result.total,
      });
    })
    .catch((error) => console.log("error", error));
}

export const onGeatAllUsersDowloadAndroid=async ({ commit,getters })=>{
  let platform="";
  if(getters.getPageState){
     platform = "vitromex"
  }  
  else{
     platform = "arko"
  }
  let requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  fetch(`${baseUrl}/api/analytics/getTotal/${platform}/android`, requestOptions)
    .then((response) => response.json())
    .then((responseResult) => {
      commit("setDashboardProperti", {
        properti: "totalDownloadAndoid",
        value: responseResult.result.total,
      });
    })
    .catch((error) => console.log("error", error));
}
export const onGeatAllUsersDowloadIos=async ({ commit,getters })=>{
  let platform="";
  if(getters.getPageState){
     platform = "vitromex"
  }  
  else{
     platform = "arko"
  }
  let requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  fetch(`${baseUrl}/api/analytics/getTotal/${platform}/ios`, requestOptions)
    .then((response) => response.json())
    .then((responseResult) => {
      commit("setDashboardProperti", {
        properti: "totalDownloadsIos",
        value: responseResult.result.total,
      });
    })
    .catch((error) => console.log("error", error));
}
export const onGeatAllUsersDowloadWeb =async ({ commit,getters })=>{
  let platform="";
  if(getters.getPageState){
     platform = "vitromex"
  }  
  else{
     platform = "arko"
  }
  let requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  fetch(`${baseUrl}/api/analytics/getTotal/${platform}/web`, requestOptions)
    .then((response) => response.json())
    .then((responseResult) => {
      commit("setDashboardProperti", {
        properti: "totalViewsWeb",
        value: responseResult.result.total,
      });
    })
    .catch((error) => console.log("error", error));
}

export const onGetProductsFavorites = async ({ commit,getters }) => {
  let platform="";
  if(getters.getPageState){
     platform =""
  }  
  else{
     platform = "arko"
  }
  let requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  fetch(`${baseUrl}/api/favorite/list/${platform}`, requestOptions)
    .then((response) => response.json())
    .then(async (result) => {
      commit("setDashboardProperti", {
        properti: "listProductsFavoritesResponseFilter",
        value: result.list,
      });
      const arrayformated = await Promise.all(
        result.list.map(async (product, index) => {
          if (index < 11) {
            const name = await getProduct(product._id);
              return {
                total: product.total,
                name: await name,
              };
          }
        })
      );
      console.log(arrayformated)
      commit("setDashboardProperti", {
        properti: "listProductFavorites",
        value: arrayformated.filter((el) => el != null),
      });
    })
    .catch((error) => console.log("error", error));
};

export const onGetProductsAplicated = async ({ commit,getters }) => {
  let platform="";
  if(getters.getPageState){
     platform =""
  }  
  else{
     platform = "arko"
  }
  let requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  fetch(`${baseUrl}/api/counter/list/${platform}`, requestOptions)
    .then((response) => response.json())
    .then(async (result) => {
      commit("setDashboardProperti", {
        properti: "listProductsApplicationsResponseFilter",
        value: result.list,
      });
      const arrayformated = await Promise.all(
        result.list.map(async (product, index) => {
          if (index < 11) {
            const name = await getProduct(product._id);
            return {
              total: product.total,
              name: await name,
            };
          }
        })
      );
      commit("setDashboardProperti", {
        properti: "listProductsApplications",
        value: arrayformated.filter((el) => el != null),
      });
    })
    .catch((error) => console.log("error", error));
};

export const onGetSpacesCountersAplicateds = async ({ commit,getters }) => {
  let platform="vitromex";
  if(getters.getPageState){
     platform ="vitromex"
  }  
  else{
     platform = "arko"
  }
  let requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  fetch(`${baseUrl}/api/analytics/countspaces/${platform}`, requestOptions)
    .then((response) => response.json())
    .then(async (result) => {
      commit("setDashboardProperti", {
        properti: "totalspaceMoreVisited",
        value:result,
      });
    })
    .catch((error) => console.log("error", error));
};

export const onFilterFavoritesList = async({commit,getters},{dateOne="",dateTwo=""})=>{
  // intentare explicar esto
  // toma la lista inicial para no hacer otra llamada al api 
  const originalList =getters.getDasboardData.listProductsFavoritesResponseFilter
  // El array de los productos tiene denro otro array que contiene la fecha y el total de los productos que se agregaron a favoritos que
// Ejemplo
  // {
  //   productoid,
  //   array[
  //     {
  //       date:"00-00-00",
  //       total:2
  //     },
  //     {
  //       date:"00-00-01",
  //       total:5
  //     }
  //     ...
  //   ]
  // }
  // primero se recorre la lista de productos
  const result =  originalList.map(
    product => {
      // contador que me ara saber cuantos veces se agrego a favoritos en las fechas indicadas
      let totalFavorestesInDates =0
      // se recorre el array de fechas del producto 
      product.dates.forEach(date => {
          // si la fecha indicada en el array cumple con la condicion del filtro entonces suma al contador las veces que se agrego a favoritos
          if(new Date(dateOne).getTime() <= new Date(date.date).getTime() && new Date(dateTwo).getTime() >= new Date(date.date).getTime()){
            totalFavorestesInDates+= date.total
          }
      })
      // terminando de recorrer las fechas se regresa un objeto con el id del producto y el total de la suma entre anbas fechas 
      return {
        _id:product._id,
        total:totalFavorestesInDates,        
      }
    }
  )
  // obtengo como resultado un array de los totales entre las fechas de filtro y el id del producto y el total de la sum
  // Ejemplo:
  // [
  //   {_id:"aafasdasdadsad",total:50},{_id:"adsadqrtegfhgfgh",total:40},{_id:"aafasdasdadsad",total:50}
  // ]
  const arrayformated = await Promise.all(
    result.map(async (product, index) => {
      if (index < 11) {
        // llamada al api para taraer el nombre del producto
        const name = await getProduct(product._id);
          return {
            total: product.total,
            name: await name,
          };
      }
    })
  );
  // ordenar de mayor a menor 
  arrayformated.sort(function (a, b) {
    if (a.total < b.total) {
      return 1;
    }
    if (a.total > b.total) {
      return -1;
    }
    return 0;
});
  // se sustitue por el arrar a mostrar en el front
  commit("setDashboardProperti", {
    properti: "listProductFavorites",
    value: arrayformated.filter((el) => el != null),
  });
}

export const onFilterAplicatesList = async({commit,getters},{dateOne="",dateTwo=""})=>{
  // intentare explicar esto
  // toma la lista inicial para no hacer otra llamada al api 
  const originalList =getters.getDasboardData.listProductsApplicationsResponseFilter
  // El array de los productos tiene denro otro array que contiene la fecha y el total de los productos que se agregaron a aplicados que
// Ejemplo
  // {
  //   productoid,
  //   array[
  //     {
  //       date:"00-00-00",
  //       total:2
  //     },
  //     {
  //       date:"00-00-01",
  //       total:5
  //     }
  //     ...
  //   ]
  // }
  // primero se recorre la lista de productos
  const result =  originalList.map(
    product => {
      // contador que me ara saber cuantos veces se agrego a favoritos en las fechas indicadas
      let totalAplicatesInDatesFilter =0
      // se recorre el array de fechas del producto 
      product.dates.forEach(date => {
          // si la fecha indicada en el array cumple con la condicion del filtro entonces suma al contador las veces que se agrego a favoritos
          if(new Date(dateOne).getTime() <= new Date(date.date).getTime() && new Date(dateTwo).getTime() >= new Date(date.date).getTime()){
            totalAplicatesInDatesFilter+= date.total
          }
      })
      // terminando de recorrer las fechas se regresa un objeto con el id del producto y el total de la suma entre anbas fechas 
      return {
        _id:product._id,
        total:totalAplicatesInDatesFilter,        
      }
    }
  )
  // obtengo como resultado un array de los totales entre las fechas de filtro y el id del producto y el total de la sum
  // Ejemplo:
  // [
  //   {_id:"aafasdasdadsad",total:50},{_id:"adsadqrtegfhgfgh",total:40},{_id:"aafasdasdadsad",total:50}
  // ]
  const arrayformated = await Promise.all(
    result.map(async (product, index) => {
      if (index < 11) {
        // llamada al api para taraer el nombre del producto
        const name = await getProduct(product._id);
          return {
            total: product.total,
            name: await name,
          };
      }
    })
  );
  // ordenar de mayor a menor 
  arrayformated.sort(function (a, b) {
    if (a.total < b.total) {
      return 1;
    }
    if (a.total > b.total) {
      return -1;
    }
    return 0;
    });
  // se sustitue por el arrar a mostrar en el front
  commit("setDashboardProperti", {
    properti: "listProductsApplications",
    value: arrayformated.filter((el) => el != null),
  });
}


const getProduct = async (id) => {
  let requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  const response = await fetch(
    `${baseUrl}/api/product/one/${id}`,
    requestOptions
  );
  const result = await response.json();
  if(!result.errors){  
    return result.product.name;
  }
  else{
    console.log("un producto al que intentas aceder no existe, consulte al desarollador ")
  }
};

