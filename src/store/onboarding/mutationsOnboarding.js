
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
        console.log(product._id === payload.id)
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
