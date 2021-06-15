<template>
  <div class="flex h-screen w-screen">
    <MenuGlobalComponenVue/>
    <div class="w-full h-full">
      <div 
        v-if="getVieWindow===windows.dashboard"
        class="w-full h-full">
        <DashboradComponentVue/>
      </div>    
      <div 
        v-if="getVieWindow===windows.users"
        class="w-full h-full">
        <UsersComponentVue/>
      </div>    
      <div 
        v-if="getVieWindow===windows.products"
        class="w-full h-full ">
        <ProductsComponentVue/>
      </div>    
      <div 
        v-if="getVieWindow===windows.stores"
        class="w-full h-full">
        <StoresComponentVue/>
      </div>    
      <div 
        v-if="getVieWindow===windows.admins"
        class="w-full h-full">
        <AdmisComponentVue/>
      </div>    
      <div 
        v-if="!getVieWindow || getVieWindow>=6"
        class="w-full h-full bg-red-500">
      </div>    
    </div>    
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MenuGlobalComponenVue from '../../components/menus/MenuGlobalComponen.vue'
import AdmisComponentVue from '../../components/sections/AdmisComponent.vue'
import DashboradComponentVue from '../../components/sections/DashboradComponent.vue'
import ProductsComponentVue from '../../components/sections/ProductsComponent.vue'
import StoresComponentVue from '../../components/sections/StoresComponent.vue'
import UsersComponentVue from '../../components/sections/UsersComponent.vue'
import {typesViewsMenu} from '../../types/data'
export default {
  components: {
    MenuGlobalComponenVue,
    DashboradComponentVue,
    UsersComponentVue,
    ProductsComponentVue,
    StoresComponentVue,
    AdmisComponentVue
  },
  data() {
    return {
      windows:typesViewsMenu
    }
  },
  computed: {
    ...mapGetters(["getVieWindow"]),
  },
}
</script>

<style>

</style>