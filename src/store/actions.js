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

  module.exports = {
    getAllUsersApp,
    getAllStore,
  }