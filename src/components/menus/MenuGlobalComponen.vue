<template>
  <div 
    :class="isOpen?'max-w-17 min-w-17':'max-w-48px'"
    class="w-full">
      <div 
      class="w-full "
      v-if="isOpen">
      <div class="h-screen w-full">
      <div class="w-full max-w-17 h-full bg-1d overflow-auto shadow-3xl  opacity-99">
      <div class="h-5/6 overflow-auto ">
     <div class="flex  justify-between py-4  bg-menu ">
        <div 
            class="w-4 h-4 cursor-pointer"></div>
        <div 
             @click="onChangeViewMenu()" 
            class="w-4 h-4 cursor-pointer mr-4">
                <img v-if="getPageState" src='../../assets/menu.svg' alt="">
                <img v-else src="../../assets/menu_b.svg" alt="">                
            </div>
      </div>
      <div class="flex justify-evenly items-center mx-6 mt-10 cursor-pointer"
            @click="changeVitroArko"
            >          
          <div class="w-full h-20 max-h-32px max-w-170px ">
              <img v-if="getPageState" src="../../assets/Logo.svg" alt="">              
              <img v-else class="-mt-4" src="../../assets/ARKO_LOGO.svg" alt="">              
          </div>
          <div class="w-4 h-4 ">
              <img v-if="getPageState" src="../../assets/dropdown.svg" alt="">        
              <img v-else src="../../assets/dropdown_B.svg" alt="">      
          </div>
      </div>
      <div 
            @click="goTo(typesViews.dashboard )"
            class="flex justify-start items-center px-6 mt-8 py-4 cursor-pointer"
            :class="colorSelected(typesViews.dashboard)"
        >
          <div 
            class="h-4 w-4 ">
            <div v-if="getVieWindow===typesViews.dashboard">
                <img v-if="getPageState" src="../../assets/menu_dashboard.svg" alt=""> 
                 <img v-else src="../../assets/menu_dashboard_B.svg" alt=""> 
            </div>
            <div v-else>
                 <img v-if="getPageState" src="../../assets/menu_dashboard_B.svg" alt=""> 
                  <img v-else src="../../assets/menu_dashboard.svg" alt=""> 
            </div>
            </div>
          <div class="mx-2">
              <p 
              :class="colorText(typesViews.dashboard)"
              class="monserrat ">Dashboard</p>
          </div>
      </div>
      <div 
            @click="goTo(typesViews.users )"
            class="flex justify-start items-center px-6 py-4 cursor-pointer"
             :class="colorSelected(typesViews.users)"
        >
          <div 
            class="h-4 w-4 rounded-full">
            <div v-if="getVieWindow===typesViews.users">
                <img v-if="getPageState" src="../../assets/menu_usuarios_B.svg" alt=""> 
                 <img v-else src="../../assets/menu_usuarios.svg" alt=""> 
            </div>
            <div v-else>
                 <img v-if="getPageState" src="../../assets/menu_usuarios.svg" alt=""> 
                <img v-else src="../../assets/menu_usuarios_B.svg" alt=""> 
            </div>
            </div>
          <div class="mx-2">
              <p 
              :class="colorText(typesViews.users)"
              class="monserrat ">Usuarios</p>
          </div>
      </div>
      <div 
            @click="goTo(typesViews.products )"
            class="flex justify-start items-center px-6  py-4 cursor-pointer"
            :class="colorSelected(typesViews.products)"
        >
          <div 
            class="h-4 w-4 rounded-full">
            <div v-if="getVieWindow===typesViews.products">
                <img v-if="getPageState" src="../../assets/menu_seriesyproductos_B.svg" alt=""> 
                 <img v-else src="../../assets/menu_seriesyproductos.svg" alt=""> 
            </div>
            <div v-else>
                 <img v-if="getPageState" src="../../assets/menu_seriesyproductos.svg" alt=""> 
                <img v-else src="../../assets/menu_seriesyproductos_B.svg" alt=""> 
            </div>
            </div>
          <div class="mx-2">
              <p 
              :class="colorText(typesViews.products)"
              class="monserrat ">Series y Productos</p>
          </div>
      </div>
      <div 
            @click="goTo(typesViews.onboarding )"
            class="flex justify-start items-center px-6  py-4 cursor-pointer"
            :class="colorSelected(typesViews.onboarding)"
        >
          <div 
            class="h-4 w-4 rounded-full">
            <div v-if="getVieWindow===typesViews.onboarding">
                <img v-if="getPageState" src="../../assets/menu_onboarding_B.svg" alt=""> 
                 <img v-else src="../../assets/menu_onboarding.svg" alt=""> 
            </div>
            <div v-else>
                 <img v-if="getPageState" src="../../assets/menu_onboarding.svg" alt=""> 
                <img v-else src="../../assets/menu_onboarding_B.svg" alt=""> 
            </div>
            </div>
          <div class="mx-2">
              <p 
              :class="colorText(typesViews.onboarding)"
              class="monserrat ">Onboarding</p>
          </div>
      </div>
      <div 
            @click="goTo(typesViews.stores )"
            class="flex justify-start items-center px-6  py-4 cursor-pointer"
             :class="colorSelected(typesViews.stores)"
        >
          <div 
            class="h-4 w-4 rounded-full">
            <div v-if="getVieWindow===typesViews.stores">
                <img v-if="getPageState" src="../../assets/menu_tiendas_B.svg" alt=""> 
                 <img v-else src="../../assets/menu_tiendas.svg" alt=""> 
            </div>
            <div v-else>
                 <img v-if="getPageState" src="../../assets/menu_tiendas.svg" alt=""> 
                <img v-else src="../../assets/menu_tiendas_B.svg" alt=""> 
            </div>
            </div>
          <div class="mx-2">
              <p 
              :class="colorText(typesViews.stores)"
              class="monserrat ">Tiendas</p>
          </div>
      </div>
      <div 
            @click="goTo(typesViews.admins )"
            class="flex justify-start items-center px-6  py-4 cursor-pointer"
            :class="colorSelected(typesViews.admins)"
        >
          <div 
            class="h-4 w-4 rounded-full">
            <div v-if="getVieWindow===typesViews.admins">
                <img v-if="getPageState" src="../../assets/menu_administracion_B.svg" alt=""> 
                 <img v-else src="../../assets/menu_administracion.svg" alt=""> 
            </div>
            <div v-else>
                 <img v-if="getPageState" src="../../assets/menu_administracion.svg" alt=""> 
                <img v-else src="../../assets/menu_administracion_B.svg" alt=""> 
            </div>
            </div>
          <div class="mx-2">
              <p 
              :class="colorText(typesViews.admins)"
              class="monserrat ">Administradores</p>
          </div>
      </div>
      </div>
      <div class="h-1/6  overflow-auto ">      
          <div class="h-full w-full flex items-end ">          
              <div class="w-full">
                  <div class="flex w-full bg-user-background py-4">
                  <div class="mx-4"><img src="../../assets/perfil.svg" alt=""></div>
                  <div class="flex items-center">
                      <p class="text-force-white monserrat text-sm">{{nameAdmin}}</p>
                    </div>
              </div>
              <div class="w-full flex justify-center">
                   <button 
                   @click="exit()"
                   class="text-xs moserrat-semibold text-white py-4 focus:outline-none">Cerrar Sesión                       
                   </button>
              </div>
              </div>
        </div>
      </div>
      </div>
  </div>
  </div>
  <!-- escritorio -->
      <div 
      class="w-full max-w-48px "
      v-if="!isOpen">
          <div class="w-full h-screen">
      <div class="w-full max-w-48px h-full bg-1d overflow-auto rounded-r-lg">
      <div class="h-5/6 overflow-auto">
     <div @click="onChangeViewMenu()" 
     class="flex w-full justify-center cursor-pointer items-center  py-4"
       :class="getPageState?'bg-white':'bg-black'">
        <div
            class="w-4 h-4 ">
              <img v-if="getPageState" src="../../assets/menu.svg" alt="">
              <img v-else src="../../assets/menu_b.svg" alt="">
              </div>
      </div>
      <div class="flex justify-evenly items-center mx-6 mt-10">          
          <div class=" h-20 max-h-32px"></div>
          <div class="h-4" ></div>
      </div>
      <div 
         @click="goTo(typesViews.dashboard)"
        class="flex justify-center items-center py-4 cursor-pointer "
       :class="colorSelected(typesViews.dashboard)">          
          <div class="h-4 w-4">
              <div v-if="getVieWindow===typesViews.dashboard">
                <img v-if="getPageState" src="../../assets/menu_dashboard.svg" alt=""> 
                 <img v-else src="../../assets/menu_dashboard_B.svg" alt=""> 
            </div>
            <div v-else>
                 <img v-if="getPageState" src="../../assets/menu_dashboard_B.svg" alt=""> 
                <img v-else src="../../assets/menu_dashboard.svg" alt=""> 
            </div>
          </div>
      </div>
      <div 
        @click="goTo(typesViews.users)"
        class="flex justify-center items-center py-4 cursor-pointer"
        :class="colorSelected(typesViews.users)">               
          <div class="h-4 w-4">
              <div v-if="getVieWindow===typesViews.users">
                <img v-if="getPageState" src="../../assets/menu_usuarios_B.svg" alt=""> 
                 <img v-else src="../../assets/menu_usuarios.svg" alt=""> 
            </div>
            <div v-else>
                 <img v-if="getPageState" src="../../assets/menu_usuarios.svg" alt=""> 
                <img v-else src="../../assets/menu_usuarios_B.svg" alt=""> 
            </div>
          </div>
          
      </div>
      <div class="flex justify-center items-center py-4 cursor-pointer"
       @click="goTo(typesViews.products)"
       :class="colorSelected(typesViews.products)">          
          <div class="h-4 w-4 ">
              <div v-if="getVieWindow===typesViews.products">
                <img v-if="getPageState" src="../../assets/menu_seriesyproductos_B.svg" alt=""> 
                 <img v-else src="../../assets/menu_seriesyproductos.svg" alt=""> 
            </div>
            <div v-else>
                 <img v-if="getPageState" src="../../assets/menu_seriesyproductos.svg" alt=""> 
                <img v-else src="../../assets/menu_seriesyproductos_B.svg" alt=""> 
            </div>
          </div>
      </div>
       <div class="flex justify-center items-center py-4 cursor-pointer"
       @click="goTo(typesViews.onboarding)"
       :class="colorSelected(typesViews.onboarding)">          
          <div class="h-4 w-4 ">
              <div v-if="getVieWindow===typesViews.onboarding">
                <img v-if="getPageState" src="../../assets/menu_onboarding_B.svg" alt=""> 
                 <img v-else src="../../assets/menu_onboarding.svg" alt=""> 
            </div>
            <div v-else>
                 <img v-if="getPageState" src="../../assets/menu_onboarding.svg" alt=""> 
                <img v-else src="../../assets/menu_onboarding_B.svg" alt=""> 
            </div>
          </div>
      </div>
       <div class="flex justify-center items-center py-4 cursor-pointer"
       @click="goTo(typesViews.stores)"
       :class="colorSelected(typesViews.stores)">          
          <div class="h-4 w-4 ">
              <div v-if="getVieWindow===typesViews.stores">
                <img v-if="getPageState" src="../../assets/menu_tiendas_B.svg" alt=""> 
                 <img v-else src="../../assets/menu_tiendas.svg" alt=""> 
            </div>
            <div v-else>
                 <img v-if="getPageState" src="../../assets/menu_tiendas.svg" alt=""> 
                <img v-else src="../../assets/menu_tiendas_B.svg" alt=""> 
            </div>
          </div>
      </div>
       <div class="flex justify-center items-center py-4 cursor-pointer"
       @click="goTo(typesViews.admins)"
       :class="colorSelected(typesViews.admins)">          
          <div class="h-4 w-4 ">
              <div v-if="getVieWindow===typesViews.admins">
                <img v-if="getPageState" src="../../assets/menu_administracion_B.svg" alt=""> 
                 <img v-else src="../../assets/menu_administracion.svg" alt=""> 
            </div>
            <div v-else>
                 <img v-if="getPageState" src="../../assets/menu_administracion.svg" alt=""> 
                <img v-else src="../../assets/menu_administracion_B.svg" alt=""> 
            </div>
          </div>
      </div>
      </div>
      <div class="h-1/6 pb-10 overflow-auto ">      
          <div class="flex h-full justify-center bottom-0 items-end">          
          <div class="h-8 w-8 rounded-full"
            :class="getPageState?'bg-white':'bg-black'"
          ></div>
      </div>
      </div>
      </div>
  </div>
      </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import {typesViewsMenu} from "../../types/data";
