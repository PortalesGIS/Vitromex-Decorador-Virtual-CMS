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
    console.log(commit)
  }

  module.exports = {
    getAllUsersApp
  }