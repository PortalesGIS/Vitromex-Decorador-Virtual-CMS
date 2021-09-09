import {baseUrl} from "../../types/data"


export const onGeatAllFotmatsDB = async({commit})=>{
    await fetch(`${baseUrl}/api/formats/`,{
        method: "GET",
        headers:{
            'Content-Type': 'application/json'
        },
    })
    .then(result => result.json())
    .then(response => {
        commit("setListAllFormats",response.formats)
    } )
    .catch(error => console.error('Error:', error))
    // 
}

export const UpdateFormats = (commit,formatsToUpdate) =>{
    formatsToUpdate.forEach(format=>{
        let myHeaders = new Headers();
        myHeaders.append("key",`${localStorage.getItem("token")}`);
        myHeaders.append("Content-Type",`application/json`);
        let requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body:  JSON.stringify({
            id: format.id,
            rounded:format.rounded
          }),
          redirect: 'follow'
        };
        fetch(`${baseUrl}/api/formats/update`, requestOptions)
          .then(response => response.json())
          .then((result) =>{
            if(result.error){
                alert("NO Actualizado")   
            }
          }) 
          .catch(error => console.log('error', error));
    })
    console.log(commit)
}