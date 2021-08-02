<template>
  <div class="w-full h-8 flex">
      <div class="h-full ml-10 mr-4">
          <div class="flex items-center h-full bg-white max-w-17 border" style="border-color: #D4D4D4">
               <img src="../../assets/buscar.svg" class="w-4 h-4 mx-2" alt="">    
              <input type="text"
               v-model="word"
               @input="chngeInputText"
                    class=" appearance-none h-full w-full border-0 border-transparent bg-gwhite focus:outline-none active:outline-non"
                    placeholder="Buscar"
              >
          </div>
      </div>
      <div class="flex h-full bg-white items-center border" style="border-color: #D4D4D4">
            <i class="fas fa-calendar-alt mx-2"></i>
          <input 
          v-model="dateone"
          @input="changeInputDate"
            :max="now"
          class=" appearance-none w-30 bg-white focus:outline-none active:outline-non"
          type="date">
          <p class="mx-2">-</p>
          <input 
          v-model="dateTwo"
          @input="changeInputDate"
          :min="dateone===''?'':dateone"
                 :max="now"
          class=" appearance-none w-30 bg-white focus:outline-none active:outline-non"
          type="date">          
      </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data() {
        return {
          now: new Date().toISOString().slice(0,10),
          word:"",
          dateone:"",
          dateTwo:"",

        }
    },
    methods: {
        ...mapActions(["filterSeries","seriesFilterDates"]),
        chngeInputText() {
            this.filterSeries({word:this.word})   
        },
        changeInputDate(){
            // console.log(new Date(this.dateone).getTime() < new Date("2021-06-20").getTime() && new Date(this.dateTwo).getTime() > new Date("2021-06-20").getTime() )            
            if(this.dateone!="" && this.dateTwo!=""){
                this.seriesFilterDates({
                    dateOne:this.dateone,
                    dateTwo:this.dateTwo
                })
            }            
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