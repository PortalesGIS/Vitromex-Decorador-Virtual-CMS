<template>
  <ProductsModalComponenVue ref="modal" />
  <div class="h-full w-full bg-f5">
    <div
      class="
        h-full
        w-full
        flex
        justify-between
        overflow-x-hidden
        min-w-1500px
      "
    >
      <div class=" w-full overflow-x-auto h-full">
        <table class="w-full  min-w-2100px">
          <thead>
            <tr>
              <th  class="pl-6 sticky top-0 bg-1f z-40">
                <div class=" flex items-center justify-center">
                  <p class="text-force-white text-xs font-semibold py-2 moserrat-semibold">No.</p>
                </div>
              </th>
              <th class="sticky top-0 bg-1f z-40 ">
                <div class=" flex items-center justify-center">
                  <p class="text-force-white text-xs font-semibold py-2 moserrat-semibold">
                    Imagen <br> Miniatura
                  </p>
                </div>
              </th>
              <th class="sticky top-0 bg-1f z-40">
                <div class="col-span-2 flex items-center justify-center ">
                  <p class="text-force-white text-xs font-semibold py-2 moserrat-semibold">
                    Imagen <br> del producto
                  </p>
                </div>
              </th>
              <th class="sticky top-0 bg-1f z-40">
                <div class="col-span-2 flex items-center justify-center ">
                  <p class="text-force-white text-xs font-semibold py-2 moserrat-semibold">
                    Textura <br> AR/3D
                  </p>
                </div>
              </th>
              <th class="sticky  top-0 bg-1f z-40">
                <div
                  @click="onFilterArrow('name')"
                  class=" flex items-center justify-center cursor-pointer"
                >
                  <p class="text-force-white flex-auto  text-xs font-semibold py-2 moserrat-semibold">
                    Nombre del producto
                  </p>
                  <div class="">
                    <img v-if="stateOfFilters.name"
                      src="../../assets/dropdown.svg"
                      class="cursor-pointer"
                      alt=""
                    />
                    <img v-else
                      src="../../assets/dropdown.svg"
                      class="cursor-pointer transform rotate-180"
                      alt=""
                    />
                  </div>
                </div>
              </th>
              <th class="sticky top-0 bg-1f z-40">
                <div class="col-span-2 flex items-center justify-center ">
                  <p class="text-force-white text-xs font-semibold py-2 moserrat-semibold">Tipología</p>
                  <div class="">
                    <img v-if="stateOfFilters.typologies"
                      @click="onFilterArrow('typologies')"
                      src="../../assets/dropdown.svg"
                      class="cursor-pointer pl-1"
                      alt=""
                    />
                    <img v-else
                      @click="onFilterArrow('typologies')"
                      src="../../assets/dropdown.svg"
                      class="cursor-pointer pl-1 transform rotate-180"
                      alt=""
                    />
                  </div>
                </div>
              </th>
              <th class="sticky top-0 bg-1f z-40">
                <div class="col-span-2 flex items-center justify-center ">
                  <p class="text-force-white text-xs font-semibold py-2 moserrat-semibold"
                  >Formato</p>
                  <div class="">
                    <img v-if="stateOfFilters.sized"
                      @click="onFilterArrow('sized')"
                      src="../../assets/dropdown.svg"
                      class="cursor-pointer pl-1"
                      alt=""
                    />
                    <img v-else
                      @click="onFilterArrow('sized')"
                      src="../../assets/dropdown.svg"
                      class="cursor-pointer pl-1 transform rotate-180"
                      alt=""
                    />
                    
                  </div>
                </div>
              </th>
              <th class="sticky top-0 bg-1f z-40">
                <div class="col-span-2 flex items-center justify-center ">
                  <p class="text-force-white text-xs font-semibold py-2 moserrat-semibold">Serie</p>
                  <div class="">
                    <img v-if="stateOfFilters.serie"
                      @click="onFilterArrow('serie')"
                      src="../../assets/dropdown.svg"
                      class="cursor-pointer pl-1"
                      alt=""
                    />
                    <img v-else
                      @click="onFilterArrow('serie')"
                      src="../../assets/dropdown.svg"
                      class="cursor-pointer pl-1 transform rotate-180"
                      alt=""
                    />
                    
                  </div>
                </div>
              </th>
              <th class="sticky top-0 bg-1f z-40">
                <div class="col-span-2 flex items-center justify-center ">
                  <p class="text-force-white text-xs font-semibold py-2 moserrat-semibold">Acabado</p>
                  <div class="">
                    <img v-if="stateOfFilters.finish"
                      @click="onFilterArrow('finish')"
                      src="../../assets/dropdown.svg"
                      class="cursor-pointer pl-1"
                      alt=""
                    />
                    <img v-else
                      @click="onFilterArrow('finish')"
                      src="../../assets/dropdown.svg"
                      class="cursor-pointer pl-1 transform rotate-180"
                      alt=""
                    />
                    
                  </div>
                </div>
              </th>
              <th class="sticky top-0 bg-1f z-40">
                <div class="col-span-2 flex items-center justify-center ">
                  <p class="text-force-white text-xs font-semibold py-2 moserrat-semibold">Color</p>
                  <div class="">
                    <img v-if="stateOfFilters.color"
                      @click="onFilterArrow('color')"
                      src="../../assets/dropdown.svg"
                      class="cursor-pointer pl-1"
                      alt=""
                    />
                    <img v-else
                      @click="onFilterArrow('color')"
                      src="../../assets/dropdown.svg"
                      class="cursor-pointer pl-1 transform rotate-180"
                      alt=""
                    />
                    
                  </div>
                </div>
              </th>
              <th v-for="(aplication,index) in getAllSpaces" :key="aplication" class="sticky top-0 bg-1f z-40">
                <div class="col-span-2 flex items-center justify-center ">
                  <p class="text-force-white text-xs font-semibold py-2 moserrat-semibold">{{aplication.name}}</p>
                  <div class="">
                    <img 
                     @click="onFilterArrowAplication(index,aplication.name)"
                    src="../../assets/dropdown.svg" class="px-2 cursor-pointer" alt="" />
                  </div>
                </div>
              </th>
              <th class="sticky top-0 bg-1f z-40">
                <div class="col-span-2 flex items-center justify-center ">
                  <p class="text-force-white text-xs font-semibold py-2 moserrat-semibold">
                    Fecha de Registro
                  </p>
                  <div class="">
                    <img
                      @click="onFilterArrow('dateCreated')"
                      src="../../assets/dropdown.svg"
                      class="px-2"
                      alt=""
                    />
                  </div>
                </div>
              </th>
              <th class="sticky top-0 bg-1f z-40">
                <div class="col-span-2 flex items-center justify-center ">
                  <p class="text-force-white text-xs font-semibold py-2 moserrat-semibold">Editar</p>
                  <div class="">
                    
                  </div>
                </div>
              </th>
              <th class="sticky top-0 bg-1f z-40">
                <div class="col-span-2 flex items-center justify-center ">
                  <p class="text-force-white text-xs font-semibold py-2 moserrat-semibold">Nuevo</p>
                  <div class="">
                    <img 
                     @click="onFilterArrowfilterisNewProduct()"
                    src="../../assets/dropdown.svg" class="px-2 cursor-pointer" alt="" />
                  </div>
                </div>
              </th>
              <th class="sticky top-0 bg-1f z-40">
                <div class="col-span-2 flex items-center justify-center ">
                  <p class="text-force-white text-xs font-semibold py-2 moserrat-semibold">Activar</p>
                  <div class="">
                    <img 
                     @click="onFilterArrowActive()"
                    src="../../assets/dropdown.svg" class="px-2 cursor-pointer" alt="" />
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody class="bg-gray-200 min-w-2100px ">
            <tr
              v-for="(product, index) in getAllProducts"
              :key="index"
              :class="index % 2 ? 'bg-white' : ''"
            >
              <td v-if="index >= startData && index <= endData">
                <div class=" flex justify-center">
                  <p class="text-force-black text-sm py-2 monserrat">{{ index+1 }}</p>
                </div>
              </td>
              <td v-if="index >= startData && index <= endData">
                <div class="flex justify-center">
                  <p class="text-force-black text-sm py-2 monserrat">
                    {{ product.smallPicture != "" ? "1/1" : "0/1" }}
                  </p>
                </div>
              </td>
              <td v-if="index >= startData && index <= endData">
                <div class="flex justify-center">
                  <p class="text-force-black text-sm py-2 monserrat truncate">
                    {{ `${countRendersProduct(product)}/3` }}
                  </p>
                </div>
              </td>
              <td v-if="index >= startData && index <= endData">
                <div class="flex justify-center">
                  <p class="text-force-black text-sm py-2 monserrat">
                    {{ `${countImgsProduct(product)}/2` }}
                  </p>
                </div>
              </td>
              <td v-if="index >= startData && index <= endData">
                <div class="flex justify-center max-w-full truncate ">
                  <p class="text-force-black text-sm py-2 monserrat capitalize">{{ product.name.toLowerCase() }}</p>
                </div>
              </td>
              <td v-if="index >= startData && index <= endData">
                <div class="flex justify-center">
                  <p class="text-force-black text-sm py-2 monserrat capitalize">
                    {{ product.typologies.toLowerCase() }}
                  </p>
                </div>
              </td>
              <td v-if="index >= startData && index <= endData">
                <div class="flex justify-center">
                  <p 
                  :class="product.sized.includes('.')?'text-red':'text-force-black'"
                  class=" text-sm py-2 monserrat capitalize">{{ product.sized.toLowerCase() }}</p>
                </div>
              </td>
              <td v-if="index >= startData && index <= endData">
                <div class="flex justify-center">
                  <p class="text-force-black text-sm py-2 monserrat capitalize">{{ product.serie.toLowerCase() }}</p>
                </div>
              </td>
              <td v-if="index >= startData && index <= endData">
                <div class="flex justify-center">
                  <p class="text-force-black text-sm py-2 monserrat capitalize">{{ product.finish.toLowerCase() }}</p>
                </div>
              </td>
              <td v-if="index >= startData && index <= endData">
                <div class="flex justify-center">
                  <p class="text-force-black text-sm py-2 monserrat capitalize">{{ product.color.toLowerCase() }}</p>
                </div>
              </td> 
                <template v-if="index >= startData && index <= endData">   
              <td  v-for="aplication in getAllSpaces" :key="aplication" >
                <div  class="flex justify-center">
                  <div
                    v-if="serchAplication(product,`${aplication.name}` )"
                    class="flex items-center h-full"
                  >
                    <img src="../../assets/ok.svg" alt="" />
                  </div>
                  <div v-else>-</div>
                </div>
              </td>
                  </template>  
              <td v-if="index >= startData && index <= endData">
                <div class="flex justify-center">
                  <p class="text-force-black text-sm py-2 monserrat">
                    {{ product.dateCreated }}
                  </p>
                </div>
              </td>
              <td v-if="index >= startData && index <= endData">
                <div class="flex justify-center items-center">
                  <button @click="onOpenModal(product)">
                    <img
                      class="object-cover h-6 w-6"
                      src="../../assets/icons/editar.svg"
                      alt=""
                    />
                  </button>
                </div>
              </td>
              <td v-if="index >= startData && index <= endData">
                <div
                  class="
                    relative
                    mx-2
                    cursor-pointer
                    flex
                    justify-center
                    items-center
                  "
                >
                  <div
                    v-if="index === modalNewProduct"
                    class="
                      z-50
                      -ml-64
                      mt-40
                      absolute
                      w-72
                      h-28
                      bg-white
                      border border-black
                    "
                  >
                    <div class="flex px-3 pt-5">
                      <img src="../../assets/alerta.svg" class="pr-2" alt="" />
                      <p class="text-force-black text-justify text-xs monserrat">
                        ¿Estás seguro que deseas
                        {{ product.isNewProduct ? "desmarcar" : "marcar" }} este
                        producto como nuevo?
                      </p>
                    </div>
                    <div class="flex px-3 pt-5 justify-evenly">
                      <button
                        @click="onChangeStatusIsNew(product)"
                        class="
                          w-28
                          h-6
                          bg-black
                          text-center text-xs
                          moserrat-semibold
                          text-force-white
                        "
                      >
                        {{
                          product.isNewProduct ? "Desmarcar" : "Nuevo producto"
                        }}
                      </button>
                      <button
                        @click="modalNewProductToggle(-1)"
                        class="
                          w-28
                          h-6
                          bg-white
                          text-center text-xs
                          moserrat-semibold
                          border border-black
                        "
                      >
                        Cancelar
                      </button>
                    </div>
                  </div>
                  <div
                    v-if="product.isNewProduct"
                    @click="modalNewProductToggle(index)"
                  >
                    <img src="../../assets/switch_on.svg" alt="" />
                  </div>
                  <div v-else @click="modalNewProductToggle(index)">
                    <img src="../../assets/switch_off.svg" alt="" />
                  </div>
                </div>
              </td>
              <!-- este filtro sirve para que la tabla no renderize mas de los que deberia optimizar? -->
              <td v-if="index >= startData && index <= endData">
                <div
                  class="
                    relative
                    flex justify-center
                    mx-2
                    cursor-pointer
                    items-center
                  "
                >
                  <div
                    v-if="index === modalActiveProduct"
                    class=" z-50 -ml-64 mt-40 absolute w-72 h-28 bg-white border border-black
                    "
                  >
                    <div class="flex px-3 pt-5">
                      <img src="../../assets/alerta.svg" class="pr-2" alt="" />
                      <p class="text-force-black text-justify text-xs font-normal">
                        Debes completar los datos de este producto antes de
                        activarlo.
                      </p>
                    </div>
                    <div class="flex px-3 pt-5 justify-center">
                      <button
                        @click="closeModalIncompleteProduct(-1)"
                        class="
                          w-28
                          h-6
                          bg-black
                          text-center text-xs
                          moserrat-semibold
                          text-force-white
                        "
                      >
                        Aceptar
                      </button>
                    </div>
                  </div>
                  <div
                    v-if="index === modalAlertDisableProduct"
                    class="
                      z-50
                      -ml-64
                      mt-40
                      absolute
                      w-72
                      h-32
                      bg-white
                      border border-black
                    "
                  >
                    <div class="flex px-3 pt-5">
                      <img src="../../assets/alerta.svg" class="pr-2" alt="" />
                      <p class="text-force-black text-justify text-xs monserrat">
                        ¿Estás seguro de que deseas suspender este producto en
                        la App y Web 3D?
                      </p>
                    </div>
                    <div class="flex px-3 pt-5 justify-evenly">
                      <button
                        @click="changeDisbaleProduct(product)"
                        class="
                          w-28
                          h-6
                          bg-black
                          text-center text-xs
                          moserrat-semibold
                          text-force-white
                        "
                      >
                        Suspender
                      </button>
                      <button
                        @click="colseModalDisableProduct(-1)"
                        class="
                          w-28
                          h-6
                          bg-white
                          text-center text-xs
                          moserrat-semibold
                          border border-black
                        "
                      >
                        Cancelar
                      </button>
                    </div>
                  </div>
                  <div
                    v-if="product.available"
                    @click="onChageStatusAvailable(product, index)"
                  >
                    <img src="../../assets/switch_on.svg" alt="" />
                  </div>
                  <div v-else @click="onChageStatusAvailable(product, index)">
                    <img src="../../assets/switch_off.svg" alt="" />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <div class="pl-10 py-2 pr-20 flex items-center w-full justify-between bg-1f overflow-x-hidden">
    <div class="flex items-center">
      <p class="text-force-white font-semibold text-xs pr-2">Total de Filas:</p>
      <div class="border-2 px-1 bg-white">
        <select
          class="
            text-xs
            w-10
            pl-2
            appearance-none
            focus:outline-none
            active:outline-non
          "
          name=""
          id=""
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
        <p v-if="endData<10000" class="text-force-white font-semibold text-xs">{{startData}}-{{endData}},{{getAllProducts.length}}</p>
        <p v-else class="text-force-white font-semibold text-xs">Todo</p>
      </div>
      <div class="cursor-pointer ml-7" @click="backPageTable()">
        <img
          src="../../assets/paginador_izquierda.svg"
          style="width: 18px; height: 12px"
          alt=""
        />
      </div>
      <div class="cursor-pointer ml-14" @click="nextPageTable">
        <img
          src="../../assets/paginador_derecha.svg"
          style="width: 18px; height: 12px"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ProductsModalComponenVue from "../modals/ProductsModalComponen.vue";
