<template>
  <div class="h-screen w-full bg-6f overflow-hidden">
    <div class="h-16"></div>
    <div class="h-5/6  bg-6f shadow-10xl overflow-hidden">
      <div class="overflow-hidden">
        <p class="uppercase text-7xl text-white font-bold pl-10 ">
          Series y Productos
        </p>
      </div>
      <div class="flex h-10  mt-16 px-5">
        <div
          class="mx-1 px-8 py-2 font-semibold text-sm cursor-pointer rounded-t-lg"
          :class="
            menuOption === 0 ? 'bg-f5 text-black' : 'bg-555555 text-white'
          "
          @click="chageMenuOption(0)"
        >
          Series
        </div>
        <div
          class=" px-8 py-2 font-semibold text-sm cursor-pointer rounded-t-lg"
          :class="
            menuOption === 1 ? 'bg-f5 text-black' : 'bg-555555 text-white'
          "
          @click="chageMenuOption(1)"
        >
          Productos
        </div>
      </div>
      <div v-if="menuOption === 1" class="w-full h-full">
        <div class="w-full h-full px-5">
          <div class="flex items-center w-full  bg-f5 h-16">
            <ProductsFiltercomponentVue />
          </div>
          <div class="w-full h-4/6   bg-f5">
            <ProductsTableComponentVue />
          </div>
        </div>
      </div>
      <div v-else class="w-full h-full px-5 bg-green-50">
        
      </div>
    </div>
  </div>
</template>
<script>
import ProductsFiltercomponentVue from "../filters/ProductsFiltercomponent.vue";
import ProductsTableComponentVue from "../tables/ProductsTableComponent.vue";
export default {
  components: {
    ProductsFiltercomponentVue,
    ProductsTableComponentVue,
  },
  data() {
    return {
      menuOption: 1,
    };
  },
  methods: {
    chageMenuOption(value) {
      this.menuOption = value;
    },
  },
};
</script>

<style></style>
