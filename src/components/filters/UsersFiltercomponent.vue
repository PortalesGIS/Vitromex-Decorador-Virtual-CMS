<template>
  <div class="w-full h-8 flex">
      <div class="h-full ml-10 mr-4">
          <div class="flex items-center h-full bg-f5 max-w-17">
              <i class="fas fa-map-marker-alt mx-2"></i>
              <input type="text"
              v-model="country"
               @input="chngeInputName"
                    class=" appearance-none h-full w-full border-0 border-transparent bg-white focus:outline-none active:outline-non"
                    placeholder="Buscar"
              >
          </div>
      </div>
      <div class="flex  h-full bg-white items-center">
            <i class="fas fa-calendar-alt mx-2"></i>
          <input 
          v-model="dateone"
           @input="changeInputDate"
          class=" appearance-none w-30 bg-white focus:outline-none active:outline-non"
          type="date">
          <p class="mx-2">-</p>
          <input 
          v-model="dateTwo"
          @input="changeInputDate"
          class=" appearance-none w-30 bg-white focus:outline-none active:outline-non"
          type="date">          
      </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    data() {
        return {
          country:"",
          city:"",
          dateone:"",
          dateTwo:"",

        }
    },
    methods: {
        ...mapActions(["filterUsersForCountry","filterUsersForCity","userFilterDates"]),
        chngeInputName() {
            this.filterUsersForCountry({word:this.country});
        },
        chngeInputcity() {
            this.filterUsersForCity({word:this.city});
        },
         changeInputDate(){
            // console.log(new Date(this.dateone).getTime() < new Date("2021-06-20").getTime() && new Date(this.dateTwo).getTime() > new Date("2021-06-20").getTime() )            
            if(this.dateone!="" && this.dateTwo!=""){
                this.userFilterDates({
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