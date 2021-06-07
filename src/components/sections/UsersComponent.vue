<template>
  <div class="h-full w-full bg-white">
    <div>
      <p class="uppercase text-7xl text-black font-bold pt-36 pl-20">
      Usuarios
      </p>
    </div>
    <div class="w-full mt-20">
      <UsersFiltercomponentVue/>
    </div>
    <div class="w-full ">
      <UsersTableComponentVue/>  
    </div>
  </div>
</template>

<script>
import UsersFiltercomponentVue from '../filters/UsersFiltercomponent.vue'
import UsersTableComponentVue from '../tables/UsersTableComponent.vue'
export default {
  components: {
    UsersFiltercomponentVue,
    UsersTableComponentVue,
  },
}
</script>

<style>

</style>