<template>
  <div class="mt-10 mb-3 w-full bg-gray-100 min-w-1900px overflow-auto ">
      <div class="flex justify-between ">
          <div class="pl-10 w-full  min-w-1900px grid grid-cols-36 ">
          <div class="">
              <p class="text-black text-sm font-bold py-2">
                  <input type="checkbox">
                  </p></div>
          <div class="col-span-1 flex items-center justify-between mr-4">
              <p class="text-black text-sm font-bold py-2">No.</p>
                <i class="fas fa-angle-down"></i></div>
          <div class="col-span-2 flex items-center justify-between mr-4">
              <p class="text-black text-sm font-bold py-2">Imagen Miniatura</p>
                <i class="fas fa-angle-down"></i></div>
          <div class="col-span-2 flex items-center justify-between mr-4">
              <p class="text-black text-sm font-bold py-2">Imagen del producto</p>
                <i class="fas fa-angle-down"></i></div>
          <div class="col-span-2 flex items-center justify-between mr-4">
              <p class="text-black text-sm font-bold py-2">Textura AR/3D</p>
                <i class="fas fa-angle-down"></i></div>
          <div class="col-span-2 flex items-center justify-between mr-4">
              <p class="text-black text-sm font-bold py-2">Nombre del producto</p>
                <i class="fas fa-angle-down"></i></div>
          <div class="col-span-2 flex items-center justify-between mr-4">
              <p class="text-black text-sm font-bold py-2">Tipologia</p>
                <i class="fas fa-angle-down"></i></div>
          <div class="col-span-2 flex items-center justify-between mr-4">
              <p class="text-black text-sm font-bold py-2">Serie</p>
                <i class="fas fa-angle-down"></i></div>
          <div class="col-span-2 flex items-center justify-between mr-4">
              <p class="text-black text-sm font-bold py-2">formato</p>
                <i class="fas fa-angle-down"></i></div>
          <div class="col-span-2 flex items-center justify-between mr-4">
              <p class="text-black text-sm font-bold py-2">Color</p>
                <i class="fas fa-angle-down"></i></div>
          <div class="col-span-2 flex items-center justify-between mr-4">
              <p class="text-black text-sm font-bold py-2">Piso</p>
                <i class="fas fa-angle-down"></i></div>
          <div class="col-span-2 flex items-center justify-between mr-4">
              <p class="text-black text-sm font-bold py-2">Muro</p>
                <i class="fas fa-angle-down"></i></div>
          <div class="col-span-2 flex items-center justify-between mr-4">
              <p class="text-black text-sm font-bold py-2">Iterior</p>
                <i class="fas fa-angle-down"></i></div>
          <div class="col-span-2 flex items-center justify-between mr-4">
              <p class="text-black text-sm font-bold py-2">Exterior</p>
                <i class="fas fa-angle-down"></i></div>
          <div class="col-span-2 flex items-center justify-between mr-4">
              <p class="text-black text-sm font-bold py-2">Fachada</p>
                <i class="fas fa-angle-down"></i></div>
          <div class="col-span-2 flex items-center justify-between mr-4">
              <p class="text-black text-sm font-bold py-2">Baño</p>
                <i class="fas fa-angle-down"></i></div>
          <div class="col-span-2 flex items-center justify-between mr-4">
              <p class="text-black text-sm font-bold py-2">Fecha de Registro</p>
                <i class="fas fa-angle-down"></i></div>
          <div class="col-span-2 flex items-center justify-between mr-4">
              <p class="text-black text-sm font-bold py-2">Editar</p>
                <i class="fas fa-angle-down"></i></div>
          <div class="col-span-2 flex items-center justify-between mr-4">
              <p class="text-black text-sm font-bold py-2">Suspender</p>
                <i class="fas fa-angle-down"></i></div>
      </div>
      </div>
      <div class="pl-10 h-px w-full  bg-gray-400"></div>
      <div class="max-h-700px">
          <div v-for="(product,index) in products" :key="index" class="">
          <div class="flex justify-between">
          <div class="pl-10 w-full grid grid-cols-36  min-w-1900px ">
          <div class="col-span-1">
              <p class="text-black text-sm py-2"> <input type="checkbox"></p>
          </div>
          <div class="col-span-1">
              <p class="text-black text-sm py-2">{{index}}</p>
          </div>
          <div class="col-span-2">
              <p class="text-black text-sm py-2 ">{{product.name}}</p>
          </div>
          <div class="col-span-2 ">
              <p class="text-black text-sm py-2 truncate  ">{{`${product.street} ${product.city}`}}</p>
          </div>
          <div class="col-span-2">
              <p class="text-black text-sm py-2">{{`18.1354-18.161`}}</p>
          </div>
          <div class="col-span-2">
              <p class="text-black text-sm py-2">{{product.phone}}</p>
          </div>
          <div class="col-span-2">
              <p class="text-black text-sm py-2">01/10/2020</p>
          </div>
          <div class="col-span-2">
              <p class="text-black text-sm py-2">01/10/2020</p>
          </div>
          <div class="col-span-2">
              <p class="text-black text-sm py-2">01/10/2020</p>
          </div>
          <div class="col-span-2">
              <p class="text-black text-sm py-2">01/10/2020</p>
          </div>
          <div class="col-span-2">
              <p class="text-black text-sm py-2">---</p>
          </div>
          <div class="col-span-2">
              <p class="text-black text-sm py-2">---</p>
          </div>
          <div class="col-span-2">
              <p class="text-black text-sm py-2">---</p>
          </div>
          <div class="col-span-2">
              <p class="text-black text-sm py-2">---</p>
          </div>
          <div class="col-span-2">
              <p class="text-black text-sm py-2">---</p>
          </div>
          <div class="col-span-2">
              <p class="text-black text-sm py-2">---</p>
          </div>
          <div class="col-span-2">
              <p class="text-black text-sm py-2">01/10/2020</p>
          </div>
          <div class="col-span-2">
              <p class="text-black text-sm py-2">01/10/2020</p>
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
  <div class="pl-10 mt-2 mb-4 flex items-center w-full  min-w-1900px justify-between">
     <div class="flex">
          <p class="text-black font-bold text-sm pr-2">Total de Filas:</p>
        <div class="border-2 px-1">
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
import { mapActions, mapGetters } from 'vuex';

export default {
    data() {
        return {
            products: [],
        }
    },
    methods: {
        ...mapActions(["getAllproductsdb"]),
        async onGetAllProducts(){
            await this.getAllproductsdb();
            this.products = this.getAllProducts          
            console.log(this.products)
        }
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