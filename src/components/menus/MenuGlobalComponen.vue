<template>
  <div 
    :class="isOpen?'max-w-17 min-w-17':'max-w-48px'"
    class="w-full">
      <div 
      class="w-full "
      v-if="isOpen">
      <div class="h-screen w-full">
      <div class="w-full max-w-17 h-full bg-1d overflow-auto ">
      <div class="h-5/6 overflow-auto">
     <div class="flex  justify-between py-4 bg-f5">
        <div 
            class="w-4 h-4 cursor-pointer"></div>
        <div 
             @click="onChangeViewMenu()" 
            class="w-4 h-4 cursor-pointer mr-4">
                <img src="../../assets/menu.svg" alt="">
            </div>
      </div>
      <div class="flex justify-evenly items-center mx-6 mt-10">          
          <div class="w-full h-20 max-h-32px max-w-170px ">
              <img src="../../assets/Logo.svg" alt="">              
          </div>
          <div class="w-4 h-4 ">
              <img src="../../assets/dropdown.svg" alt="">              
          </div>
      </div>
      <div 
            @click="goTo(typesViews.dashboard )"
            class="flex justify-start items-center px-6 mt-8 py-4 cursor-pointer"
            :class="(getVieWindow===typesViews.dashboard)?'bg-white':'bg-1d'"
        >
          <div 
            class="h-4 w-4 ">
            <div v-if="getVieWindow===typesViews.dashboard">
                <img src="../../assets/menu_dashboard.svg" alt=""> 
            </div>
            <div v-else>
                 <img src="../../assets/menu_dashboard_B.svg" alt=""> 
            </div>
            </div>
          <div class="mx-2">
              <p 
              :class="(getVieWindow===typesViews.dashboard)?'text-1d':'text-white'"
              class="">Dashboard</p>
          </div>
      </div>
      <div 
            @click="goTo(typesViews.users )"
            class="flex justify-start items-center px-6 mt-5 py-4 cursor-pointer"
            :class="(getVieWindow===typesViews.users)?'bg-white':'bg-1d'"
        >
          <div 
            class="h-4 w-4 rounded-full">
            <div v-if="getVieWindow===typesViews.users">
                <img src="../../assets/menu_usuarios_B.svg" alt=""> 
            </div>
            <div v-else>
                 <img src="../../assets/menu_usuarios.svg" alt=""> 
            </div>
            </div>
          <div class="mx-2">
              <p 
              :class="(getVieWindow===typesViews.users)?'text-1d':'text-white'"
              class="">Usuarios</p>
          </div>
      </div>
      <div 
            @click="goTo(typesViews.products )"
            class="flex justify-start items-center px-6 mt-5 py-4 cursor-pointer"
            :class="(getVieWindow===typesViews.products)?'bg-white':'bg-1d'"
        >
          <div 
            class="h-4 w-4 rounded-full">
            <div v-if="getVieWindow===typesViews.products">
                <img src="../../assets/menu_seriesyproductos_B.svg" alt=""> 
            </div>
            <div v-else>
                 <img src="../../assets/menu_seriesyproductos.svg" alt=""> 
            </div>
            </div>
          <div class="mx-2">
              <p 
              :class="(getVieWindow===typesViews.products)?'text-1d':'text-white'"
              class="">Series y Productos</p>
          </div>
      </div>
      <div 
            @click="goTo(typesViews.onboarding )"
            class="flex justify-start items-center px-6 mt-5 py-4 cursor-pointer"
            :class="(getVieWindow===typesViews.onboarding)?'bg-white':'bg-1d'"
        >
          <div 
            class="h-4 w-4 rounded-full">
            <div v-if="getVieWindow===typesViews.onboarding">
                <img src="../../assets/menu_onboarding_B.svg" alt=""> 
            </div>
            <div v-else>
                 <img src="../../assets/menu_onboarding.svg" alt=""> 
            </div>
            </div>
          <div class="mx-2">
              <p 
              :class="(getVieWindow===typesViews.onboarding)?'text-1d':'text-white'"
              class="">Onboarding</p>
          </div>
      </div>
      <div 
            @click="goTo(typesViews.stores )"
            class="flex justify-start items-center px-6 mt-5 py-4 cursor-pointer"
            :class="(getVieWindow===typesViews.stores)?'bg-white':'bg-1d'"
        >
          <div 
            class="h-4 w-4 rounded-full">
            <div v-if="getVieWindow===typesViews.stores">
                <img src="../../assets/menu_tiendas_B.svg" alt=""> 
            </div>
            <div v-else>
                 <img src="../../assets/menu_tiendas.svg" alt=""> 
            </div>
            </div>
          <div class="mx-2">
              <p 
              :class="(getVieWindow===typesViews.stores)?'text-1d':'text-white'"
              class="">Tendas</p>
          </div>
      </div>
      <div 
            @click="goTo(typesViews.admins )"
            class="flex justify-start items-center px-6 mt-5 py-4 cursor-pointer"
            :class="(getVieWindow===typesViews.admins)?'bg-white':'bg-1d'"
        >
          <div 
            class="h-4 w-4 rounded-full">
            <div v-if="getVieWindow===typesViews.admins">
                <img src="../../assets/menu_administracion_B.svg" alt=""> 
            </div>
            <div v-else>
                 <img src="../../assets/menu_administracion.svg" alt=""> 
            </div>
            </div>
          <div class="mx-2">
              <p 
              :class="(getVieWindow===typesViews.admins)?'text-1d':'text-white'"
              class="">Administradores</p>
          </div>
      </div>
      </div>
      <div class="h-1/6  overflow-auto ">      
          <div class="h-full w-full flex items-end ">          
              <div class="w-full">
                  <div class="flex w-full bg-black py-4">
                  <div class="mx-4"><img src="../../assets/perfil.svg" alt=""></div>
                  <div><p class="text-white text-sm">Nombre de usuario</p></div>
              </div>
              <div class="w-full flex justify-center">
                   <button class="text-xs text-white py-4 focus:outline-none">Cerrar Sesión                       
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
     <div class="flex  justify-between pt-4 mx-4">
        <div
            @click="onChangeViewMenu()" 
            class="bg-white w-4 h-4 cursor-pointer"></div>
      </div>
      <div class="flex justify-evenly items-center mx-6 mt-10">          
          <div class=" h-20 max-h-32px"></div>
          <div class="h-4" ></div>
      </div>
      <div class="flex justify-center items-center mt-10">          
          <div class="h-4 w-4 rounded-full bg-white"></div>
          
      </div>
      <div 
        @click="goTo(typesViews.users)"
        class="flex justify-center items-center mt-10 cursor-pointer">          
          <div class="h-4 w-4 rounded-full bg-white"></div>
          
      </div>
      <div class="flex justify-center items-center mt-10">          
          <div class="h-4 w-4 rounded-full bg-white"></div>
          
      </div>
      <div class="flex justify-center items-center mt-10">          
          <div class="h-4 w-4 rounded-full bg-white"></div>
      </div>
      <div class="flex justify-center items-center mt-10">          
          <div class="h-4 w-4 rounded-full bg-white"></div>
      </div>
      <div class="flex justify-center items-center mt-10">          
          <div class="h-4 w-4 rounded-full bg-white"></div>
          
      </div>
      </div>
      <div class="h-1/6 pb-10 overflow-auto ">      
          <div class="flex h-full justify-center bottom-0 items-end">          
          <div class="h-8 w-8 rounded-full bg-white"></div>
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
            typesViews: typesViewsMenu
        }
    },
    methods: {
        ...mapActions(["onChangeViewWindow"]),
        goTo(payload) {
            this.onChangeViewWindow(payload)
        },
        onChangeViewMenu(){
            this.isOpen = !this.isOpen;
        }
    },
    computed: {
        ...mapGetters(["getVieWindow"])
    },
}
</script>

<style>

</style>