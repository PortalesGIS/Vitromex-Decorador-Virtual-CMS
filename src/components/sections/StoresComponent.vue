<template>
    <div class="h-full w-full bg-white">
    <div>
      <p class="uppercase text-7xl text-black font-bold pt-36 pl-20">
      tiendas
      </p>
    </div>
    <div class="w-full mt-20">
      <StoresFilterComponentVue/>
    </div>
    <div class="w-full ">
      <StoreTablecomponentVue/>
    </div>
  </div>
</template>

<script>
import StoresFilterComponentVue from '../filters/StoresFilterComponent.vue'
import StoreTablecomponentVue from '../tables/StoreTablecomponent.vue'
export default {
  components: {
    StoresFilterComponentVue,
    StoreTablecomponentVue
  },
}
</script>

<style>

</style>