<template>
<div class="h-screen w-full bg-gray-800 overflow-hidden">
    <div class="h-16"></div>    
    <div class="h-5/6  bg-gray-700 shadow-10xl overflow-hidden">
    <div class="overflow-hidden">
      <p class="uppercase text-7xl text-white font-bold pl-10 ">
      Administradores
      </p>
    </div>
      <div class="w-full h-full px-5">
        <div class="flex items-center w-full mt-16  bg-gray-300 h-16">
      <AdminFilterComponentVue/>
    </div>
    <div class="w-full h-4/6   bg-gray-400">
     <AdminTableComponentVue/>
    </div>
      </div>
    </div>
  </div>
</template>

<script>
import AdminFilterComponentVue from '../filters/AdminFilterComponent.vue'
import AdminTableComponentVue from '../tables/AdminTableComponent.vue'
export default {
  components: {
    AdminFilterComponentVue,
    AdminTableComponentVue
  },

}
</script>

<style>

</style>