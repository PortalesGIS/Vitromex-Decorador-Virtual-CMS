<template>
  <div class="w-full bg-f5 ">
      <div class="flex justify-between">
          <div class="pl-10 w-full  grid grid-cols-12 bg-1f">
          <div class="col-span-1 flex items-center justify-start mr-4">
              <p class="text-force-white text-xs font-semibold py-2 moserrat-semibold">No.</p>
              <div class="">
            <img src="../../assets/dropdown.svg" class="px-2" alt="">
          </div>
              </div>
          <div 
            @click="filterArrow('name')"
          class="col-span-2 flex items-center justify-start mr-4 cursor-pointer">
              <p class="text-force-white text-xs font-semibold py-2 moserrat-semibold">Nombre de la Tienda</p>
              <div class="">
            <!-- <img @click="filterArrow('name')"
            src="../../assets/dropdown.svg" class="px-2 cursor-pointer" alt=""> -->
            <div class="">
                    <img v-if="stateOfFilters.name"
                      src="../../assets/dropdown.svg"
                      class="cursor-pointer pl-1"
                      alt=""
                    />
                    <img v-else
                      src="../../assets/dropdown.svg"
                      class="cursor-pointer pl-1 transform rotate-180"
                      alt=""
                    />
            </div>
          </div>
              </div>
          <div class="col-span-2 flex items-center justify-start mr-4 cursor-pointer"  @click="filterArrow('street')">
              <p class="text-force-white text-xs font-semibold py-2 moserrat-semibold">Dirección</p>
              <div class="">
            <div class="">
                    <img v-if="stateOfFilters.street"
                      src="../../assets/dropdown.svg"
                      class="cursor-pointer pl-1"
                      alt=""
                    />
                    <img v-else
                      src="../../assets/dropdown.svg"
                      class="cursor-pointer pl-1 transform rotate-180"
                      alt=""
                    />
            </div>
          </div>
              </div>
          <div  @click="filterArrow('lat')" class="col-span-2 flex items-center justify-start mr-4 cursor-pointer">
              <p class="text-force-white text-xs font-semibold py-2 moserrat-semibold">Coordenadas</p>
              <div class="">
           <div class="">
                    <img v-if="stateOfFilters.lat"
                      src="../../assets/dropdown.svg"
                      class="cursor-pointer pl-1"
                      alt=""
                    />
                    <img v-else
                      src="../../assets/dropdown.svg"
                      class="cursor-pointer pl-1 transform rotate-180"
                      alt=""
                    />
            </div>
          </div>
              </div>
          <div @click="filterArrow('phone')" class="col-span-2 flex items-center justify-start mr-4 cursor-pointer">
              <p class="text-force-white text-xs font-semibold py-2 moserrat-semibold">Teléfono</p>
              <div class="">
             <div class="">
                    <img v-if="stateOfFilters.phone"
                      src="../../assets/dropdown.svg"
                      class="cursor-pointer pl-1"
                      alt=""
                    />
                    <img v-else
                      src="../../assets/dropdown.svg"
                      class="cursor-pointer pl-1 transform rotate-180"
                      alt=""
                    />
            </div>
          </div>
              </div>
          <div  @click="filterArrow('dateCreated')" class="col-span-2 flex items-center justify-start mr-4 cursor-pointer">
              <p class="text-force-white text-xs font-semibold py-2 moserrat-semibold">Fecha de Registro</p>
              <div class="">
           <div class="">
                    <img v-if="stateOfFilters.dateCreated"
                      src="../../assets/dropdown.svg"
                      class="cursor-pointer pl-1"
                      alt=""
                    />
                    <img v-else
                      src="../../assets/dropdown.svg"
                      class="cursor-pointer pl-1 transform rotate-180"
                      alt=""
                    />
            </div>
          </div>
              </div>
      </div>
      <div class="bg-1f">
          <div class="px-1"><p class="text-force-white text-sm font-bold px-4 py-2">Activo</p></div>
      </div>
      </div>
      <div class="pl-10 h-px w-full  bg-gray-400"></div>
     <div class="max-h-120 overflow-y-scroll">
      <div v-for="(store,index) in getAllStores" :key="index" >
         <div v-if="(index >= startData && index <= endData)">
          <div class="flex justify-between"
             :class="(index%2)?'bg-white':''">
          <div class="pl-10 w-full grid grid-cols-12  ">
          <div class="col-span-1">
              <p class="text-force-black text-sm py-2 monserrat">{{index+1}}</p>
          </div>
          <div class="col-span-2">
              <p class="text-force-black text-sm py-2 monserrat">{{store.name}}</p>
          </div>
          <div class="col-span-2 pr-5">
              <p class="text-force-black text-sm py-2 monserrat truncate  ">{{`${store.street} ${store.city}`}}</p>
          </div>
          <div class="col-span-2">
              <p class="text-force-black text-sm py-2 monserrat">{{`${store.lat},${store.lng}`}}</p>
          </div>
          <div class="col-span-2">
              <p class="text-force-black text-sm py-2 monserrat">{{store.phone}}</p>
          </div>
          <div class="col-span-2">
              <p class="text-force-black text-sm py-2 monserrat">{{store.dateCreated}}</p>
          </div>
      </div>
        <div 
          class="mx-2 cursor-pointer flex items-center px-4">
          <div
                  v-if="index === modalAlertActiveStore"
                  class=" z-50 -ml-64 mt-40 absolute w-72 h-28 bg-white border border-black"
                >
                  <div class="flex px-3 pt-5">
                    <img src="../../assets/alerta.svg" class="pr-2" alt="" />
                    <p class="text-force-black text-justify text-xs font-normal">
                      ¿Estás seguro que deseas
                      {{ store.status ? "suspender" : "activar" }} este producto en la App? 
                    </p>
                  </div>
                  <div class="flex px-3 pt-5 justify-evenly">
                    <button
                      @click="onChangeState(store)"
                      class="
                        w-28
                        h-6
                        bg-black
                        text-center text-xs
                        font-medium
                      text-force-white "
                    >
                      {{
                        store.status ? "Suspender" : "Activar"
                      }}
                    </button>
                    <button
                      @click="onActiveAlertchangeStatus(-1)"
                      class="
                        w-28
                        h-6
                        bg-white
                        text-center text-xs
                        font-medium
                        border border-black
                      "
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
                <div v-if="store.status"   @click="onActiveAlertchangeStatus(index)">
                  <img src="../../assets/switch_on.svg" alt="">
                </div>
                <div v-else   @click="onActiveAlertchangeStatus(index)">
                  <img src="../../assets/switch_off.svg" alt="">                  
                </div>
        </div>
        </div>
        </div>
      </div>
      </div>
  </div>
  <div class="pl-10 py-2 flex items-center w-full  justify-between bg-1f">
     <div class="flex items-center">
          <p class="text-force-white font-semibold text-xs pr-2">Total de Filas:</p>
        <div class="border-2 px-1 bg-white">
            <select 
            class="text-xs w-10 pl-2   appearance-none focus:outline-none active:outline-non"
            name="" id=""
            v-model="numberDataPerPage"
            @change="changeRange">
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">10</option>
            <option value="100000">Todo</option>
        </select>
        <i class="fas fa-angle-down w-2"></i>
        </div>
     </div>
     <div class="flex mr-7 items-center">
         <div>
             <!-- <p class="text-force-white font-semibold text-xs">{{startData}}-{{endData}},{{getAllStores.length}}</p> -->
             <p v-if="endData<10000" class="text-force-white font-semibold text-xs">{{startData}}-{{endData}},{{getAllStores.length}}</p>
          <p v-else class="text-force-white font-semibold text-xs">Todo</p>
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
      modalAlertActiveStore:-1,
      stateOfFilters:{
        name:true,
        street:true,
        lat:true,
        phone:true,
        dateCreated:true
      }
        }
    },
    methods: {
        ...mapActions(["getAllStoreDB","changeStatusShopDB","filterAlphabetShops"]),
        async onGetAllStores(){
            await this.getAllStoreDB();
        },
    onChangeState(shop){
      this.changeStatusShopDB(shop)
      this.onActiveAlertchangeStatus(-1)
    },
    filterArrow(campToFilter){
      this.filterAlphabetShops({campToFilter,sateChange: this.stateOfFilters[campToFilter]})
       this.stateOfFilters[campToFilter] = !this.stateOfFilters[campToFilter]
    },
    onActiveAlertchangeStatus(index){
      this.modalAlertActiveStore = index
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