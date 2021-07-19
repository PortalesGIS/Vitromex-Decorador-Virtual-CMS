<template>
  <div class="w-full bg-f5 ">
      <div class="flex justify-between">
          <div class="pl-10 w-full  grid grid-cols-12 bg-1f">
          <div class="col-span-1 flex items-center justify-start mr-4">
              <p class="text-white text-xs font-semibold py-2">No.</p>
                <i class="fas fa-angle-down px-2" style="color:white"></i></div>
          <div class="col-span-2 flex items-center justify-start mr-4">
              <p class="text-white text-xs font-semibold py-2">Nombre de la Tienda</p>
                <i class="fas fa-angle-down px-2" style="color:white"></i></div>
          <div class="col-span-2 flex items-center justify-start mr-4">
              <p class="text-white text-xs font-semibold py-2">Direccion</p>
                <i class="fas fa-angle-down px-2" style="color:white"></i></div>
          <div class="col-span-2 flex items-center justify-start mr-4">
              <p class="text-white text-xs font-semibold py-2">Coordenadas</p>
                <i class="fas fa-angle-down px-2" style="color:white"></i></div>
          <div class="col-span-2 flex items-center justify-start mr-4">
              <p class="text-white text-xs font-semibold py-2">Telefono</p>
                <i class="fas fa-angle-down px-2" style="color:white"></i></div>
          <div class="col-span-2 flex items-center justify-start mr-4">
              <p class="text-white text-xs font-semibold py-2">Fecha de Registro</p>
                <i class="fas fa-angle-down px-2" style="color:white"></i></div>
      </div>
      <div class="bg-1f">
          <div class="px-1"><p class="text-white text-sm font-bold px-4 py-2">Publicar</p></div>
      </div>
      </div>
      <div class="pl-10 h-px w-full  bg-gray-400"></div>
      <div v-for="(store,index) in getAllStores" :key="index">
         <div v-if="(index >= startData && index <= endData)">
          <div class="flex justify-between"
             :class="(index%2)?'bg-white':''">
          <div class="pl-10 w-full grid grid-cols-12  ">
          <div class="col-span-1">
              <p class="text-black text-sm py-2">{{index}}</p>
          </div>
          <div class="col-span-2">
              <p class="text-black text-sm py-2">{{store.name}}</p>
          </div>
          <div class="col-span-2 ">
              <p class="text-black text-sm py-2 truncate  ">{{`${store.street} ${store.city}`}}</p>
          </div>
          <div class="col-span-2">
              <p class="text-black text-sm py-2">{{`${store.lat},${store.lng}`}}</p>
          </div>
          <div class="col-span-2">
              <p class="text-black text-sm py-2">{{store.phone}}</p>
          </div>
          <div class="col-span-2">
              <p class="text-black text-sm py-2">{{store.dateCreated}}</p>
          </div>
      </div>
        <div 
          @click="onChangeState(store)"
          class="mx-2 cursor-pointer flex items-center px-4">
                <div v-if="store.status">
                  <img src="../../assets/switch_on.svg" alt="">
                </div>
                <div v-else>
                  <img src="../../assets/switch_off.svg" alt="">                  
                </div>
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
            @change="changeRange">
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">10</option>
            <option value="100000">full</option>
        </select>
        <i class="fas fa-angle-down w-2"></i>
        </div>
     </div>
     <div class="flex mr-7 items-center">
         <div>
             <p class="text-white font-semibold text-xs">{{startData}}-{{endData}},{{getAllStores.length}}</p>
         </div>
         <div class="cursor-pointer ml-7"   @click="backPageTable()">
            <img src="../../assets/paginador_izquierda.svg" style="width:18px; height:12px" alt="">
         </div>
         <div class="cursor-pointer ml-14" @click="nextPageTable">
            <img src="../../assets/paginador_derecha.svg" style="width:18px; height:12px" alt="">            
         </div>
     </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    data() {
        return {
           numberDataPerPage: 20,
      startData:0,
      endData:20,
        }
    },
    methods: {
        ...mapActions(["getAllStoreDB","changeStatusShopDB"]),
        async onGetAllStores(){
            await this.getAllStoreDB();
        },
    onChangeState(shop){
      this.changeStatusShopDB(shop)
    },
     changeRange(){        
        this.startData = 0;
        this.endData = this.numberDataPerPage
    },
    nextPageTable(){
      if(this.startData<=-1){
        this.changeRange()
      }
      else if(this.endData>this.getAllStores.length){
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
    ...mapGetters(["getAllStores"]),
    },
    created () {
        this.onGetAllStores();
    }
}
</script>

<style scope>
.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height:24px;
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(16px);
  -ms-transform: translateX(16px);
  transform: translateX(16px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>