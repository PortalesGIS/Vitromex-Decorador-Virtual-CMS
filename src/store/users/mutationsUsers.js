
export const setAllUsers = (state,payload) =>{
    state.listUsers = payload.users;
}
export const setAllUsersFilter = (state,payload) =>{
    state.listUsersForFilter = payload.users;
}