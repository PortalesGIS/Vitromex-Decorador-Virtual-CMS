import { normalizeText } from "../helpers";


const baseUrl = "https://vitromex-arko-api.herokuapp.com";

export const getAllUsersApp = async ({commit})=>{
    
    await fetch(`${baseUrl}/api/user?limit=100`,{
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