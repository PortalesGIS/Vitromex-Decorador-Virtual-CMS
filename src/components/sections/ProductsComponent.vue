<template>
  <div class="h-screen w-full bg-6f overflow-x-hidden">
    <div class="h-5 xl:h-16"></div>
    <div class="h-5/6  bg-6f shadow-10xl overflow-hidden">
      <div class="overflow-hidden">
        <p class="uppercase text-5xl text-white font-normal pl-10 monserrat py-7">
          Series y Productos
        </p>
      </div>
      <div class="flex h-10 px-5 overflow-x-hidden">
        <div
          class="mx-1 px-16 py-2 font-semibold text-sm cursor-pointer rounded-t-sm moserrat-semibold"
          :class="
            menuOption === 0 ? 'bg-f5 text-force-black' : 'bg-555555 text-force-white'
          "
          @click="chageMenuOption(0)"
        >
          Series
        </div>
        <div
          class=" px-16 py-2 font-semibold text-sm cursor-pointer rounded-t-sm moserrat-semibold "
          :class="
            menuOption === 1 ? 'bg-f5 text-force-black' : 'bg-555555 text-force-white'
          "
          @click="chageMenuOption(1)"
        >
          Productos
        </div>
      </div>
      <div v-if="menuOption === 1" class="w-full h-full overflow-x-hidden">
        <div class="w-full h-full pr-72 px-5">
          <div class="flex items-center  w-full shadow-4xl  bg-f5 h-16  ">
            <ProductsFiltercomponentVue />
          </div>
          <div class="w-full h-3/6 xl:h-4/6 ">
            <ProductsTableComponentVue />
          </div>
        </div>
      </div>
      <div v-else class="w-5/6 h-full px-5 ">
        <div class="flex items-center w-full shadow-4xl   bg-f5 h-16">
            <SeriesFiltercomponentVue />
          </div>
          <div class="w-full h-3/6 xl:h-4/6  ">
            <SeriesTableComponentVue />
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProductsFiltercomponentVue from "../filters/ProductsFiltercomponent.vue";
import SeriesFiltercomponentVue from '../filters/SeriesFiltercomponent.vue';
import ProductsTableComponentVue from "../tables/ProductsTableComponent.vue";
import SeriesTableComponentVue from '../tables/SeriesTableComponent.vue';
export default {
  components: {
    ProductsFiltercomponentVue,
    ProductsTableComponentVue,
    SeriesFiltercomponentVue,
    SeriesTableComponentVue
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
