import { normalizeText } from "../helpers";

import {baseUrl} from "../../types/data"

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

  export const filterSeries= ({commit,getters},{word=""})=>{
    word= normalizeText(word)
    const result = getters.getAllSeriesFilter.filter(serie =>
      normalizeText(serie.name).includes(word) 
      )
    commit("setAllSeries",{serie:result})
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

  export const UpdateSerieImgDB = async ({commit},payload) =>{
    let myHeaders = new Headers();
    myHeaders.append("key",`${localStorage.getItem("token")}`);
    let formdata = new FormData();
    formdata.append("id", payload.id);
    formdata.append("file", payload.file);
    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };
    fetch(`${baseUrl}/api/series/upload-img`, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
      console.log(commit)
  }

  export const filterAlphabetSeries = ({commit,getters},payload)=>{
    const arrayd = getters.getAllSeriesFilter
    arrayd.sort((a,b)=>{
      if (a[`${payload}`].toUpperCase() < b[`${payload}`].toUpperCase()) {
        return -1;
    }
    if (b[`${payload}`].toUpperCase() < a[`${payload}`].toUpperCase()) {
        return 1;
    }
    return 0;
    })
    commit("setAllSeries",{serie:arrayd})
  }