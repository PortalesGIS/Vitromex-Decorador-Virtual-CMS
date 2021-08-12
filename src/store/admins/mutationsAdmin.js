import router from "../../router"

export const setAllAdminsFilter =(state,payload)=>{
    state.listAdminsFilter = payload.admins
}

export const setAllAdmins =(state,payload)=>{
    state.listAdmins = payload.admins
}

export const addAdmin = (state,payload)=>{
    const newList = [...state.listAdmins,payload]
    state.listAdmins = newList
    state.listAdminsFilter = newList
}
export const quitAdmin = (state,payload)=>{
    const newList = state.listAdmins.filter(admin=>payload !==admin._id)
    state.listAdmins = newList
    state.listAdminsFilter = newList
}

export const setAdminStateLogin=(state,payload)=>{
    state.adminStateLogin = payload.ok;
    localStorage.setItem("isLogged","true");
    localStorage.setItem("nameUser",payload.name);
    localStorage.setItem("token",payload.token);
    router.push("/");
  }