export default {
    data() {
        return {
            isOpen: true,
            typesViews: typesViewsMenu,
            nameAdmin:"Nombre del usuario"
        }
    },
    methods: {
        ...mapActions(["onChangeViewWindow","exitCms","onChangeStatePage",
        "onGetProductsFavorites",
        "onGetProductsAplicated",
        "getNmberOfUsers",
        "onGeatAllUsersDowloadAndroid",
        "onGeatAllUsersDowloadWeb",
        "onGeatAllUsersDowloadIos",
        "onGetSpacesCountersAplicateds",
        "getAllAdminsDB",
        "getAllproductsdb",
        "getAllSeriesDB",
        "getAllSpacesDB",
        "getAllStoreDB",
        "getAllTypologiesDB",
        "getAllUsersApp",
        ]),
        goTo(payload) {
            this.onChangeViewWindow(payload)
            
        },
        changeVitroArko(){
            this.onChangeStatePage(!this.getPageState)
            this.onGetProductsFavorites()
            this.onGetProductsAplicated()
            this.getNmberOfUsers()
            this.onGeatAllUsersDowloadAndroid()
            this.onGeatAllUsersDowloadWeb()
            this.onGeatAllUsersDowloadIos()
            this.onGetSpacesCountersAplicateds()

            // this.getAllAdminsDB();
            this.getAllproductsdb();
            this.getAllSeriesDB();
            this.getAllSpacesDB();
            // this.getAllStoreDB();
            // this.getAllTypologiesDB();
            this.getAllUsersApp();
        },
        onChangeViewMenu(){
            this.isOpen = !this.isOpen;
        },
         colorSelected(view){
            if(this.getVieWindow===view){
                return 'bg-menu'
            }
            else{
                return 'bg-1d'
            }
        },
        colorText(view){
            if(this.getVieWindow===view){
                return 'text-black'                
            }
            else{
                return'text-white'
            }
        },
        exit(){
            this.exitCms()
        }
    },
    computed: {
        ...mapGetters(["getVieWindow","getPageState"]),
    },
    created () {
        if (localStorage.getItem("nameUser")){
            this.nameAdmin = localStorage.getItem("nameUser")
        }
    },
}
</script>

<style>

</style>