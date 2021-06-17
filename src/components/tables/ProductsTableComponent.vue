<template>
  <div class="h-full w-full bg-gray-300  overflow-x-auto">
      <div class="h-20 flex justify-between bg-black min-w-2100px  overflow-x-auto">
          <div class="pl-10 w-full  grid grid-cols-38 overflow-x-auto">
          <div class="flex items-center justify-between">
              <p class="text-white text-sm font-bold py-2">
                  <input type="checkbox">
                  </p></div>
          <div class="col-span-1 flex items-center justify-between mr-4">
              <p class="text-white text-sm font-bold py-2">No.</p>
                <i class="fas fa-angle-down" style="color:white"></i></div>
          <div class="col-span-2 flex items-center justify-between mr-4">
              <p class="text-white text-sm font-bold py-2">Imagen Miniatura</p>
                <i class="fas fa-angle-down" style="color:white"></i></div>
          <div class="col-span-2 flex items-center justify-between mr-4">
              <p class="text-white text-sm font-bold py-2">Imagen del producto</p>
                <i class="fas fa-angle-down" style="color:white"></i></div>
          <div class="col-span-2 flex items-center justify-between mr-4">
              <p class="text-white text-sm font-bold py-2">Textura AR/3D</p>
                <i class="fas fa-angle-down" style="color:white"></i></div>
          <div class="col-span-2 flex items-center justify-between mr-4">
              <p class="text-white text-sm font-bold py-2">Nombre del producto</p>
                <i class="fas fa-angle-down" style="color:white"></i></div>
          <div class="col-span-2 flex items-center justify-between mr-4">
              <p class="text-white text-sm font-bold py-2">Tipologia</p>
                <i class="fas fa-angle-down" style="color:white"></i></div>
          <div class="col-span-2 flex items-center justify-between mr-4">
              <p class="text-white text-sm font-bold py-2">Serie</p>
                <i class="fas fa-angle-down" style="color:white"></i></div>
          <div class="col-span-2 flex items-center justify-between mr-4">
              <p class="text-white text-sm font-bold py-2">Serie</p>
                <i class="fas fa-angle-down" style="color:white"></i></div>
          <div class="col-span-2 flex items-center justify-between mr-4">
              <p class="text-white text-sm font-bold py-2">Acabado</p>
                <i class="fas fa-angle-down" style="color:white"></i></div>
          <div class="col-span-2 flex items-center justify-between mr-4">
              <p class="text-white text-sm font-bold py-2">Color</p>
                <i class="fas fa-angle-down" style="color:white"></i></div>
          <div class="col-span-2 flex items-center justify-between mr-4">
              <p class="text-white text-sm font-bold py-2">Piso</p>
                <i class="fas fa-angle-down" style="color:white"></i></div>
          <div class="col-span-2 flex items-center justify-between mr-4">
              <p class="text-white text-sm font-bold py-2">Muro</p>
                <i class="fas fa-angle-down" style="color:white"></i></div>
          <div class="col-span-2 flex items-center justify-between mr-4">
              <p class="text-white text-sm font-bold py-2">Iterior</p>
                <i class="fas fa-angle-down" style="color:white"></i></div>
          <div class="col-span-2 flex items-center justify-between mr-4">
              <p class="text-white text-sm font-bold py-2">Exterior</p>
                <i class="fas fa-angle-down" style="color:white"></i></div>
          <div class="col-span-2 flex items-center justify-between mr-4">
              <p class="text-white text-sm font-bold py-2">Fachada</p>
                <i class="fas fa-angle-down" style="color:white"></i></div>
          <div class="col-span-2 flex items-center justify-between mr-4">
              <p class="text-white text-sm font-bold py-2">Baño</p>
                <i class="fas fa-angle-down" style="color:white"></i></div>
          <div class="col-span-2 flex items-center justify-between mr-4">
              <p class="text-white text-sm font-bold py-2">Fecha de Registro</p>
                <i class="fas fa-angle-down" style="color:white"></i></div>
          <div class="col-span-2 flex items-center justify-between mr-4">
              <p class="text-white text-sm font-bold py-2">Editar</p>
                <i class="fas fa-angle-down" style="color:white"></i></div>
          <div class="col-span-2 flex items-center justify-between mr-4">
              <p class="text-white text-sm font-bold py-2">Suspender</p>
                <i class="fas fa-angle-down" style="color:white"></i></div>
      </div>
      </div>
      <div class="pl-10 h-px w-full  bg-gray-400"></div>
      <div class="h-5/6 overflow-x-auto min-w-2100px">
          <div v-for="(product,index) in getAllProducts" :key="index" class="">
          <div  
            class="flex justify-between"
            :class="(index%2)?'bg-white':''"
            >
          <div class="pl-10 w-full grid grid-cols-38">
          <div class="col-span-1">
              <p class="text-black text-sm py-2"> <input type="checkbox"></p>
          </div>
          <div class="col-span-1">
              <p class="text-black text-sm py-2">{{index}}</p>
          </div>
          <div class="col-span-2">
              <p class="text-black text-sm py-2 ">{{(product.smallPicture!="")?'1/1':'0/1'}}</p>
          </div>
          <div class="col-span-2 ">
              <p class="text-black text-sm py-2 truncate  ">0/3</p>
          </div>
          <div class="col-span-2">
              <p class="text-black text-sm py-2">{{`${countImgsProduct(product)}/2`}}</p>
          </div>
          <div class="col-span-2 max-w-full truncate">
              <p class="text-black text-sm py-2">{{product.name}}</p>
          </div>
          <div class="col-span-2">
              <p class="text-black text-sm py-2">{{product.typologies}}</p>
          </div>
          <div class="col-span-2">
              <p class="text-black text-sm py-2">{{product.sized}}</p>
          </div>
          <div class="col-span-2">
              <p class="text-black text-sm py-2">{{`Serie`}}</p>
          </div>
          <div class="col-span-2">
              <p class="text-black text-sm py-2">{{product.finish}}</p>
          </div>
          <div class="col-span-2">
              <p class="text-black text-sm py-2">{{product.color}}</p>
          </div>
          <div class="col-span-2">
              <div v-if="serchAplication(product,'Piso')">
                *
              </div>
              <div v-else>---</div>
          </div>
          <div class="col-span-2">
              <div v-if="serchAplication(product,'Muro')">
                *
              </div>
              <div v-else>---</div>
          </div>
          <div class="col-span-2">
              <div v-if="serchAplication(product,'Interior')">
                *
              </div>
              <div v-else>---</div>
          </div>
          <div class="col-span-2">
              <div v-if="serchAplication(product,'Exterior')">
                *
              </div>
              <div v-else>---</div>
          </div>
          <div class="col-span-2">
              <div v-if="serchAplication(product,'Fachada')">
                *
              </div>
              <div v-else>---</div>
          </div>
          <div class="col-span-2">
              <div v-if="serchAplication(product,'Baño')">
                *
              </div>
              <div v-else>---</div>
          </div>
          
          <div class="col-span-2">
              <p class="text-black text-sm py-2">{{product.dateCreated}}</p>
          </div>
          <div class="col-span-2">
              <div class="h-6 w-12 bg-blue-500">

              </div>
          </div>
           <div class="col-span-2 ">
                <label class="switch">
                  <input type="checkbox">
                  <span class="slider round"></span>
                </label>
        </div>
      </div>
        </div>
      </div>
      </div>
  </div>
  <div class="pl-10 py-2 w-full flex items-center  justify-between bg-black">
     <div class="flex w-full items-center  justify-between max-w-1500px">
         <div class="flex ">
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
        <i class="fas fa-angle-down" style="color:black"></i>
        </div>
     </div>
     <div class="flex mr-10">
         <div>
             <p class="text-white font-bold">20-12,458</p>
         </div>
         <div class="mx-4 cursor-pointer">
            <i class="fas fa-angle-left fa-2x" style="color:gray"></i>
         </div>
         <div class="mx-4 cursor-pointer">
            <i class="fas fa-angle-right fa-2x" style="color:white"></i>
         </div>
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
        ...mapActions(["getAllproductsdb"]),
        async onGetAllProducts(){
            await this.getAllproductsdb();
        },
        countImgsProduct(product){
            let counter = 0;
            if(product.albedo!="")counter++
            if(product.normal!="")counter++
            if(product.roughness!="")counter++
            return counter            
        },
        serchAplication(product,aplication){
          if(product){
            const found = product.aplications.find(element => element === aplication)
            return found
          }
          return false
        },
    },
    computed: {
    ...mapGetters(["getAllProducts"]),
    },
    created () {
        this.onGetAllProducts();
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