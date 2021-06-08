

const setAllUsers = (state,payload) =>{
    state.listUsers = payload.users;
}

module.exports ={
    setAllUsers,
}