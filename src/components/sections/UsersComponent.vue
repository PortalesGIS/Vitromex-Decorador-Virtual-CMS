<template>
  <div class="h-full w-full bg-blue-200">
    <div>
      <p class="uppercase text-7xl text-black font-bold pt-36 pl-20">
      Usuarios
      </p>
    </div>
    <div class="w-full mt-20">
      <UsersFiltercomponentVue/>
    </div>
    <div>
      tabla
    </div>
  </div>
</template>

<script>
import UsersFiltercomponentVue from '../filters/UsersFiltercomponent.vue'
export default {
  components: {
    UsersFiltercomponentVue,
  },
}
</script>

<style>

</style>