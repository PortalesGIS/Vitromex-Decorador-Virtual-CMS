<template>
  <div class="w-full h-8 flex ">
      <div class="flex justify-between w-full">
          <div class="flex">
                <div class="h-full ml-10 mr-4 bg-white">
                 <div class="flex items-center h-full bg-white max-w-17 border" style="border-color: #D4D4D4">
                     <img src="../../assets/buscar.svg" class="w-4 h-4 mx-2" alt="">              
                     <input type="text"
                     v-model="country"
                      @input="chngeInputName"
                           class=" appearance-none h-full w-full border-0 border-transparent
                            bg-white focus:outline-none active:outline-non"
                           placeholder="Buscar"
                     >
                 </div>
             </div>
             <div class="flex  h-full bg-white items-center border" style="border-color: #D4D4D4">
                   <i class="fas fa-calendar-alt mx-2"></i>
                 <input 
                 v-model="dateone"
                  @input="changeInputDate"
                 class=" appearance-none w-30 bg-white focus:outline-none active:outline-non"
                 :max="now"
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
          <div class="flex justify-center items-center pr-3">
              <button 
              @click="onexportDocument"
              class="bg-1f w-44 h-8 monserrat text-force-white text-sm">Exportar Documento</button>
          </div>
      </div>
          
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
const { Parser } = require('json2csv');

export default {
    data() {
        return {
          now: new Date().toISOString().slice(0,10),
          country:"",
          city:"",
          dateone:"",
          dateTwo:"",

        }
    },
    computed:{
        ...mapGetters(["getAllUsers"])
    },
    methods: {
        ...mapActions(["filterUsersForCountry","filterUsersForCity","userFilterDates"]),
        onexportDocument(){
            const fields = ["_id","name","lastName","state","email","country","city","dateUserCreated"]
            const opts = {fields}    
            try {
                const parser = new Parser(opts);
                const csv = parser.parse(this.getAllUsers);
                let link = document.createElement('a');
                link.href = 'data:text/plain;charset=UTF-8,' + escape(csv);
                link.download = `UsersVitroArko-${new Date().toISOString().slice(0,10)}.csv`;
                link.click();
            } catch (error) {
                 console.error(error);
            }
        },
        chngeInputName() {
            this.filterUsersForCountry({word:this.country});
        },
        chngeInputcity() {
            this.filterUsersForCity({word:this.city});
        },
         changeInputDate(){
            console.log(this.dateone)            
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