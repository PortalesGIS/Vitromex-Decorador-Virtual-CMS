<template>
  <div class="w-full bg-f5 ">
      <div class="flex justify-between">
          <div class="pl-10 w-full max-w-1400px grid grid-cols-12 bg-1f">
          <div class="">
              <p class="text-white text-sm font-bold py-2">
                  <input type="checkbox">
                  </p></div>
          <div class="col-span-1 flex items-center justify-between mr-4">
              <p class="text-white text-sm font-bold py-2">No.</p>
                <i class="fas fa-angle-down" style="color:white"></i></div>
          <div class="col-span-2 flex items-center justify-between mr-4">
              <p class="text-white text-sm font-bold py-2">Nombre de la Tienda</p>
                <i class="fas fa-angle-down" style="color:white"></i></div>
          <div class="col-span-2 flex items-center justify-between mr-4">
              <p class="text-white text-sm font-bold py-2">Direccion</p>
                <i class="fas fa-angle-down" style="color:white"></i></div>
          <div class="col-span-2 flex items-center justify-between mr-4">
              <p class="text-white text-sm font-bold py-2">Coordenadas</p>
                <i class="fas fa-angle-down" style="color:white"></i></div>
          <div class="col-span-2 flex items-center justify-between mr-4">
              <p class="text-white text-sm font-bold py-2">Telefono</p>
                <i class="fas fa-angle-down" style="color:white"></i></div>
          <div class="col-span-2 flex items-center justify-between mr-4">
              <p class="text-white text-sm font-bold py-2">Fecha de Registro</p>
                <i class="fas fa-angle-down" style="color:white"></i></div>
      </div>
      <div class="bg-1f">
          <div class="px-1"><p class="text-white text-sm font-bold py-2">Publicar</p></div>
      </div>
      </div>
      <div class="pl-10 h-px w-full  bg-gray-400"></div>
      <div v-for="(store,index) in getAllStores" :key="index">
          <div class="flex justify-between"
             :class="(index%2)?'bg-white':''">
          <div class="pl-10 w-full grid grid-cols-12 max-w-1400px ">
          <div class="col-span-1">
              <p class="text-black text-sm py-2"> <input type="checkbox"></p>
          </div>
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
        <div class="mx-2">
                <label class="switch">
                  <input type="checkbox">
                  <span class="slider round"></span>
                </label>
        </div>
        </div>
      </div>
  </div>
  <div class="pl-10 py-2 flex items-center w-full justify-between bg-1f">
     <div class="flex">
          <p class="text-white font-bold text-sm pr-2">Total de Filas:</p>
        <div class="border-2 px-1 bg-white">
            <select 
            class="ml-4 text-xl text-black font-bold appearance-none focus:outline-none active:outline-non"
            name="" id="">
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="10">100</option>
            <option value="1000">full</option>
        </select>
        <i class="fas fa-angle-down"></i>
        </div>
     </div>
     <div class="flex mr-10">
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
import { mapActions, mapGetters } from 'vuex';

export default {
    data() {
        return {
        }
    },
    methods: {
        ...mapActions(["getAllStoreDB"]),
        async onGetAllStores(){
            await this.getAllStoreDB();
        }
    },
    computed: {
    ...mapGetters(["getAllStores"]),
    },
    created () {
        this.onGetAllStores();
    },
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