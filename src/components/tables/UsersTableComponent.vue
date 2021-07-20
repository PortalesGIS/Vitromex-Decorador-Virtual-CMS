<template>
  <div class="w-full bg-f5 ">
      <div class="pl-10 w-full  grid grid-cols-12 bg-1f">
          <div class="">
              <p class="text-white text-xs font-semibold py-2">No.</p></div>
          <div class="col-span-2 flex items-center justify-start">
              <p class="text-white text-xs font-semibold py-2">Nombre</p>
              <div class="">
            <img 
            @click="filterAlphabetUsers('name')"
            src="../../assets/dropdown.svg" class="px-2" alt="">
          </div>
              </div>
          <div class="col-span-2 flex items-center justify-start">
              <p class="text-white text-xs font-semibold py-2">Apellido</p>
              <div class="">
            <img 
             @click="filterAlphabetUsers('lastName')"
            src="../../assets/dropdown.svg" class="px-2" alt="">
          </div>
              </div>
          <div class="col-span-2 flex items-center justify-start">
              <p class="text-white text-xs font-semibold py-2">Correo</p>
              <div class="">
            <img  @click="filterAlphabetUsers('email')"
            src="../../assets/dropdown.svg" class="px-2" alt="">
          </div>
              </div>
          <div class="col-span-1 flex items-center justify-start">
              <p class="text-white text-xs font-semibold py-2">Pais         </p>
              <div class="">
            <img 
             @click="filterAlphabetUsers('country')"
            src="../../assets/dropdown.svg" class="px-2" alt="">
          </div>
              </div>
          <div class="col-span-2 flex items-center justify-start">
              <p class="text-white text-xs font-semibold py-2">Ciudad</p>
              <div class="">
            <img  @click="filterAlphabetUsers('city')"
            src="../../assets/dropdown.svg" class="px-2" alt="">
          </div>
              </div>
          <div class="col-span-2 flex items-center justify-start">
              <p class="text-white text-xs font-semibold py-2">Fecha de Registro</p>
              <div class="">
            <img  @click="filterAlphabetUsers('dateUserCreated')"
            src="../../assets/dropdown.svg" class="px-2" alt="">
          </div>
              </div>
      </div>
      <div class="pl-10 h-px w-full  bg-gray-400"></div>
      <div v-for="(user,index) in getAllUsers" :key="index">
           <div v-if="(index >= startData && index <= endData)">
          <div class="pl-10 grid grid-cols-12  "
           :class="(index%2)?'bg-white':''">
          <div class="">
              <p class="text-black text-xs font-normal py-2">{{index}}</p>
          </div>
          <div class="col-span-2">
              <p class="text-black text-xs font-normal py-2">{{user.name}}</p>
          </div>
          <div class="col-span-2">
              <p class="text-black text-xs font-normal py-2">{{user.lastName}}</p>
          </div>
          <div class="col-span-2">
              <p class="text-black text-xs font-normal py-2 overflow-x-hidden">{{user.email}}</p>
          </div>
          <div class="col-span-1">
              <p class="text-black text-xs font-normal py-2">{{user.country}}</p>
          </div>
          <div class="col-span-2">
              <p class="text-black text-xs font-normal py-2">{{user.city}}</p>
          </div>
          <div class="col-span-2">
              <p class="text-black text-xs font-normal py-2">{{user.dateUserCreated}}</p>
          </div>
      </div>
      </div>
      </div>
  </div>
  <div class="pl-10 py-2 flex items-center w-full  justify-between bg-1f">
     <div class="flex items-center">
          <p class="text-white font-semibold text-xs pr-2">Total de Filas:</p>
        <div class="border-2 px-1 bg-white">
            <select 
            class="text-xs w-10 pl-2   appearance-none focus:outline-none active:outline-non"
            name="" id=""
            v-model="numberDataPerPage"
            @change="changeRange"
            >
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="100000">full</option>
        </select>
        <i class="fas fa-angle-down w-2"></i>
        </div>
     </div>
     <div class="flex mr-7 items-center">
         <div>
             <p class="text-white font-semibold text-xs">{{startData}}-{{endData}},{{getAllUsers.length}}</p>
         </div>
         <div class="cursor-pointer ml-7"
            @click="backPageTable()">
            <img src="../../assets/paginador_izquierda.svg" style="width:18px; height:12px" alt="">
         </div>
         <div class="cursor-pointer ml-14"
          @click="nextPageTable">
            <img src="../../assets/paginador_derecha.svg" style="width:18px; height:12px" alt="">            
         </div>
     </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    data() {
        return {
             numberDataPerPage: 20,
      startData:0,
      endData:20,
        }
    },
    methods: {
        ...mapActions(["getAllUsersApp","filterAlphabet"]),
        async onGetAllUsers(){
            await this.getAllUsersApp();      
        },
         changeRange(){        
        this.startData = 0;
        this.endData = this.numberDataPerPage
    },
    filterAlphabetUsers(value){
      this.filterAlphabet(value)
    },
    nextPageTable(){
      if(this.startData<=-1){
        this.changeRange()
      }
      else if(this.endData>this.getAllUsers.length){
        return
      }
      else{
        this.startData = this.endData
        this.endData = parseInt(this.startData)  + parseInt(this.numberDataPerPage)
      }
    },
    backPageTable(){
      if(this.startData<=0){
        this.changeRange()
      }
      else{
        this.endData = this.startData
        this.startData =parseInt(this.endData)  - parseInt(this.numberDataPerPage)
      }
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