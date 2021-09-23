import { normalizeText } from "../helpers";
import {baseUrl} from "../../types/data"


export const getAllSeriesDB = async ({commit,getters})=>{
  let platform="";
  if(getters.getPageState){
     platform =""
  }  
  else{
     platform = "arko"
  }
    await fetch(`${baseUrl}/api/series/cms/${platform}`,{
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

  export const UpdateSerieImgDB = async ({commit,getters},payload) =>{
    // actualizar en local
      const series =  getters.getAllSeriesFilter
      console.log(series)
      const seriesUpdates = []
      series.forEach((ser)=>{
        if(ser._id === payload.id){
          seriesUpdates.push({...ser, img:URL.createObjectURL(payload.file)})          
        }
        else{
          seriesUpdates.push(ser)
        }
      })
      commit('setAllSeries',{serie:seriesUpdates})
      commit('setAllSeriesFilter',{serie:seriesUpdates})
      
    // 
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
    commit("setAllSeries",{serie:arrayd})
  }