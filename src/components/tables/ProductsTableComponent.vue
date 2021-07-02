<template>
<ProductsModalComponenVue
  ref="modal"
/>
  <div class="h-full w-full bg-f5  overflow-x-auto">
      <div class="h-20 flex justify-between bg-1f min-w-2100px  overflow-x-auto">
          <div class="pl-10 w-full  grid grid-cols-38 overflow-x-auto">
          
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
              <p class="text-black text-sm py-2">{{index}}</p>
          </div>
          <div class="col-span-2">
              <p class="text-black text-sm py-2 ">{{(product.smallPicture!="")?'1/1':'0/1'}}</p>
          </div>
          <div class="col-span-2 ">
              <p class="text-black text-sm py-2 truncate  ">{{`${countRendersProduct(product)}/3`}}</p>
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
          <div class="col-span-2 flex justify-center items-center">
              <button  
                @click="onOpenModal(product)"
                >
                    <img class="object-cover h-6 w-6" src="../../assets/icons/editar.svg" alt="">                    
                </button>
          </div>
           <div class="col-span-2 mx-2 cursor-pointer flex justify-center items-center">
                <div v-if="product.available">
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
  </div>
  <div class="pl-10 py-2 flex items-center w-full  justify-between bg-1f">
     <div class="flex items-center">
          <p class="text-white font-semibold text-xs pr-2">Total de Filas:</p>
        <div class="border-2 px-1 bg-white">
            <select 
            class="text-xs w-10 pl-2   appearance-none focus:outline-none active:outline-non"
            name="" id="">
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="10">10</option>
            <option value="1000">full</option>
        </select>
        <i class="fas fa-angle-down w-2"></i>
        </div>
     </div>
     <div class="flex mr-7 items-center">
         <div>
             <p class="text-white font-semibold text-xs">20-12,458</p>
         </div>
         <div class="cursor-pointer ml-7">
            <img src="../../assets/paginador_izquierda.svg" style="width:18px; height:12px" alt="">
         </div>
         <div class="cursor-pointer ml-14">
            <img src="../../assets/paginador_derecha.svg" style="width:18px; height:12px" alt="">            
         </div>
     </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import ProductsModalComponenVue from '../modals/ProductsModalComponen.vue';
export default {
  components: {
    ProductsModalComponenVue,
  },
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
        countRendersProduct(product){
            let counter = 0;
            if(product.renders[0]!="")counter++
            if(product.renders[1]!="")counter++
            if(product.renders[2]!="")counter++
            return counter            
        },
        serchAplication(product,aplication){
          if(product){
            const found = product.aplications.find(element => element === aplication)
            return found
          }
          return false
        },
         onOpenModal(product){
              this.$refs.modal.onActiveModal(product)
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