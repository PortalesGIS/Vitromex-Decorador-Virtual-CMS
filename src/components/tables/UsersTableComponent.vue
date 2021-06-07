<template>
  <div class="mt-10 w-full bg-gray-100 ">
      <div class="pl-10 w-full max-w-1400px grid grid-cols-12 ">
          <div class="">
              <p class="text-black text-sm font-bold py-2">No.</p></div>
          <div class="col-span-2 flex items-center justify-between mr-4">
              <p class="text-black text-sm font-bold py-2">Nombre</p>
                <i class="fas fa-angle-down"></i></div>
          <div class="col-span-2 flex items-center justify-between mr-4">
              <p class="text-black text-sm font-bold py-2">Apellido</p>
                <i class="fas fa-angle-down"></i></div>
          <div class="col-span-2 flex items-center justify-between mr-4">
              <p class="text-black text-sm font-bold py-2">Correo</p>
                <i class="fas fa-angle-down"></i></div>
          <div class="col-span-1 flex items-center justify-between mr-4">
              <p class="text-black text-sm font-bold py-2">Pais         </p>
                <i class="fas fa-angle-down"></i></div>
          <div class="col-span-2 flex items-center justify-between mr-4">
              <p class="text-black text-sm font-bold py-2">Ciudad</p>
                <i class="fas fa-angle-down"></i></div>
          <div class="col-span-2 flex items-center justify-between mr-4">
              <p class="text-black text-sm font-bold py-2">Fecha de Registro</p>
                <i class="fas fa-angle-down"></i></div>
      </div>
      <div class="pl-10 h-px w-full  bg-gray-400"></div>
      <div v-for="x in 20" :key="x">
          <div class="pl-10 grid grid-cols-12 max-w-1400px ">
          <div class="">
              <p class="text-black text-sm py-2">1</p>
          </div>
          <div class="col-span-2">
              <p class="text-black text-sm py-2">Angel isai</p>
          </div>
          <div class="col-span-2">
              <p class="text-black text-sm py-2">Ramirez bazan</p>
          </div>
          <div class="col-span-2">
              <p class="text-black text-sm py-2 overflow-x-hidden">qwerasdffdeswa@live.com</p>
          </div>
          <div class="col-span-1">
              <p class="text-black text-sm py-2">Mexico</p>
          </div>
          <div class="col-span-2">
              <p class="text-black text-sm py-2">Oaxaca</p>
          </div>
          <div class="col-span-2">
              <p class="text-black text-sm py-2">01/10/2020</p>
          </div>
      </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scope>
</style>