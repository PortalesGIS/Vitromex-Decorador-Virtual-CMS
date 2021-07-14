<template>
<div class="h-screen w-full  bg-6f overflow-hidden">
    <div class="h-16"></div>    
    <div class="h-5/6   bg-6f shadow-10xl overflow-hidden">
    <div class="overflow-hidden">
      <p class="uppercase text-5xl text-white font-normal pl-10 py-7">
      Administradores
      </p>
    </div>
      <div class="w-full h-full px-5 ">
        <div class="flex items-center w-full  bg-f5 h-16">
      <AdminFilterComponentVue
        :adminsSelected="adminSelected"
      />
    </div>
    <div class="w-full h-4/6   bg-6f">
     <AdminTableComponentVue
      :onSelectedAdmin="selectedAdmin"
     />
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
 data() {
   return {
     adminSelected: [],
   }   
 },
 methods: {
   selectedAdmin(value) {
     const index = this.adminSelected.findIndex(elm =>elm ===value)
            if(index>=0){
                this.adminSelected.splice(index,1)
            }
            else{
             this.adminSelected.push(value)
            }          
   }
 },
}
</script>

<style>

</style>