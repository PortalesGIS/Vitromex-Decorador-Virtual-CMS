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
      console.log(result.total);
      commit("setDashboardProperti", {
        properti: "totalUserRegister",
        value: result.total,
      });
    })
    .catch((error) => console.log("error", error));
};

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
  return result.product.name;
};
