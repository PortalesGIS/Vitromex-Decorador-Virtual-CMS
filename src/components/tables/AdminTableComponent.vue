<template>
  <div class="w-full bg-f5">
    <div class="pl-10 w-full grid grid-cols-12 bg-1f">
      <div class="flex items-center justify-between bg-1f">
        <p class="text-force-white text-sm font-bold py-2">
          <input type="checkbox" />
        </p>
      </div>
      <div class="">
        <p class="text-force-white text-xs font-semibold py-2 moserrat-semibold ">No.</p>
      </div>
      <div class="col-span-2 flex items-center justify-start mr-4">
        <p class="text-force-white text-xs font-semibold py-2 moserrat-semibold ">Nombre</p>
        <i class="fas fa-angle-down px-2" style="color: white"></i>
      </div>
      <div class="col-span-2 flex items-center justify-start mr-4">
        <p class="text-force-white text-xs font-semibold py-2 moserrat-semibold ">Correo</p>
        <i class="fas fa-angle-down px-2" style="color: white"></i>
      </div>
      <div class="col-span-2 flex items-center justify-start mr-4">
        <p class="text-force-white text-xs font-semibold py-2 moserrat-semibold ">Fecha de registro</p>
        <i class="fas fa-angle-down px-2" style="color: white"></i>
      </div>
    </div>
    <div class="pl-10 h-px w-full bg-gray-400"></div>
    <div class="max-h-120 overflow-y-scroll">
    <div v-for="(user, i) in getAllAdmins" :key="i">
       <div v-if="(i >= startData && i <= endData)">
      <div class="pl-10 grid grid-cols-12" :class="i % 2 ? 'bg-white' : ''">
        <div class="col-span-1">
          <p class="text-force-black text-sm py-2 monserrat">
            <input 
            @change="selectCheckBox(user._id)"
            type="checkbox" /></p>
        </div>
        <div class="">
          <p class="text-force-black text-sm py-2 monserrat">{{ i+1 }}</p>
        </div>
        <div class="col-span-2">
          <p class="text-force-black text-sm py-2 monserrat">{{ user.name }}</p>
        </div>
        <div class="col-span-2">
          <p class="text-force-black text-sm py-2 monserrat">{{ user.email }}</p>
        </div>
        <div class="col-span-2">
          <p class="text-force-black text-sm py-2 monserrat overflow-x-hidden">
            {{ user.dateCreated }}
          </p>
        </div>
      </div>
      </div>
    </div>
    </div>
    
  </div>
  <div class="pl-10 py-2 flex items-center w-full justify-between bg-1f">
    <div class="flex items-center">
      <p class="text-force-white font-semibold text-xs pr-2">Total de Filas:</p>
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
            <option value="100000">Todo</option>
        </select>
        <i class="fas fa-angle-down w-2"></i>
      </div>
    </div>
    <div class="flex mr-7 items-center">
         <div>
             <p v-if="endData<10000" class="text-force-white font-semibold text-xs">{{startData}}-{{endData}},{{getAllAdmins.length}}</p>
             <p v-else class="text-force-white font-semibold text-xs">Todo</p>
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
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
            numberDataPerPage: 20,
            startData:0,
            endData:20,
        }
  },  
  props: {
    onSelectedAdmin: {
      type: Function,
      default: ()=>{}
    },
  },
  methods: {
    ...mapActions(["getAllAdminsDB"]),
    async onGetAllUsers() {
      await this.getAllAdminsDB();
    },
  selectCheckBox(idAdmin){  
    this.onSelectedAdmin(idAdmin)
  },
  nextPageTable(){
      if(this.startData<=-1){
        this.changeRange()
      }
      else if(this.endData>this.getAllAdmins.length){
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
    },
    changeRange(){        
        this.startData = 0;
        this.endData = this.numberDataPerPage
    },
  },
  computed: {
    ...mapGetters(["getAllAdmins"]),
  },
  created() {
    this.onGetAllUsers();
  },
};
</script>

<style scope>
</style>