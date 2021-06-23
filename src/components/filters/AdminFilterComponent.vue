<template>
  <div class="w-full h-8 flex justify-between">
      <div class="flex">
          <div class="h-full ml-10 mr-4">
          <div class="flex items-center h-full bg-gray-100 max-w-17">
              <i class="fas fa-map-marker-alt mx-2"></i>
              <input type="text"
              v-model="word"
               @input="chngeInputName"
                    class=" appearance-none h-full w-full border-0 border-transparent bg-gray-100 focus:outline-none active:outline-non"
                    placeholder="Buscar"
              >
          </div>
      </div>
      <div class="flex  h-full bg-gray-100 items-center">
            <i class="fas fa-calendar-alt mx-2"></i>
          <input 
          v-model="dateone"
          @input="changeInputDate"
          class=" appearance-none w-30 bg-gray-100 focus:outline-none active:outline-non"
          type="date">
          <p class="mx-2">-</p>
          <input 
          v-model="dateTwo"
          @input="changeInputDate"
          class=" appearance-none w-30 bg-gray-100 focus:outline-none active:outline-non"
          type="date">          
      </div>
      </div>
      <div class="flex">
          <div>
              <button class="border-gray-400 border-2 bg-white text-gray-500 px-4 py-2 mx-2">Eliminar</button>
          </div>
          <div>
              <button class=" border-black border-2 bg-black text-white mx-2 p-2">Nuevo administrador</button>
          </div>
      </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    data() {
        return {
          word:"",
          city:"",
          dateone:"",
          dateTwo:""
        }
    },
    methods: {
        ...mapActions(["filterAdmin","adminFilterDates"]),
        chngeInputName() {
          this.filterAdmin({word:this.word})
        },
        changeInputDate(){
            // console.log(new Date(this.dateone).getTime() < new Date("2021-06-20").getTime() && new Date(this.dateTwo).getTime() > new Date("2021-06-20").getTime() )            
            if(this.dateone!="" && this.dateTwo!=""){
                this.adminFilterDates({
                    dateOne:this.dateone,
                    dateTwo:this.dateTwo
                })
            }            
        }
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