import { normalizeText } from "../helpers";

const baseUrl = "https://vitromex-arko-api.herokuapp.com";

export const getAllAdminsDB = async ({commit})=>{
    
    await fetch(`${baseUrl}/api/admin/`,{
      method: "GET",
      headers:{
        'Content-Type': 'application/json'
      },
    })
    .then(result => result.json())
    .then(response => {
        commit("setAllAdmins",response)
        commit("setAllAdminsFilter",response)
    } )
    .catch(error => console.error('Error:', error))
    // 
  }

  export const AdminLogin  = async({commit},payload)=>{
    // TODO: consumir api
    fetch(`${baseUrl}/api/admin/login`,{
      method: "POST",
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email:payload.email,
        password:payload.password
      }),
    })
    .then(result => result.json())
    .then(response =>{
      if(response.ok){
        commit("setAdminStateLogin",response);
      }      
    })
      
    .catch(error => console.error('Error:', error))
    // 
    
  }

  export const filterAdmin= ({commit,getters},{word=""})=>{
    word= normalizeText(word)
    const result = getters.getAllAdminsFilter.filter(admin =>
      normalizeText(admin.name).includes(word) ||
      normalizeText(admin.email).includes(word) 
      )
    commit("setAllAdmins",{admins:result})
  }

  export const adminFilterDates = ({commit,getters},{dateOne="",dateTwo=""})=>{
    const result =  getters.getAllAdminsFilter.filter(
      product => {
        return new Date(dateOne).getTime() <= new Date(product.dateCreated).getTime() 
        && new Date(dateTwo).getTime() >= new Date(product.dateCreated).getTime()
      }
    )
    commit("setAllAdmins",{admins:result})
  }