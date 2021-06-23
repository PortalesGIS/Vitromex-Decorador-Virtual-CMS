<template>
  <div 
    :class="isOpen?'max-w-17':'max-w-48px'"
    class="w-full">
      <div 
      class="w-full "
      v-if="isOpen">
      <div class="h-screen w-full">
      <div class="w-full max-w-17 h-full bg-black overflow-auto rounded-r-lg">
      <div class="h-5/6 overflow-auto">
     <div class="flex  justify-between pt-4 mx-4">
        <div 
             @click="onChangeViewMenu()" 
            class="bg-white w-4 h-4 cursor-pointer"></div>
        <div 
             @click="onChangeViewMenu()" 
            class="bg-white w-4 h-4 cursor-pointer"></div>
      </div>
      <div class="flex justify-evenly items-center mx-6 mt-10">          
          <div class="w-full h-20 max-h-32px max-w-170px bg-white"></div>
          <div class="w-4 h-4 bg-white" ></div>
      </div>
      <div 
            @click="goTo(typesViews.dashboard )"
            class="flex justify-start items-center px-6 mt-5 py-4 cursor-pointer"
            :class="(getVieWindow===typesViews.dashboard)?'bg-white':'bg-black'"
        >
          <div 
            :class="(getVieWindow===typesViews.dashboard)?'bg-black':'bg-white'"
            class="h-4 w-4 rounded-full"></div>
          <div class="mx-2">
              <p 
              :class="(getVieWindow===typesViews.dashboard)?'text-black':'text-white'"
              class="">Dashboard</p>
          </div>
      </div>
      <div 
            @click="goTo(typesViews.users )"
            class="flex justify-start items-center px-6 mt-5 py-4 cursor-pointer"
            :class="(getVieWindow===typesViews.users)?'bg-white':'bg-black'"
        >
          <div 
            :class="(getVieWindow===typesViews.users)?'bg-black':'bg-white'"
            class="h-4 w-4 rounded-full"></div>
          <div class="mx-2">
              <p 
              :class="(getVieWindow===typesViews.users)?'text-black':'text-white'"
              class="">Usuarios</p>
          </div>
      </div>
      <div 
            @click="goTo(typesViews.products )"
            class="flex justify-start items-center px-6 mt-5 py-4 cursor-pointer"
            :class="(getVieWindow===typesViews.products)?'bg-white':'bg-black'"
        >
          <div 
            :class="(getVieWindow===typesViews.products)?'bg-black':'bg-white'"
            class="h-4 w-4 rounded-full"></div>
          <div class="mx-2">
              <p 
              :class="(getVieWindow===typesViews.products)?'text-black':'text-white'"
              class="">Productos</p>
          </div>
      </div>
      <div 
            @click="goTo(typesViews.onboarding )"
            class="flex justify-start items-center px-6 mt-5 py-4 cursor-pointer"
            :class="(getVieWindow===typesViews.onboarding)?'bg-white':'bg-black'"
        >
          <div 
            :class="(getVieWindow===typesViews.onboarding)?'bg-black':'bg-white'"
            class="h-4 w-4 rounded-full"></div>
          <div class="mx-2">
              <p 
              :class="(getVieWindow===typesViews.onboarding)?'text-black':'text-white'"
              class="">Onboarding</p>
          </div>
      </div>
      <div 
            @click="goTo(typesViews.stores )"
            class="flex justify-start items-center px-6 mt-5 py-4 cursor-pointer"
            :class="(getVieWindow===typesViews.stores)?'bg-white':'bg-black'"
        >
          <div 
            :class="(getVieWindow===typesViews.stores)?'bg-black':'bg-white'"
            class="h-4 w-4 rounded-full"></div>
          <div class="mx-2">
              <p 
              :class="(getVieWindow===typesViews.stores)?'text-black':'text-white'"
              class="">Tendas</p>
          </div>
      </div>
      <div 
            @click="goTo(typesViews.admins )"
            class="flex justify-start items-center px-6 mt-5 py-4 cursor-pointer"
            :class="(getVieWindow===typesViews.admins)?'bg-white':'bg-black'"
        >
          <div 
            :class="(getVieWindow===typesViews.admins)?'bg-black':'bg-white'"
            class="h-4 w-4 rounded-full"></div>
          <div class="mx-2">
              <p 
              :class="(getVieWindow===typesViews.admins)?'text-black':'text-white'"
              class="">Administradores</p>
          </div>
      </div>
      </div>
      <div class="h-1/6 pb-10 overflow-auto ">      
          <div class="flex h-full justify-start mx-6 bottom-0 items-end">          
          <div class="h-8 w-8 rounded-full bg-white"></div>
          <div class="mx-2">
              <p class="text-white">NOMBRE DEL ADMIN</p>
              <button class="text-xs text-green-400">CERRAR SESIÓN</button>
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
      <div class="w-full max-w-48px h-full bg-black overflow-auto rounded-r-lg">
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