<template>
  <div class="w-full h-8 flex items-center ml-4">
      <div class="h-full  mr-4">
          <div class="flex items-center  h-full bg-gray-100 max-w-17">
              <i class="fas fa-search mx-2"></i>
              <input type="text"               
               v-model="stringSearch"
               @input="chngeInputName"
                    class=" appearance-none h-full w-full border-0 border-transparent bg-gray-100 focus:outline-none active:outline-non"
                    placeholder="Buscar"
              >
          </div>
      </div>
      <div class="flex h-full bg-gray-100 items-center">
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
      <!-- <div class="h-full ml-10 mr-4">
          <div class="flex items-center h-full max-w-17 cursor-pointer">
              <div class="w-4 h-4 rounded-full bg-gray-400 mx-2"></div>
              <div><p class="text-gray-400">Eliminar</p></div>
          </div>
      </div> -->
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    data() {
        return {
            stringSearch: "",
            dateone:"",
            dateTwo:"",
        }
    },
    methods: {
        ...mapActions(["filterProductsForString","productFilterDates"]),
        chngeInputName() {
            this.filterProductsForString({word:this.stringSearch});
        },
        changeInputDate(){
            // console.log(new Date(this.dateone).getTime() < new Date("2021-06-20").getTime() && new Date(this.dateTwo).getTime() > new Date("2021-06-20").getTime() )            
            if(this.dateone!="" && this.dateTwo!=""){
                this.productFilterDates({
                    dateOne:this.dateone,
                    dateTwo:this.dateTwo
                })
                console.log(this.dateone)
                console.log(this.dateTwo)
            }            
        }
    },
    computed:{
        ...mapGetters(["getAllProducts"]),
    }
}
</script>

<style scoped>
input[type="date"]::-webkit-calendar-picker-indicator {
    background: transparent;
    position: absolute;
    width: 80px;
}
</style>