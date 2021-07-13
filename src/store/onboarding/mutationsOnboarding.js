
export const setAllSpaces =(state,payload)=>{
    state.listSpaces = payload.aplications
}
export const setAllSpacesFilter =(state,payload)=>{
    state.listSpacesFilter = payload.aplications
}

export const setAllTypologies =(state,payload)=>{
    state.listTypologies = payload.typologies
}
export const setAllTypologiesFilter =(state,payload)=>{
    state.listTypologiesFilter = payload.typologies
}

export const changeOneSpace = (state,payload)=>{
    const arrayupdated = state.listSpacesFilter.map(product =>{
        if(product._id === payload.id){
            return payload
        }
        else{
            return product
        }
    })
    state.listSpacesFilter = arrayupdated;
    state.listSpaces = arrayupdated;
}

export const changeOneTypologie = (state,payload)=>{
    const arrayupdated = state.listTypologiesFilter.map(product =>{
        if(product._id === payload.id){
            return payload
        }
        else{
            return product
        }
    })
    state.listTypologiesFilter = arrayupdated;
    state.listTypologies = arrayupdated;
}
