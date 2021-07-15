import { normalizeText } from "../helpers";

import {baseUrl} from "../../types/data"

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

  export const updateSpaceDB= ({commit},payload) =>{
    let myHeaders = new Headers();
    myHeaders.append("key",`${localStorage.getItem("token")}`);
    let formdata = new FormData();
    formdata.append("id", payload.id);
    formdata.append("name", payload.name);
    if(payload.file.size){
      formdata.append("file", payload.file);
      commit("changeOneSpace",{...payload,_id:payload.id, img:URL.createObjectURL(payload.file)})      
    }
    commit("changeOneSpace",{...payload,_id:payload.id  })      
    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };
    fetch(`${baseUrl}/api/onboarding/aplications/update`, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    
  }

  export const updateTypologieDB= ({commit},payload) =>{
    let myHeaders = new Headers();
    myHeaders.append("key",`${localStorage.getItem("token")}`);
    let formdata = new FormData();
    formdata.append("id", payload.id);
    formdata.append("name", payload.name);
    if(payload.file.size){
      formdata.append("file", payload.file);
      commit("changeOneTypologie",{...payload,_id:payload.id, img:URL.createObjectURL(payload.file)})      
    }
    commit("changeOneTypologie",{...payload,_id:payload.id  })      
    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };
    fetch(`${baseUrl}/api/onboarding/typologies/update`, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    
  }

  export const createSpace =({commit},payload)=>{
    let myHeaders = new Headers();
    myHeaders.append("key",`${localStorage.getItem("token")}`);
    let formdata = new FormData();
    formdata.append("name", payload.name);
    formdata.append("file", payload.file);    
    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };
    fetch(`${baseUrl}/api/onboarding/aplications/create`, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
      commit("addEspaceToArray",payload)
  }

  export const createTypologie =({commit},payload)=>{
    let myHeaders = new Headers();
    myHeaders.append("key",`${localStorage.getItem("token")}`);
    let formdata = new FormData();
    formdata.append("name", payload.name);
    formdata.append("file", payload.file);    
    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };
    fetch(`${baseUrl}/api/onboarding/typologies/create`, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
      commit("addTypologieToArray",payload)
  }

  export const deleteAplications = ({commit},payload)=>{
    payload.map(async (aplication) => {
      let myHeaders = new Headers();
      myHeaders.append("key",`${localStorage.getItem("token")}`);
      myHeaders.append("Content-Type",`application/json`);
      let requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        body:  JSON.stringify({
          id: aplication,
        }),
        redirect: 'follow'
      };
      fetch(`${baseUrl}/api/onboarding/aplications/delete`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    })
    commit("deleteEspaceToArray",payload)
  }

  export const deleteTypologies = ({commit},payload)=>{
    payload.map(async (typologie) => {
      let myHeaders = new Headers();
      myHeaders.append("key",`${localStorage.getItem("token")}`);
      myHeaders.append("Content-Type",`application/json`);
      let requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        body:  JSON.stringify({
          id: typologie,
        }),
        redirect: 'follow'
      };
      fetch(`${baseUrl}/api/onboarding/typlogies/delete`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    })
    commit("deleteTypologieToArray",payload) 
  }
