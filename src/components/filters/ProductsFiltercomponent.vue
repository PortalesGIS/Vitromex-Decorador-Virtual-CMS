<template>
<div 
v-if="isOpenModalFormat"
class="z-50 fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-20">
    <div class='w-full h-full flex justify-center items-center'>
        <div class="bg-white w-full max-w-411px max-h-612px overflow-y-auto">
            <div class="w-full flex justify-center">
                <p class="pt-6 uppercase monserrat text-xl text-force-black">FORMATOS de LOS ProductoS</p>    
            </div>
            <div class="bg-1f w-full h-7 mt-3 flex justify-around items-center px-11">
                <p class="text-force-white text-xs">Formato</p>
                <p class="text-force-white text-xs">Formato redondeado</p>
            </div>           
            <div v-for="format,index in getAllFormats" :key="format" >
                <div 
               v-if="(index >= startData && index <= endData)"
                :class="(index%2===0)?'bg-f5':'bg-white'"
                class="w-full h-9 flex justify-around items-center px-11">
                <p class="text-sm text-force-black w-8">{{format.format}}</p>
                <input 
                @change="addFormatToUpdate(format)"
                type="text" :id="format._id" :placeholder="format.rounded" class="text-sm pl-2 w-44 h-8 border border-black lowercase">
            </div>
            </div>
            <div class="w-full h-7 bg-1f">
                <div class="w-full h-full flex justify-end pr-7 items-center">
            <div>
                <!-- <p class="text-force-white font-semibold text-xs">{{startData}}-{{endData}},{{getAllStores.length}}</p> -->
                <!-- <p v-if="true" class="text-force-white font-semibold text-xs">{{startData}}-{{endData}},{{getAllStores.length}}</p> -->
                <p v-if="true" class="text-force-white font-semibold text-xs">{{startData}}-{{endData}},{{getAllFormats.length}}</p>
                    <p v-else class="text-force-white font-semibold text-xs">Todo</p>
                    </div>
                    <div class="cursor-pointer ml-7"   @click="backPageTable()">
                        <img src="../../assets/paginador_izquierda.svg" style="width:18px; height:12px" alt="">
                    </div>
                    <div class="cursor-pointer ml-7" @click="nextPageTable">
                        <img src="../../assets/paginador_derecha.svg" style="width:18px; height:12px" alt="">            
                    </div>
                </div>
            </div>  
            <div class="w-full h-16 flex justify-around items-center">
                <div 
                @click="onUpdateFormatsToDB"
                class="w-44 h-8 text-center py-1 text-force-white bg-1f cursor-pointer">Guardar cambios</div>
                <div 
                @click="clickNewFormat(false)"
                class="w-44 h-8 text-center text-force-black py-1 text-black border border-black cursor-pointer">Cancelar</div>
            </div>                      
        </div>
    </div>
</div>

<!-- start -->
  <div class="w-full h-8 flex items-center overflow-x-hidden ">
      <div class="h-full ml-10 mr-4 ">
          <div class="flex items-center   h-full bg-white max-w-17 border" style="border-color: #D4D4D4">
              <img src="../../assets/buscar.svg" class="w-4 h-4 mx-2" alt="">    
              <input type="text"               
               v-model="stringSearch"
               @input="chngeInputName"
                    class=" appearance-none h-full w-full border-0 border-transparent bg-white focus:outline-none active:outline-non"
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
      <div class="h-full w-full ml-10 mr-4 flex justify-end">
          <div class="flex items-center h-full max-w-17 cursor-pointer">
              <div @click="clickNewFormat(true)"><p class="text-force-white bg-black px-9 py-1">Formatos</p></div>
          </div>
      </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    data() {
        return {
             now: new Date().toISOString().slice(0,10),
            stringSearch: "",
            dateone:"",
            dateTwo:"",
            numberDataPerPage: 10,
            startData:0,
            endData:10,
            formatsToupdate:[],
            isOpenModalFormat:false,
        }
    },
    methods: {
        ...mapActions(["filterProductsForString","onChangeViewWindow","getAllproductsdb","productFilterDates","onGeatAllFotmatsDB","UpdateFormats"]),
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
            }            
        },
        clickNewFormat(isOpend){
            this.isOpenModalFormat = isOpend
        },
        addFormatToUpdate(format){
           let roundedChanged = document.getElementById(format._id).value.toLowerCase() 
           if(this.idCorrectFormat(roundedChanged)){
            roundedChanged = roundedChanged.replace(/ /g,"")
            this.formatsToupdate.push({id:format._id,rounded:roundedChanged})
           }
           else{
               alert(`el formato ingresado "${roundedChanged}" no es aceptado por favor asegurate de que sigue el patron 00x00`)
           }
        },
        idCorrectFormat(format){
            return format.includes("x")
        },
        async getFormats(){
            await this.onGeatAllFotmatsDB()
        },
       async onUpdateFormatsToDB(){
           this.clickNewFormat(false)
            await this.UpdateFormats(this.formatsToupdate)
            this.onChangeViewWindow(1)

        },
        /////////////////////// controlador de paginas Formatos
         changeRange(){        
        this.startData = 0;
        this.endData = this.numberDataPerPage
    },
    nextPageTable(){
      if(this.startData<=-1){
        this.changeRange()
      }
      else if(this.endData>this.getAllFormats.length){
        return
      }
      else{
        this.startData = this.endData
        this.endData = parseInt(this.startData)  + parseInt(this.numberDataPerPage)
      }
    },
    backPageTable(){
      if(this.startData<=0){
        this.changeRange()
      }
      else{
        this.endData = this.startData
        this.startData =parseInt(this.endData)  - parseInt(this.numberDataPerPage)
      }
    }
    // ///////////////////////////
    },
    computed:{
        ...mapGetters(["getAllProducts","getAllFormats"]),
    },
    created () {
        this.getFormats()
    },
}
</script>

<style scoped>
input[type="date"]::-webkit-calendar-picker-indicator {
    background: transparent;
    position: absolute;
    width: 80px;
}
</style>