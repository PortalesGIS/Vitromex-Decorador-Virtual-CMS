<template>
  <div class="mt-10 w-full bg-gray-100 ">
      <div class="pl-10 w-full max-w-1400px grid grid-cols-12 ">
          <div class="">
              <p class="text-black text-sm font-bold py-2">No.</p></div>
          <div class="col-span-2 flex items-center justify-between mr-4">
              <p class="text-black text-sm font-bold py-2">Nombre</p>
                <i class="fas fa-angle-down"></i></div>
          <div class="col-span-2 flex items-center justify-between mr-4">
              <p class="text-black text-sm font-bold py-2">Apellido</p>
                <i class="fas fa-angle-down"></i></div>
          <div class="col-span-2 flex items-center justify-between mr-4">
              <p class="text-black text-sm font-bold py-2">Correo</p>
                <i class="fas fa-angle-down"></i></div>
          <div class="col-span-1 flex items-center justify-between mr-4">
              <p class="text-black text-sm font-bold py-2">Pais         </p>
                <i class="fas fa-angle-down"></i></div>
          <div class="col-span-2 flex items-center justify-between mr-4">
              <p class="text-black text-sm font-bold py-2">Ciudad</p>
                <i class="fas fa-angle-down"></i></div>
          <div class="col-span-2 flex items-center justify-between mr-4">
              <p class="text-black text-sm font-bold py-2">Fecha de Registro</p>
                <i class="fas fa-angle-down"></i></div>
      </div>
      <div class="pl-10 h-px w-full  bg-gray-400"></div>
      <div v-for="(user,i) in users" :key="user.id">
          <div class="pl-10 grid grid-cols-12 max-w-1400px ">
          <div class="">
              <p class="text-black text-sm py-2">{{i}}</p>
          </div>
          <div class="col-span-2">
              <p class="text-black text-sm py-2">{{user.name}}</p>
          </div>
          <div class="col-span-2">
              <p class="text-black text-sm py-2">{{user.lastName}}</p>
          </div>
          <div class="col-span-2">
              <p class="text-black text-sm py-2 overflow-x-hidden">{{user.email}}</p>
          </div>
          <div class="col-span-1">
              <p class="text-black text-sm py-2">{{user.country}}</p>
          </div>
          <div class="col-span-2">
              <p class="text-black text-sm py-2">{{user.city}}</p>
          </div>
          <div class="col-span-2">
              <p class="text-black text-sm py-2">01/10/2020</p>
          </div>
      </div>
      </div>
  </div>
  <div class="pl-10 mt-2 flex items-center w-full max-w-1400px justify-between">
     <div class="flex">
          <p class="text-black font-bold text-sm pr-2">Total de Filas:</p>
        <div class="border-2 px-1">
            <select 
            class="ml-4 text-xl text-black font-bold appearance-none focus:outline-none active:outline-non"
            name="" id="">
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="10">10</option>
            <option value="1000">full</option>
        </select>
        <i class="fas fa-angle-down"></i>
        </div>
     </div>
     <div class="flex mr-10">
         <div>
             <p class="text-black font-bold">20-12,458</p>
         </div>
         <div class="mx-4 cursor-pointer">
            <i class="fas fa-angle-left fa-2x" style="color:gray"></i>
         </div>
         <div class="mx-4 cursor-pointer">
            <i class="fas fa-angle-right fa-2x"></i>
         </div>
     </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    data() {
        return {
            users: [],
        }
    },
    methods: {
        ...mapActions(["getAllUsersApp"]),
        async onGetAllUsers(){
            await this.getAllUsersApp();
            this.users = this.getAllUsers;
        }
    },
    computed: {
        ...mapGetters(["getAllUsers"])
    },
    created () {
        this.onGetAllUsers();
    },
}
</script>

<style scope>
</style>