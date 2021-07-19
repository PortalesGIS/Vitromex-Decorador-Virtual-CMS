<template>
  <ProductsModalComponenVue ref="modal" />
  <div class="h-full w-full bg-f5 overflow-x-auto">
    <div class="h-20 flex justify-between bg-1f min-w-2100px overflow-x-auto">
      <div class="pl-10 w-full grid grid-cols-38 overflow-x-auto">
        <div class="col-span-1 flex items-center justify-start mr-4">
          <p class="text-white text-xs font-semibold py-2">No.</p>
          <div class="">
            <img src="../../assets/dropdown.svg" class="px-2" alt="" />
          </div>
        </div>
        <div class="col-span-2 flex items-center justify-start mr-4">
          <p class="text-white text-xs font-semibold py-2">Imagen Miniatura</p>
          <div class="">
            <img src="../../assets/dropdown.svg" class="px-2" alt="" />
          </div>
        </div>
        <div class="col-span-2 flex items-center justify-start mr-4">
          <p class="text-white text-xs font-semibold py-2">
            Imagen del producto
          </p>
          <div class="">
            <img src="../../assets/dropdown.svg" class="px-2" alt="" />
          </div>
        </div>
        <div class="col-span-2 flex items-center justify-start mr-4">
          <p class="text-white text-xs font-semibold py-2">Textura AR/3D</p>
          <div class="">
            <img src="../../assets/dropdown.svg" class="px-2" alt="" />
          </div>
        </div>
        <div class="col-span-2 flex items-center justify-start mr-4">
          <p class="text-white text-xs font-semibold py-2">
            Nombre del producto
          </p>
          <div class="">
            <img src="../../assets/dropdown.svg" class="px-2" alt="" />
          </div>
        </div>
        <div class="col-span-2 flex items-center justify-start mr-4">
          <p class="text-white text-xs font-semibold py-2">Tipologia</p>
          <div class="">
            <img src="../../assets/dropdown.svg" class="px-2" alt="" />
          </div>
        </div>
        <div class="col-span-2 flex items-center justify-start mr-4">
          <p class="text-white text-xs font-semibold py-2">Serie</p>
          <div class="">
            <img src="../../assets/dropdown.svg" class="px-2" alt="" />
          </div>
        </div>
        <div class="col-span-2 flex items-center justify-start mr-4">
          <p class="text-white text-xs font-semibold py-2">Serie</p>
          <div class="">
            <img src="../../assets/dropdown.svg" class="px-2" alt="" />
          </div>
        </div>
        <div class="col-span-2 flex items-center justify-start mr-4">
          <p class="text-white text-xs font-semibold py-2">Acabado</p>
          <div class="">
            <img src="../../assets/dropdown.svg" class="px-2" alt="" />
          </div>
        </div>
        <div class="col-span-2 flex items-center justify-start mr-4">
          <p class="text-white text-xs font-semibold py-2">Color</p>
          <div class="">
            <img src="../../assets/dropdown.svg" class="px-2" alt="" />
          </div>
        </div>
        <div class="col-span-2 flex items-center justify-start mr-4">
          <p class="text-white text-xs font-semibold py-2">Piso</p>
          <div class="">
            <img src="../../assets/dropdown.svg" class="px-2" alt="" />
          </div>
        </div>
        <div class="col-span-2 flex items-center justify-start mr-4">
          <p class="text-white text-xs font-semibold py-2">Muro</p>
          <div class="">
            <img src="../../assets/dropdown.svg" class="px-2" alt="" />
          </div>
        </div>
        <div class="col-span-2 flex items-center justify-start mr-4">
          <p class="text-white text-xs font-semibold py-2">Iterior</p>
          <div class="">
            <img src="../../assets/dropdown.svg" class="px-2" alt="" />
          </div>
        </div>
        <div class="col-span-2 flex items-center justify-start mr-4">
          <p class="text-white text-xs font-semibold py-2">Exterior</p>
          <div class="">
            <img src="../../assets/dropdown.svg" class="px-2" alt="" />
          </div>
        </div>
        <div class="col-span-2 flex items-center justify-start mr-4">
          <p class="text-white text-xs font-semibold py-2">Fachada</p>
          <div class="">
            <img src="../../assets/dropdown.svg" class="px-2" alt="" />
          </div>
        </div>
        <div class="col-span-2 flex items-center justify-start mr-4">
          <p class="text-white text-xs font-semibold py-2">Baño</p>
          <div class="">
            <img src="../../assets/dropdown.svg" class="px-2" alt="" />
          </div>
        </div>
        <div class="col-span-2 flex items-center justify-start mr-4">
          <p class="text-white text-xs font-semibold py-2">Fecha de Registro</p>
          <div class="">
            <img src="../../assets/dropdown.svg" class="px-2" alt="" />
          </div>
        </div>
        <div class="col-span-2 flex items-center justify-start mr-4">
          <p class="text-white text-xs font-semibold py-2">Editar</p>
          <div class="">
            <img src="../../assets/dropdown.svg" class="px-2" alt="" />
          </div>
        </div>
        <div class="col-span-2 flex items-center justify-start mr-4">
          <p class="text-white text-xs font-semibold py-2">Nuevo</p>
          <div class="">
            <img src="../../assets/dropdown.svg" class="px-2" alt="" />
          </div>
        </div>
        <div class="col-span-2 flex items-center justify-start mr-4">
          <p class="text-white text-xs font-semibold py-2">Activar</p>
          <div class="">
            <img src="../../assets/dropdown.svg" class="px-2" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="pl-10 h-px w-full bg-gray-400"></div>
    <div class="h-5/6 overflow-x-auto min-w-2100px">
      <div v-for="(product, index) in getAllProducts" :key="index" class="">
        <div v-if="index >= startData && index <= endData">
          <div
            class="flex justify-between"
            :class="index % 2 ? 'bg-white' : ''"
          >
            <div class="pl-10 w-full grid grid-cols-38">
              <div class="col-span-1">
                <p class="text-black text-sm py-2">{{ index }}</p>
              </div>
              <div class="col-span-2">
                <p class="text-black text-sm py-2">
                  {{ product.smallPicture != "" ? "1/1" : "0/1" }}
                </p>
              </div>
              <div class="col-span-2">
                <p class="text-black text-sm py-2 truncate">
                  {{ `${countRendersProduct(product)}/3` }}
                </p>
              </div>
              <div class="col-span-2">
                <p class="text-black text-sm py-2">
                  {{ `${countImgsProduct(product)}/2` }}
                </p>
              </div>
              <div class="col-span-2 max-w-full truncate">
                <p class="text-black text-sm py-2">{{ product.name }}</p>
              </div>
              <div class="col-span-2">
                <p class="text-black text-sm py-2">{{ product.typologies }}</p>
              </div>
              <div class="col-span-2">
                <p class="text-black text-sm py-2">{{ product.sized }}</p>
              </div>
              <div class="col-span-2">
                <p class="text-black text-sm py-2">{{ product.serie }}</p>
              </div>
              <div class="col-span-2">
                <p class="text-black text-sm py-2">{{ product.finish }}</p>
              </div>
              <div class="col-span-2">
                <p class="text-black text-sm py-2">{{ product.color }}</p>
              </div>
              <div class="col-span-2">
                <div
                  v-if="serchAplication(product, 'PISO')"
                  class="flex items-center h-full"
                >
                  <img src="../../assets/ok.svg" alt="" />
                </div>
                <div v-else>-</div>
              </div>
              <div class="col-span-2">
                <div
                  v-if="serchAplication(product, 'MURO')"
                  class="flex items-center h-full"
                >
                  <img src="../../assets/ok.svg" alt="" />
                </div>
                <div v-else>-</div>
              </div>
              <div class="col-span-2">
                <div
                  v-if="serchAplication(product, 'INTERIOR')"
                  class="flex items-center h-full"
                >
                  <img src="../../assets/ok.svg" alt="" />
                </div>
                <div v-else>-</div>
              </div>
              <div class="col-span-2">
                <div
                  v-if="serchAplication(product, 'EXTERIOR')"
                  class="flex items-center h-full"
                >
                  <img src="../../assets/ok.svg" alt="" />
                </div>
                <div v-else>-</div>
              </div>
              <div class="col-span-2">
                <div
                  v-if="serchAplication(product, 'FACHADA')"
                  class="flex items-center h-full"
                >
                  <img src="../../assets/ok.svg" alt="" />
                </div>
                <div v-else>-</div>
              </div>
              <div class="col-span-2">
                <div
                  v-if="serchAplication(product, 'BANO')"
                  class="flex items-center h-full"
                >
                  <img src="../../assets/ok.svg" alt="" />
                </div>
                <div v-else>-</div>
              </div>

              <div class="col-span-2">
                <p class="text-black text-sm py-2">{{ product.dateCreated }}</p>
              </div>
              <div class="col-span-2 flex justify-center items-center">
                <button @click="onOpenModal(product)">
                  <img
                    class="object-cover h-6 w-6"
                    src="../../assets/icons/editar.svg"
                    alt=""
                  />
                </button>
              </div>
              <!-- nuevo -->
              <div
                class="
                  relative
                  col-span-2
                  mx-2
                  cursor-pointer
                  flex
                  justify-center
                  items-center
                "
              >
                <div
                  v-if="index === modalNewProduct"
                  class=" z-50 -ml-64 mt-40 absolute w-72 h-28 bg-white border border-black"
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
              <!-- end  nuevo -->
              <!-- start activo -->
              <div
                class="
                  relative
                  col-span-2
                  mx-2
                  cursor-pointer
                  flex
                  justify-center
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
                      ¿Estás seguro de que deseas suspender este producto en la
                      App y Web 3D?
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
                  v-if="product.available"
                  @click="onChageStatusAvailable(product, index)"
                >
                  <img src="../../assets/switch_on.svg" alt="" />
                </div>
                <div v-else @click="onChageStatusAvailable(product, index)">
                  <img src="../../assets/switch_off.svg" alt="" />
                </div>
              </div>
              <!-- end activo -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="pl-10 py-2 flex items-center w-full justify-between bg-1f">
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
    ]),
    async onGetAllProducts() {
      await this.getAllproductsdb();
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
    ...mapGetters(["getAllProducts"]),
  },
  created() {
    this.onGetAllProducts();
  },
};
</script>

<style >
</style>