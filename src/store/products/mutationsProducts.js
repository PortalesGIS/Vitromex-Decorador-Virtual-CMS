export const ChangeOneProduct = (state,payload)=>{
    const arrayupdated = state.productsForFilter.map(product =>{
        if(product._id === payload._id){
            return payload
        }
        else{
            return product
        }
    })
    state.productsForFilter = arrayupdated;
    state.products = arrayupdated;
}

export const updateProduct = (state, payload)=>{
    const arrayupdated = state.productsForFilter.map(product =>{
        if(product._id === payload.id){
            return {...product,[payload.camp]:payload.value}
        }
        else{
            return product
        }
    }) 
    state.productsForFilter = arrayupdated;
    state.products = arrayupdated;
}

export const setAllProduts = (state,payload) =>{
    state.products = payload;
}
export const setAllProdutsFilter = (state,payload) =>{
    state.productsForFilter =payload;
}