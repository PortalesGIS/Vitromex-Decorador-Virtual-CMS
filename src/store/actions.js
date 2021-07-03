const baseUrl = "https://vitromex-arko-api.herokuapp.com";
// const baseUrl = "http://localhost:8080";
const plataforma ="vitromex"

// Gets DB
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

export const getAllSeriesDB = async ({commit})=>{
    
    await fetch(`${baseUrl}/api/series/cms`,{
      method: "GET",
      headers:{
        'Content-Type': 'application/json'
      },
    })
    .then(result => result.json())
    .then(response => {
        commit("setAllSeries",response)
        commit("setAllSeriesFilter",response)
    } )
    .catch(error => console.error('Error:', error))
     
  }

export const getAllTypologiesDB = async ({commit})=>{
    
    await fetch(`${baseUrl}/api/onboarding/typologies/cms`,{
      method: "GET",
      headers:{
        'Content-Type': 'application/json'
      },
    })
    .then(result => result.json())
    .then(response => {
        commit("setAllTypologies",response)
        commit("setAllTypologiesFilter",response)
    } )
    .catch(error => console.error('Error:', error))
     
  }

export const getAllSpacesDB = async ({commit})=>{
    
    await fetch(`${baseUrl}/api/onboarding/aplications`,{
      method: "GET",
      headers:{
        'Content-Type': 'application/json'
      },
    })
    .then(result => result.json())
    .then(response => {
        commit("setAllSpaces",response)
        commit("setAllSpacesFilter",response)
    } )
    .catch(error => console.error('Error:', error))
     
  }
  // 

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

  export const getAllproductsdb = async({commit})=>{
    await fetch(`${baseUrl}/api/product/${plataforma}/cms`,{
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

  // FILTROS

  export const filterProductsForString=({commit,getters},{word=""})=>{
    word= normalizeText(word)
    const result = getters.getAllProductsFilter.filter(product =>
      normalizeText(product.name).includes(word) || 
      normalizeText(product.color).includes(word) || 
      normalizeText(product.finish).includes(word) ||
      normalizeText(product.typologies).includes(word) ||
      normalizeText(product.sized).includes(word) 
      )  
    commit("setAllProduts",result)
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

  export const filterAdmin= ({commit,getters},{word=""})=>{
    word= normalizeText(word)
    const result = getters.getAllAdminsFilter.filter(shop =>
      normalizeText(shop.name).includes(word) ||
      normalizeText(shop.email).includes(word) 
      )
    commit("setAllAdmins",{admins:result})
  }

  export const filterSeries= ({commit,getters},{word=""})=>{
    word= normalizeText(word)
    const result = getters.getAllSeriesFilter.filter(serie =>
      normalizeText(serie.name).includes(word) 
      )
    commit("setAllSeries",{serie:result})
  }

  export const filterSpaces= ({commit,getters},{word=""})=>{
    word= normalizeText(word)
    const result = getters.getAllSpacesFilter.filter(serie =>
      normalizeText(serie.name).includes(word) 
      )
    commit("setAllSpaces",{aplications:result})
  }

  export const filterTypologies= ({commit,getters},{word=""})=>{
    word= normalizeText(word)
    const result = getters.getAllTypologiesFilter.filter(typologie =>
      normalizeText(typologie.name).includes(word) 
      )
    commit("setAllTypologies",{typologies:result})
  }


  export const normalizeText=(text)=>{
    return text.toUpperCase().normalize('NFD')
    .replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi,"$1$2")
    .normalize();
  }


  // FILTROS FECHAS

  export const productFilterDates = ({commit,getters},{dateOne="",dateTwo=""})=>{
    const result =  getters.getAllProductsFilter.filter(
      product => {
        console.log(new Date(dateOne).getTime() <= new Date(product.dateCreated).getTime() 
        && new Date(dateTwo).getTime() >= new Date("2021-06-20").getTime())
        return new Date(dateOne).getTime() <= new Date(product.dateCreated).getTime() 
        && new Date(dateTwo).getTime() >= new Date(product.dateCreated).getTime()
      }
    )
    console.log(result)
    commit("setAllProduts",result)
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

  export const storesFilterDates = ({commit,getters},{dateOne="",dateTwo=""})=>{
    const result =  getters.getAllStoresFilter.filter(
      product => {
        return new Date(dateOne).getTime() <= new Date(product.dateCreated).getTime() 
        && new Date(dateTwo).getTime() >= new Date(product.dateCreated).getTime()
      }
    )
    commit("setAllStores",{shops:result})
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

  export const seriesFilterDates = ({commit,getters},{dateOne="",dateTwo=""})=>{
    const result =  getters.getAllSeriesFilter.filter(
      product => {
        return new Date(dateOne).getTime() <= new Date(product.dateCreated).getTime() 
        && new Date(dateTwo).getTime() >= new Date(product.dateCreated).getTime()
      }
    )
    commit("setAllSeries",{serie:result})
  }
