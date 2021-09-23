<template>
   <div class="h-screen w-full bg-6f overflow-hidden">
    <div class="h-5 xl:h-16"></div>    
    <div class="h-5/6  bg-6f shadow-10xl overflow-hidden">
    <div class="overflow-hidden">
      <p class="uppercase text-5xl monserrat text-white font-normal pl-10 py-7 ">
      Tiendas
      </p>
    </div>
      <div class="w-full h-full px-5">
        <div class="flex items-center w-full shadow-4xl bg-f5 h-16">
      <StoresFilterComponentVue/>
    </div>
    <div class="w-full h-3/6 xl:h-4/6 shadow-4xl  bg-6f">
     <StoreTablecomponentVue/>
    </div>
      </div>
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