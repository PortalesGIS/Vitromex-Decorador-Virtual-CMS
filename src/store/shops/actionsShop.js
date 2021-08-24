import { normalizeText } from "../helpers";

import {baseUrl} from "../../types/data"

export const getAllStoreDB = async ({commit})=>{
    
    await fetch(`${baseUrl}/api/shop/cms`,{
      method: "GET",
      headers:{
        'Content-Type': 'application/json'
      },
    })
    .then(result => result.json())
    .then(response => {
        commit("setAllStores",response)
        commit("setAllStoresFilter",response)
    } )
    .catch(error => console.error('Error:', error))
    // 
  }

  export const changeStatusShopDB = async({commit},shop) =>{
    commit("ChangeOneShop",{...shop, status: !shop.status});
    await fetch(`${baseUrl}/api/shop/chagestatus`,{
      method:"POST",
      headers:{
        "key":`${localStorage.getItem("token")}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: shop._id,
        status: !shop.status
      })
    })
    .then(result => result.json())
    .then(response =>{
      if(response.errors){
        commit("ChangeOneShop",{...shop, status:shop.status});
      } 
    })
  }

  export const filterShops= ({commit,getters},{word=""})=>{
    word= normalizeText(word)
    const result = getters.getAllStoresFilter.filter(shop =>
      normalizeText(shop.name).includes(word) ||
      normalizeText(shop.state).includes(word) ||
      normalizeText(shop.city).includes(word) ||
      normalizeText(shop.suburb).includes(word) ||
      normalizeText(shop.street).includes(word) ||
      normalizeText(shop.num).includes(word) ||
      normalizeText(shop.phone).includes(word) ||
      normalizeText(shop.country).includes(word) 
      )
     
    commit("setAllStores",{shops:result})
  }

  export const storesFilterDates = ({commit,getters},{dateOne="",dateTwo=""})=>{
    const result =  getters.getAllStoresFilter.filter(
      product => {
        return new Date(dateOne).getTime() <= new Date(product.dateCreated).getTime() 
        && new Date(dateTwo).getTime() >= new Date(product.dateCreated).getTime()
      }
    )
    commit("setAllStores",{shops:result})
  }

  export const filterAlphabetShops = ({commit,getters},payload)=>{
    const arrayd = getters.getAllStoresFilter
    if(payload.sateChange){
      arrayd.sort((a,b)=>{
        if (a[`${payload.campToFilter}`].toUpperCase() < b[`${payload.campToFilter}`].toUpperCase()) {
          return -1;
      }
      if (b[`${payload.campToFilter}`].toUpperCase() < a[`${payload.campToFilter}`].toUpperCase()) {
          return 1;
      }
      return 0;
      })
    }
    else{
      arrayd.sort((a,b)=>{
        if (a[`${payload.campToFilter}`].toUpperCase() > b[`${payload.campToFilter}`].toUpperCase()) {
          return -1;
      }
      if (b[`${payload.campToFilter}`].toUpperCase() > a[`${payload.campToFilter}`].toUpperCase()) {
          return 1;
      }
      return 0;
      })
    }
    commit("setAllStores",{shops:arrayd})
  }