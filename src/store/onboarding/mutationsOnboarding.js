
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

export const addTypologieToArray =(state,payload)=>{
    state.listTypologies.push({...payload,dateCreated:new Date().toISOString().slice(0,10)})
}

export const deleteTypologieToArray = (state,payload)=>{
    payload.map(typologieId =>{
    const inde = state.listTypologiesFilter.findIndex(elm =>elm._id ===typologieId)
    if(inde>=0){
        state.listTypologiesFilter.splice(inde,1)
    }
})
}

export const addEspaceToArray =(state,payload)=>{
    state.listSpaces.push({...payload,dateCreated:new Date().toISOString().slice(0,10)})
}

export const deleteEspaceToArray = (state,payload)=>{
    payload.map(spaceID =>{
        const inde = state.listSpacesFilter.findIndex(elm =>elm._id ===spaceID)
    if(inde>=0){
        state.listSpaces.splice(inde,1)
    }
    })
}
