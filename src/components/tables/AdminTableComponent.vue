<template>
  <div class="w-full bg-gray-100 ">
      <div class="pl-10 w-full max-w-1400px grid grid-cols-12 ">
          <div class="flex items-center justify-between">
              <p class="text-white text-sm font-bold py-2">
                  <input type="checkbox">
                  </p></div>
          <div class="">
              <p class="text-black text-sm font-bold py-2">No.</p></div>
          <div class="col-span-2 flex items-center justify-between mr-4">
              <p class="text-black text-sm font-bold py-2">Nombre</p>
                <i class="fas fa-angle-down"></i></div>
          <div class="col-span-2 flex items-center justify-between mr-4">
              <p class="text-black text-sm font-bold py-2">Correo</p>
                <i class="fas fa-angle-down"></i></div>
          <div class="col-span-2 flex items-center justify-between mr-4">
              <p class="text-black text-sm font-bold py-2">Fecha de registro</p>
                <i class="fas fa-angle-down"></i></div>
      </div>
      <div class="pl-10 h-px w-full  bg-gray-400"></div>
      <div v-for="(user,i) in getAllAdmins" :key="i">
          <div class="pl-10 grid grid-cols-12 max-w-1400px "
           :class="(i%2)?'bg-white':''">
           <div class="col-span-1">
              <p class="text-black text-sm py-2"> <input type="checkbox"></p>
          </div>
          <div class="">
              <p class="text-black text-sm py-2">{{i}}</p>
          </div>
          <div class="col-span-2">
              <p class="text-black text-sm py-2">{{user.name}}</p>
          </div>
          <div class="col-span-2">
              <p class="text-black text-sm py-2">{{user.email}}</p>
          </div>
          <div class="col-span-2">
              <p class="text-black text-sm py-2 overflow-x-hidden">{{`00/00/00`}}</p>
          </div>
      </div>
      </div>
  </div>
  <div class="pl-10 py-2 flex items-center w-full  justify-between bg-black">
     <div class="flex items-center">
          <p class="text-white font-bold text-sm pr-2">Total de Filas:</p>
        <div class="border-2 px-1 bg-white">
            <select 
            class="ml-4 text-xl text-blackfont-bold appearance-none focus:outline-none active:outline-non"
            name="" id="">
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="10">10</option>
            <option value="1000">full</option>
        </select>
        <i class="fas fa-angle-down"></i>
        </div>
     </div>
     <div class="flex mr-10 items-center">
         <div>
             <p class="text-white font-bold">20-12,458</p>
         </div>
         <div class="mx-4 cursor-pointer">
            <i class="fas fa-angle-left fa-2x" style="color:white"></i>
         </div>
         <div class="mx-4 cursor-pointer">
            <i class="fas fa-angle-right fa-2x" style="color:white"></i>
         </div>
     </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    data() {
        return {
        }
    },
    methods: {
        ...mapActions(["getAllAdminsDB"]),
        async onGetAllUsers(){
            await this.getAllAdminsDB();      
        }
    },
    computed: {
        ...mapGetters(["getAllAdmins"])
    },
    created () {
        this.onGetAllUsers();
    },
}
</script>

<style scope>
</style>