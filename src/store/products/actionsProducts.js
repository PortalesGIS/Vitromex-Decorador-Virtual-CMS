import { normalizeText } from "../helpers";
import {baseUrl} from "../../types/data"

const vitromex ="vitromex"
const arko = "arko"

export const getAllproductsdb = async({commit,getters})=>{
  let platform="";
  if(getters.getPageState){
     platform = vitromex
  }  
  else{
     platform = arko

  }
    await fetch(`${baseUrl}/api/product/${platform}/cms`,{
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

  export const changeAvailableProductDB = async({commit},product) =>{
    commit("ChangeOneProduct",{...product, available: !product.available});
    await fetch(`${baseUrl}/api/product/chagestatus`,{
      method:"POST",
      headers:{
        "key":`${localStorage.getItem("token")}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: product._id,
        available: !product.available
      })
    })
    .then(result => result.json())
    .then(response =>{
      console.log(response)
      if(response.error){
        commit("ChangeOneProduct",{...product, available:product.available});
        alert('El servidor no puedo activar el producto (recarga la página para traer los cambios)')
      } 
    })
  }

  export const changeStatusIsNewProductDB = async ({commit},product)=>{
    commit("ChangeOneProduct",{...product, isNewProduct: !product.isNewProduct});
    let myHeaders = new Headers();
    myHeaders.append("key",`${localStorage.getItem("token")}`);
    myHeaders.append("Content-Type",`application/json`);
    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({
        id: product._id,
        isNew: !product.isNewProduct
      }),
      redirect: 'follow'
    };
    fetch(`${baseUrl}/api/product/chagestatusNew`, requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result)
        if(result.errors){
          commit("ChangeOneProduct",{...product, isNewProduct:product.isNewProduct});
        }
      })
      .catch(() => commit("ChangeOneProduct",{...product, isNewProduct:product.isNewProduct}));
  }

  export const updateProductDB = async ({commit},product) =>{
    if(product.render){
      updateImgDB(product.id,product.render,product.index)
      commit("updateProductRender",{id:product.id,render:URL.createObjectURL(product.render),index:product.index})
    }
    if(product.name){
      updateProductCamp(product.id,"name",product.name)
      commit("updateProduct",{id:product.id,camp:"name",value:product.name})
    }
    if(product.textureHeight){
      updateProductCamp(product.id,"textureHeight",product.textureHeight)
      commit("updateProduct",{id:product.id,camp:"textureHeight",value:product.textureHeight})
    }
    if(product.textureWidth){
      updateProductCamp(product.id,"textureWidth",product.textureWidth)
      commit("updateProduct",{id:product.id,camp:"textureWidth",value:product.textureWidth})
    }
    if(product.spaces && product.spaces.length >= 1){
      updateProductCamp(product.id,"aplications",product.spaces)
      commit("updateProduct",{id:product.id,camp:"aplications",value:product.spaces})
    }
    if(product.miniatura){
      updateImgDBOne(product.id,product.miniatura,"smallPicture",commit)
    }
    if(product.albedo){
      updateImgDBOne(product.id,product.albedo,"albedo",commit)
      // commit("updateProduct",{id:product.id,camp:"albedo",value:URL.createObjectURL(product.albedo)})    
    }
    if(product.normal){
      updateImgDBOne(product.id,product.normal,"normal",commit)
    }
  }

  const updateProductCamp = async(id,camp,value) =>{
    await fetch(`${baseUrl}/api/product/upload-options`,{
      method:"POST",
      headers:{
        "key":`${localStorage.getItem("token")}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: id,
        camp: camp,
        value:value
      })
    }).then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  }

  const updateImgDB = async (id,file,positionArray)=>{
    console.log("pdate one render")
    let myHeaders = new Headers();
    myHeaders.append("key",`${localStorage.getItem("token")}`);
    myHeaders.append("Access-Control-Allow-Origin",`*`);
let formdata = new FormData();
formdata.append("id", id);
formdata.append("file", file);
formdata.append("positionArray", positionArray);

    let requestOptions = {
      
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };
    fetch(`${baseUrl}/api/product/upload-img-render`, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  const updateImgDBOne = async (id,file,name,commit)=>{
    let myHeaders = new Headers();
    myHeaders.append("key",`${localStorage.getItem("token")}`);
    myHeaders.append("Access-Control-Allow-Origin",`*`);
    let formdata = new FormData();
    formdata.append("id", id);
    formdata.append("file", file);
    formdata.append("camp", name);

    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };
    fetch(`${baseUrl}/api/product/upload-img`, requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        if(result.url) {
          commit("updateProduct",{id:id,camp:name,value:result.url})    
        }
      })
      .catch(error => console.log('error', error));
  }
  
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

  export const filterAlphabetProduct = ({commit,getters},payload)=>{
    const arrayd = getters.getAllProductsFilter
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
    commit("setAllProduts",arrayd)
  }

  export const filterAplicationProduct = ({commit,getters},payload)=>{
    const arrayd = getters.getAllProductsFilter
    // if(payload.sateChange){
    const pf= [];
    const pt= [];
    arrayd.forEach(p=>{            
      if(p.aplications.find(namep => namep === payload.name)){
        pt.push(p)
      }
      else{
        pf.push(p)
      }      
    })
    const finalarray = pt.concat(pf)
    commit("setAllProduts",finalarray)
  }
  export const filterActiveProduct = ({commit,getters})=>{
    const arrayd = getters.getAllProductsFilter
    // if(payload.sateChange){
    const pf= [];
    const pt= [];
    arrayd.forEach(p=>{     
      if(p.available === true ){
        pt.push(p)
      }
      else{
        pf.push(p)
      }      
    })
    const finalarray = pt.concat(pf)
    commit("setAllProduts",finalarray)
  }
  export const filterisNewProduct = ({commit,getters})=>{
    const arrayd = getters.getAllProductsFilter
    // if(payload.sateChange){
    const pf= [];
    const pt= [];
    arrayd.forEach(p=>{     
      if(p.isNewProduct === true ){
        pt.push(p)
      }
      else{
        pf.push(p)
      }      
    })
    const finalarray = pt.concat(pf)
    commit("setAllProduts",finalarray)
  }


  export const deleteImgRender=({commit},payload)=>{
    commit("updateProductRender",{id:payload.id,render:"",index:payload.index})
    let myHeaders = new Headers();
    myHeaders.append("key",`${localStorage.getItem("token")}`);
    myHeaders.append("Access-Control-Allow-Origin",`*`);
    myHeaders.append("Content-Type",`application/json`);
    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({
        id: payload.id,
        positionImg: payload.index
      }),
      redirect: 'follow'
    };
    fetch(`${baseUrl}/api/product/deleteimg`, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }
