import {baseUrl} from "../../types/data"

export const getNmberOfUsers = async ({commit}) => {
    // let myHeaders = new Headers();
    // myHeaders.append("key",`${localStorage.getItem("token")}`);
    let requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch(`${baseUrl}/api/user/total`, requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result.total)
        commit("setDashboardProperti",{properti:"totalUserRegister", value:result.total})
      })
      .catch(error => console.log('error', error));
}

export const onGetProductsFavorites = async({commit}) =>{
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      fetch(`${baseUrl}/api/favorite/list`, requestOptions)
        .then(response => response.json())
        .then(async (result) => {
          console.log(result)
          console.log(commit)
          const arrayformated = await Promise.all(result.list.map(async(product,index)=>{
              if(index<11){
                const name = await getProduct(product._id)
            return {
               total:product.total,
               name:await name
           }
            }
         })
         )
        commit("setDashboardProperti",{properti:"listProductFavorites", value:arrayformated.filter(el => el != null)})
        })
       .catch(error => console.log('error', error));
}

export const onGetProductsAplicated = async({commit}) =>{
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      fetch(`${baseUrl}/api/counter/list`, requestOptions)
        .then(response => response.json())
        .then(async (result) => {
          console.log(result)
          console.log(commit)
          const arrayformated = await Promise.all(result.list.map(async(product,index)=>{
              if(index<11){
                const name = await getProduct(product._id)
            return {
               total:product.total,
               name:await name
           }
            }
         })
         )
        commit("setDashboardProperti",{properti:"listProductsApplications", value:arrayformated.filter(el => el != null)})
        })
       .catch(error => console.log('error', error));
}

const getProduct = async(id) =>{
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
    const response = await fetch(`${baseUrl}/api/product/one/${id}`, requestOptions)
    const result = await response.json()
    return result.product.name   
}