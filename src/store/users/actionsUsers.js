import { normalizeText } from "../helpers";


import {baseUrl} from "../../types/data"

export const getAllUsersApp = async ({commit,getters})=>{
  let platform="";
  if(getters.getPageState){
     platform =""
  }  
  else{
     platform = "arko"
  }
    await fetch(`${baseUrl}/api/user/${platform}`,{
      method: "GET",
      headers:{
        'Content-Type': 'application/json'
      },
    })
    .then(result => result.json())
    .then(response => {
        commit("setAllUsers",response)
        commit("setAllUsersFilter",response)
    } )
    .catch(error => console.error('Error:', error))
    // 
  }

  export const filterUsersForCountry = ({commit,getters},{word=""})=>{
    word= normalizeText(word)
    const result = getters.getAllUsersFilter.filter(name =>
      normalizeText(name.city).includes(word) ||
      normalizeText(name.name).includes(word) ||
      normalizeText(name.country).includes(word) ||
      normalizeText(name.email).includes(word) ||
      normalizeText(name.lastName).includes(word)
      )
    commit("setAllUsers",{users:result})
  }
  
  export const filterUsersForCity = ({commit,getters},{word=""})=>{
    word= normalizeText(word)
    const result = getters.getAllUsersFilter.filter(name =>
      normalizeText(name.city).includes(word) ||
      normalizeText(name.country).includes(word) ||
      normalizeText(name.email).includes(word) ||
      normalizeText(name.lastName).includes(word)
      )
    commit("setAllUsers",{users:result})
  }

    
  export const userFilterDates = ({commit,getters},{dateOne="",dateTwo=""})=>{
    const result =  getters.getAllUsersFilter.filter(
      product => {
        return new Date(dateOne).getTime() <= new Date(product.dateUserCreated).getTime() 
        && new Date(dateTwo).getTime() >= new Date(product.dateUserCreated).getTime()
      }
    )
    commit("setAllUsers",{users:result})
  }

  export const filterAlphabet = ({commit,getters},payload)=>{
    const arrayd = getters.getAllUsersFilter
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

    commit("setAllUsers",{users:arrayd})
  }