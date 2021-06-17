const baseUrl = "https://vitromex-arko-api.herokuapp.com";

const getAllUsersApp = async ({commit})=>{
    
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

const getAllStore = async ({commit})=>{
    
    await fetch(`${baseUrl}/api/shop`,{
      method: "GET",
      headers:{
        'Content-Type': 'application/json'
      },
    })
    .then(result => result.json())
    .then(response => {
        commit("setAllStores",response)
    } )
    .catch(error => console.error('Error:', error))
    // 
  }

  const AdminLogin  = async({commit},payload)=>{
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
    .then(response => console.log("ok",response) )
    .catch(error => console.error('Error:', error))
    // 
    commit("setAdminStateLogin",payload);
  }

  const getAllproductsdb = async({commit})=>{
    await fetch(`${baseUrl}/api/product/vitromex`,{
      method: "GET",
      headers:{
        'Content-Type': 'application/json'
      },
    })
    .then(result => result.json())
    .then(response => {
        commit("setAllProduts",response.products)
        commit("setAllProdutsFilter",response.products)
    } )
    .catch(error => console.error('Error:', error))
  }

  const filterProductsForString=({commit,getters},{word=""})=>{
    word= normalizeText(word)
    const result = getters.getAllProductsFilter.filter(name =>
      normalizeText(name.name).includes(word))
    commit("setAllProduts",result)
  }

  const filterUsersForCountry = ({commit,getters},{word=""})=>{
    word= normalizeText(word)
    const result = getters.getAllUsersFilter.filter(name =>{
     return normalizeText(name.country).includes(word)}
      )
    commit("setAllUsers",{users:result})
  }
  const filterUsersForCity = ({commit,getters},{word=""})=>{
    word= normalizeText(word)
    const result = getters.getAllUsersFilter.filter(name =>{
     return normalizeText(name.city).includes(word)}
      )
    commit("setAllUsers",{users:result})
  }


  const normalizeText=(text)=>{
    return text.toUpperCase().normalize('NFD')
    .replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi,"$1$2")
    .normalize();
  }


  module.exports = {
    getAllUsersApp,
    getAllStore,
    AdminLogin,
    getAllproductsdb,
    filterProductsForString,
    filterUsersForCountry,
    filterUsersForCity
  }