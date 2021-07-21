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
          <thead >
            <tr>
              <th  class="sticky top-0 bg-1f z-40">
                <div class=" flex items-center justify-center mr-4">
                  <p class="text-white text-xs font-semibold py-2">No.</p>
                </div>
              </th>
              <th class="sticky top-0 bg-1f z-40">
                <div class=" flex items-center justify-center mr-4">
                  <p class="text-white text-xs font-semibold py-2">
                    Imagen Miniatura
                  </p>
                </div>
              </th>
              <th class="sticky top-0 bg-1f z-40">
                <div class="col-span-2 flex items-center justify-center mr-4">
                  <p class="text-white text-xs font-semibold py-2">
                    Imagen del producto
                  </p>
                </div>
              </th>
              <th class="sticky top-0 bg-1f z-40">
                <div class="col-span-2 flex items-center justify-center mr-4">
                  <p class="text-white text-xs font-semibold py-2">
                    Textura AR/3D
                  </p>
                </div>
              </th>
              <th class="sticky top-0 bg-1f z-40">
                <div
                  @click="onFilterArrow('name')"
                  class="
                    flex
                    items-center
                    justify-center
                    mr-4
                    cursor-pointer
                  "
                >
                  <p class="text-white text-xs font-semibold py-2">
                    Nombre del producto
                  </p>
                  <div class="">
                    <img
                      src="../../assets/dropdown.svg"
                      class="cursor-pointer px-2"
                      alt=""
                    />
                  </div>
                </div>
              </th>
              <th class="sticky top-0 bg-1f z-40">
                <div class="col-span-2 flex items-center justify-center mr-4">
                  <p class="text-white text-xs font-semibold py-2">Tipologia</p>
                  <div class="">
                    <img
                      @click="onFilterArrow('typologies')"
                      src="../../assets/dropdown.svg"
                      class="cursor-pointer px-2"
                      alt=""
                    />
                  </div>
                </div>
              </th>
              <th class="sticky top-0 bg-1f z-40">
                <div class="col-span-2 flex items-center justify-center mr-4">
                  <p class="text-white text-xs font-semibold py-2">Formato</p>
                  <div class="">
                    <img
                      @click="onFilterArrow('sized')"
                      src="../../assets/dropdown.svg"
                      class="cursor-pointer px-2"
                      alt=""
                    />
                  </div>
                </div>
              </th>
              <th class="sticky top-0 bg-1f z-40">
                <div class="col-span-2 flex items-center justify-center mr-4">
                  <p class="text-white text-xs font-semibold py-2">Serie</p>
                  <div class="">
                    <img
                      @click="onFilterArrow('serie')"
                      src="../../assets/dropdown.svg"
                      class="cursor-pointer px-2"
                      alt=""
                    />
                  </div>
                </div>
              </th>
              <th class="sticky top-0 bg-1f z-40">
                <div class="col-span-2 flex items-center justify-center mr-4">
                  <p class="text-white text-xs font-semibold py-2">Acabado</p>
                  <div class="">
                    <img
                      @click="onFilterArrow('finish')"
                      src="../../assets/dropdown.svg"
                      class="cursor-pointer px-2"
                      alt=""
                    />
                  </div>
                </div>
              </th>
              <th class="sticky top-0 bg-1f z-40">
                <div class="col-span-2 flex items-center justify-center mr-4">
                  <p class="text-white text-xs font-semibold py-2">Color</p>
                  <div class="">
                    <img
                      @click="onFilterArrow('color')"
                      src="../../assets/dropdown.svg"
                      class="cursor-pointer px-2"
                      alt=""
                    />
                  </div>
                </div>
              </th>
              <th v-for="aplication in getAllSpaces" :key="aplication" class="sticky top-0 bg-1f z-40">
                <div class="col-span-2 flex items-center justify-center mr-4">
                  <p class="text-white text-xs font-semibold py-2">{{aplication.name}}</p>
                  <div class="">
                    <img src="../../assets/dropdown.svg" class="px-2" alt="" />
                  </div>
                </div>
              </th>
              <th class="sticky top-0 bg-1f z-40">
                <div class="col-span-2 flex items-center justify-center mr-4">
                  <p class="text-white text-xs font-semibold py-2">
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
                <div class="col-span-2 flex items-center justify-center mr-4">
                  <p class="text-white text-xs font-semibold py-2">Editar</p>
                  <div class="">
                    <img src="../../assets/dropdown.svg" class="px-2" alt="" />
                  </div>
                </div>
              </th>
              <th class="sticky top-0 bg-1f z-40">
                <div class="col-span-2 flex items-center justify-center mr-4">
                  <p class="text-white text-xs font-semibold py-2">Nuevo</p>
                  <div class="">
                    <img src="../../assets/dropdown.svg" class="px-2" alt="" />
                  </div>
                </div>
              </th>
              <th class="sticky top-0 bg-1f z-40">
                <div class="col-span-2 flex items-center justify-center mr-4">
                  <p class="text-white text-xs font-semibold py-2">Activar</p>
                  <div class="">
                    <img src="../../assets/dropdown.svg" class="px-2" alt="" />
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody class="bg-gray-200 min-w-2100px">
            <tr
              v-for="(product, index) in getAllProducts"
              :key="index"
              :class="index % 2 ? 'bg-white' : ''"
            >
              <td v-if="index >= startData && index <= endData">
                <div class=" flex justify-center">
                  <p class="text-black text-sm py-2">{{ index }}</p>
                </div>
              </td>
              <td v-if="index >= startData && index <= endData">
                <div class="flex justify-center">
                  <p class="text-black text-sm py-2">
                    {{ product.smallPicture != "" ? "1/1" : "0/1" }}
                  </p>
                </div>
              </td>
              <td v-if="index >= startData && index <= endData">
                <div class="flex justify-center">
                  <p class="text-black text-sm py-2 truncate">
                    {{ `${countRendersProduct(product)}/3` }}
                  </p>
                </div>
              </td>
              <td v-if="index >= startData && index <= endData">
                <div class="flex justify-center">
                  <p class="text-black text-sm py-2">
                    {{ `${countImgsProduct(product)}/2` }}
                  </p>
                </div>
              </td>
              <td v-if="index >= startData && index <= endData">
                <div class="flex justify-center max-w-full truncate">
                  <p class="text-black text-sm py-2">{{ product.name }}</p>
                </div>
              </td>
              <td v-if="index >= startData && index <= endData">
                <div class="flex justify-center">
                  <p class="text-black text-sm py-2">
                    {{ product.typologies }}
                  </p>
                </div>
              </td>
              <td v-if="index >= startData && index <= endData">
                <div class="flex justify-center">
                  <p class="text-black text-sm py-2">{{ product.sized }}</p>
                </div>
              </td>
              <td v-if="index >= startData && index <= endData">
                <div class="flex justify-center">
                  <p class="text-black text-sm py-2">{{ product.serie }}</p>
                </div>
              </td>
              <td v-if="index >= startData && index <= endData">
                <div class="flex justify-center">
                  <p class="text-black text-sm py-2">{{ product.finish }}</p>
                </div>
              </td>
              <td v-if="index >= startData && index <= endData">
                <div class="flex justify-center">
                  <p class="text-black text-sm py-2">{{ product.color }}</p>
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
                  <p class="text-black text-sm py-2">
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
                      <p class="text-black text-justify text-xs font-normal">
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
                          font-medium
                          text-white
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
                          font-medium
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
                      <p class="text-black text-justify text-xs font-normal">
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
                          font-medium
                          text-white
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
                      h-28
                      bg-white
                      border border-black
                    "
                  >
                    <div class="flex px-3 pt-5">
                      <img src="../../assets/alerta.svg" class="pr-2" alt="" />
                      <p class="text-black text-justify text-xs font-normal">
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
                          font-medium
                          text-white
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
                          font-medium
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
      <p class="text-white font-semibold text-xs pr-2">Total de Filas:</p>
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
          <option value="100000">full</option>
        </select>
        <i class="fas fa-angle-down w-2"></i>
      </div>
    </div>
    <div class="flex mr-7 items-center">
      <div>
        <p class="text-white font-semibold text-xs">
          {{ startData }}-{{ endData }},{{ getAllProducts.length }}
        </p>
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
    };
  },
  methods: {
    ...mapActions([
      "getAllproductsdb",
      "changeAvailableProductDB",
      "changeStatusIsNewProductDB",
      "filterAlphabetProduct",
    ]),
    async onGetAllProducts() {
      await this.getAllproductsdb();
    },
    onFilterArrow(value) {
      this.filterAlphabetProduct(value);
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
        this.countRendersProduct(product) === 3 &&
        this.countImgsProduct(product) == 2
      ) {
        return true;
      }
      return false;
    },
    onChageStatusAvailable(product, index) {
      if (product.available) {
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
    onChangeStatusIsNew(product) {
      this.changeStatusIsNewProductDB(product);
      this.modalNewProductToggle(-1);
    },
    modalNewProductToggle(value) {
      this.modalNewProduct = value;
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
