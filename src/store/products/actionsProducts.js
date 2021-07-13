import { normalizeText } from "../helpers";
import {baseUrl} from "../../types/data"

const plataforma ="vitromex"

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
      if(response.errors){
        commit("ChangeOneProduct",{...product, available:product.available});
      } 
    })
  }

  export const updateProductDB = async ({commit},product) =>{
    if(product.render){
      updateImgDB(product.id,product.render,product.index)
    }
    if(product.name){
      updateProductCamp(product.id,"name",product.name)
    }
    if(product.textureHeight){
      updateProductCamp(product.id,"textureHeight",product.textureHeight)
    }
    if(product.textureWidth){
      updateProductCamp(product.id,"textureWidth",product.textureWidth)
    }
    if(product.spaces && product.spaces.length >= 1){
      updateProductCamp(product.id,"aplications",product.spaces)
    }
    if(product.miniatura){
      updateImgDBOne(product.id,product.miniatura,"smallPicture")
    }
    if(product.albedo){
      updateImgDBOne(product.id,product.albedo,"albedo")
    }
    if(product.normal){
      updateImgDBOne(product.id,product.normal,"normal")
    }
    console.log(commit)
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

  const updateImgDBOne = async (id,file,name)=>{
    console.log("pdate one just")
    let myHeaders = new Headers();
    myHeaders.append("key",`${localStorage.getItem("token")}`);
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
      .then(response => response.text())
      .then(result => console.log(result))
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