<template>
<div v-if="sesionExpired" class="absolute top-0 z-50 w-screen flex justify-center">
  <div class="bg-white flex">
    <p class="text-3xl">¡Sesion expirada iniciar sesión de nuevo!</p>
    <button  class="text-3xl pl-2 font-bold"
    @click="exitCms"
    > Aqui</button>
  </div>
</div>
  <div v-else class="flex h-screen w-screen">
    <MenuGlobalComponenVue/>
    <div class="w-full h-full">
      
      <div 
        v-if="getVieWindow===windows.dashboard"
        class="w-full h-full">
        <DashboradComponentVue/>
      </div>    
      <div 
        v-if="getVieWindow===windows.users"
        class="w-full h-full">
        <UsersComponentVue/>
      </div>    
      <div 
        v-if="getVieWindow===windows.products"
        class="w-full fixed h-full">
        <ProductsComponentVue/>
      </div>    
      <div 
        v-if="getVieWindow===windows.onboarding"
        class="w-full h-full ">
        <OnboardingComponentVue/>
      </div>    
      <div 
        v-if="getVieWindow===windows.stores"
        class="w-full h-full">
        <StoresComponentVue/>
      </div>    
      <div 
        v-if="getVieWindow===windows.admins"
        class="w-full h-full">
        <AdmisComponentVue/>
      </div>    
    </div>        
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import MenuGlobalComponenVue from '../../components/menus/MenuGlobalComponen.vue'
import AdmisComponentVue from '../../components/sections/AdmisComponent.vue'
import DashboradComponentVue from '../../components/sections/DashboradComponent.vue'
import OnboardingComponentVue from '../../components/sections/OnboardingComponent.vue'
import ProductsComponentVue from '../../components/sections/ProductsComponent.vue'
import StoresComponentVue from '../../components/sections/StoresComponent.vue'
import UsersComponentVue from '../../components/sections/UsersComponent.vue'
import {baseUrl, typesViewsMenu} from '../../types/data'
export default {
  components: {
    MenuGlobalComponenVue,
    DashboradComponentVue,
    UsersComponentVue,
    ProductsComponentVue,
    StoresComponentVue,
    AdmisComponentVue,
    OnboardingComponentVue
  },
  data() {
    return {
      windows:typesViewsMenu,
      sesionExpired:false
    }
  },
  methods: {
    ...mapActions(["exitCms"]),
    isSesionExpired(){
      fetch(`${baseUrl}/api/admin/validatejwt`,{
      method: "POST",
      headers:{
        'Content-Type': 'application/json',
        "key":`${localStorage.getItem("token")}`,
      },  
    })
    .then(result => result.json())
    .then(response =>{     
      if(response.isNewToken){
       localStorage.setItem("token",response.newToken);
       this.sesionExpired =false
      }else{
        if(response.error){
          this.exitCms()
          this.sesionExpired = true
        }
      }
    })
    }
  },
  computed: {
    ...mapGetters(["getVieWindow"]),
  },
  created () {
    this.isSesionExpired()
  },
}
</script>

<style>

</style>