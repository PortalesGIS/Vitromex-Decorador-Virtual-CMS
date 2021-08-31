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
      console.log(result)
      commit("setDashboardProperti", {
        properti: "totalspaceMoreVisited",
        value:result,
      });
    })
    .catch((error) => console.log("error", error));
};



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
