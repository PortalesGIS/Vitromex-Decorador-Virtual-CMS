<template>
  <div class="h-full w-5/6 bg-white ">
    <div>
      <p class="uppercase text-7xl text-black font-bold pt-36 pl-20">
      productos
      </p>
    </div>
    <div class="w-full mt-20">
      <ProductsFiltercomponentVue/>
    </div>
    <div class="w-full overflow-auto">
      <ProductsComponentVue/>
    </div>
  </div>
</template>

<script>
import ProductsFiltercomponentVue from '../filters/ProductsFiltercomponent.vue'
import ProductsComponentVue from '../tables/ProductsComponent.vue'
export default {
  components: {
    ProductsFiltercomponentVue,
    ProductsComponentVue
  },

}
</script>

<style>

</style>