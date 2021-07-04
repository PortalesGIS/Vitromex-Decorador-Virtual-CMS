export const ChangeOneShop = (state,payload)=>{
    const arrayupdated = state.listStoresFilter.map(shop =>{
        if(shop._id === payload._id){
            return payload
        }
        else{
            return shop
        }
    })
    state.listStoresFilter = arrayupdated;
    state.listStores = arrayupdated;
}

export const setAllStores = (state,payload) =>{
    state.listStores = payload.shops;
}
export const setAllStoresFilter = (state,payload) =>{
    state.listStoresFilter = payload.shops;
}