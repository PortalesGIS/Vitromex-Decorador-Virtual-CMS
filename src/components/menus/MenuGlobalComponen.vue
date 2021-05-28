<template>
  <div>
      <!-- Active Breakpoint Indicator -->
<div class="fixed top-0 right-0 m-8 p-3 text-xs font-mono text-white h-6 w-6 rounded-full flex items-center justify-center bg-gray-700 sm:bg-pink-500 md:bg-orange-500 lg:bg-green-500 xl:bg-blue-500">
  <div class="block  sm:hidden md:hidden lg:hidden xl:hidden">al</div>
  <div class="hidden sm:block  md:hidden lg:hidden xl:hidden">sm</div>
  <div class="hidden sm:hidden md:block  lg:hidden xl:hidden">md</div>
  <div class="hidden sm:hidden md:hidden lg:block  xl:hidden">lg</div>
  <div class="hidden sm:hidden md:hidden lg:hidden xl:block">xl</div>
</div>
<!-- /Active Breakpoint Indicator -->
      <div class=""
      >
      <div class="h-screen">
      <div class="absolute w-4/12 max-w-17 h-full bg-red-500 md:bg-black lg:bg-yellow-400 xl:to-blue-500 overflow-auto rounded-r-lg">
      <div class="h-5/6 overflow-auto">
     <div class="flex  justify-between pt-4 mx-4">
        <div class="bg-white w-4 h-4"></div>
        <div class="bg-white w-4 h-4"></div>
      </div>
      <div class="flex justify-evenly items-center mx-6 mt-10">          
          <div class="w-full h-20 max-h-32px max-w-170px bg-white"></div>
          <div class="w-4 h-4 bg-white" ></div>
      </div>
      <div class="flex justify-start items-center mx-6 mt-10">          
          <div class="h-4 w-4 rounded-full bg-white"></div>
          <div class="mx-2">
              <p class="text-white">DASHBOARD</p>
          </div>
      </div>
      <div 
        @click="goToUsers()"
        class="flex justify-start items-center mx-6 mt-10 cursor-pointer">          
          <div class="h-4 w-4 rounded-full bg-white"></div>
          <div class="mx-2">
              <p class="text-white">USUARIOS</p>
          </div>
      </div>
      <div class="flex justify-start items-center mx-6 mt-10">          
          <div class="h-4 w-4 rounded-full bg-white"></div>
          <div class="mx-2">
              <p class="text-white">PRODUCTOS</p>
          </div>
      </div>
      <div class="flex justify-start items-center mx-6 mt-10">          
          <div class="h-4 w-4 rounded-full bg-white"></div>
          <div class="mx-2">
              <p class="text-white">TIENDAS</p>
          </div>
      </div>
      <div class="flex justify-start items-center mx-6 mt-10">          
          <div class="h-4 w-4 rounded-full bg-white"></div>
          <div class="mx-2">
              <p class="text-white">ADMINISTRADORES</p>
          </div>
      </div>
      </div>
      <div class="h-1/6 pb-10 overflow-auto ">      
          <div class="flex h-full justify-start mx-6 bottom-0 items-end">          
          <div class="h-8 w-8 rounded-full bg-white"></div>
          <div class="mx-2">
              <p class="text-white">NOMBRE DEL ADMIN</p>
              <button class="text-xs text-green-400">CERRAR SESIÓN</button>
          </div>
      </div>
      </div>
      </div>
  </div></div>
  <!-- escritorio -->
      <div></div>
  </div>
</template>

<script>

export default {
    methods: {
        goToUsers() {
            console.log("users")
        }
    },
}
</script>

<style>

</style>