export default {
  components: {
    ProductsModalComponenVue,
  },
  data() {
    return {
      modalNewProduct: -1,
      modalActiveProduct: -1,
      modalAlertDisableProduct: -1,
      numberDataPerPage: 20,
      startData: 0,
      endData: 20,
      stateOfFilters:{
        name:true,
        typologies:true,
        sized:true,
        serie:true,
        finish:true,
        color:true,
        dateCreated:true,
      }
    };
  },
  methods: {
    ...mapActions([
      "getAllproductsdb",
      "changeAvailableProductDB",
      "changeStatusIsNewProductDB",
      "filterAlphabetProduct",
      "filterAplicationProduct",
      "filterisNewProduct",
      "filterActiveProduct",
    ]),
    async onGetAllProducts() {
      await this.getAllproductsdb();
    },
    onFilterArrow(campToFilter) {
      this.filterAlphabetProduct({campToFilter,sateChange: this.stateOfFilters[campToFilter]})
      this.stateOfFilters[campToFilter] = !this.stateOfFilters[campToFilter]
    },
    onFilterArrowAplication(position,name) {
      this.filterAplicationProduct({ position:position,name:name})
    },
    onFilterArrowActive() {
      this.filterActiveProduct()
    },
    onFilterArrowfilterisNewProduct() {
      this.filterisNewProduct()
    },
    countImgsProduct(product) {
      let counter = 0;
      if (product.albedo != "") counter++;
      if (product.normal != "") counter++;
      // if (product.roughness != "") counter++;
      return counter;
    },
    countRendersProduct(product) {
      let counter = 0;
      if (product.renders[0] != "") counter++;
      if (product.renders[1] != "") counter++;
      if (product.renders[2] != "") counter++;
      return counter;
    },
    serchAplication(product, aplication) {
      if (product) {
        const found = product.aplications.find(
          (element) => element === aplication
        );
        return found;
      }
      return false;
    },
    onOpenModal(product) {
      this.$refs.modal.onActiveModal(product);
    },
    verifyProductIsComplete(product) {
      if (
        product.smallPicture &&
        this.countRendersProduct(product) >= 1 &&
        this.countImgsProduct(product) === 2 &&
        !product.sized.includes(".")
      ) {
        return true;
      }
      return false;
    },
    // alerts active/disable 
    onChageStatusAvailable(product, index) {
      if (product.available) {
         this.modalNewProduct =-1
        return (this.modalAlertDisableProduct = index);
      }
      if (this.verifyProductIsComplete(product)) {
        this.changeAvailableProductDB(product);
      } else {
        this.modalActiveProduct = index;
      }
    },
    changeDisbaleProduct(product) {
      this.changeAvailableProductDB(product);
      this.modalAlertDisableProduct = -1;
    },
    colseModalDisableProduct(){
      this.modalAlertDisableProduct = -1;
    },
    closeModalIncompleteProduct(value) {
      this.modalActiveProduct = value;
    },
    onChangeStatusIsNew(product) {
      this.changeStatusIsNewProductDB(product);
      this.modalNewProductToggle(-1);
    },
    modalNewProductToggle(value) {
      this.colseModalDisableProduct()
      this.modalNewProduct = value;
    },
      // 
    changeRange() {
      this.startData = 0;
      this.endData = this.numberDataPerPage;
    },
    nextPageTable() {
      if (this.startData <= -1) {
        this.changeRange();
      } else if (this.endData > this.getAllProducts.length) {
        return;
      } else {
        this.startData = this.endData;
        this.endData =
          parseInt(this.startData) + parseInt(this.numberDataPerPage);
      }
    },
    backPageTable() {
      if (this.startData <= 0) {
        this.changeRange();
      } else {
        this.endData = this.startData;
        this.startData =
          parseInt(this.endData) - parseInt(this.numberDataPerPage);
      }
    },
  },
  computed: {
    ...mapGetters(["getAllProducts","getAllSpaces"]),
  },
  created() {
    this.onGetAllProducts();
  },
};
</script>

<style></style>
