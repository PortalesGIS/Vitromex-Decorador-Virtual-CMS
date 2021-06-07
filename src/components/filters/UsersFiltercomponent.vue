<template>
  <div class="w-full h-8 flex">
      <div class="h-full ml-10 mr-4">
          <div class="flex items-center h-full bg-gray-100 max-w-17">
              <i class="fas fa-map-marker-alt mx-2"></i>
              <input type="text"
                    class=" appearance-none h-full w-full border-0 border-transparent bg-gray-100 focus:outline-none active:outline-non"
                    placeholder="Buscar por País"
              >
          </div>
      </div>
      <div class="h-full mr-4">
          <div class="flex items-center h-full bg-gray-100 max-w-17">
              <i class="fas fa-map-marker-alt mx-2"></i>
              <input type="text"
                    class=" appearance-none h-full w-full border-0 border-transparent bg-gray-100 focus:outline-none active:outline-non"
                    placeholder="Buscar por Ciudad"
              >
          </div>
      </div>
      <div class="flex  h-full bg-gray-100 items-center">
            <i class="fas fa-calendar-alt mx-2"></i>
          <input 
          class=" appearance-none w-30 bg-gray-100 focus:outline-none active:outline-non"
          type="date">
          <p class="mx-2">-</p>
          <input 
          class=" appearance-none w-30 bg-gray-100 focus:outline-none active:outline-non"
          type="date">          
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
          
        }
    },
    mounted () {
       
    },
}
</script>

<style scope>

input[type="date"]::-webkit-calendar-picker-indicator {
    background: transparent;
    position: absolute;
    width: 80px;
}
</style>