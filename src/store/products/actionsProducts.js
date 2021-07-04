import { normalizeText } from "../helpers";

const baseUrl = "https://vitromex-arko-api.herokuapp.com";
// const baseUrl = "http://localhost:8080";
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