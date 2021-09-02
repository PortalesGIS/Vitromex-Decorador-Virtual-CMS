<template>
  <div class="flex justify-between  w-full ">
        <div class="w-full  h-full p-2 ">
          <div class="w-full bg-white shadow-4xl" style="height:648px">
            <div class="flex w-full justify-between items-center">
              <div>                
                <p class=" text-lg font-semibold text-force-black pl-7 pt-4 moserrat-semibold">Top de Productos Favoritos</p>
              </div>
              <div class="flex items-center pr-3 pt-4">
                <div class="flex h-7 bg-white items-center border ">
                    <img src="../../assets/Calendario.svg" class="mx-2" style="width:15px; height:13px" alt="">                    
                    <input 
                    v-model="dateone"
                    @input="changeInputDate"
                    :max="now"
                    class=" appearance-none  text-xs bg-white focus:outline-none active:outline-non"
                    type="date">
                    <p class="">-</p>
                    <input 
                      v-model="dateTwo"
                      @input="changeInputDate"
                      :min="dateone===''?'':dateone"
                      :max="now"
                    class=" appearance-none  text-xs bg-white focus:outline-none active:outline-non"
                    type="date">          
                </div>
              </div>
            </div>
          <div class="w-full h-full ">
            <div class="px-4 py-4 overflow-y-auto" style="max-height:538px">
              <div v-for="product in getDasboardData.listProductFavorites" :key="product">
                <div class="">
                  <div class="w-full h-px bg-d4"></div>
                </div>
                <div class="grid grid-cols-12 w-full">
                  <div class="col-span-3 h-14  flex items-center justify-center">
                    <p class="text-base text-center font-medium moserrat-semibold" style="color:#030405">{{product.name}} </p>
                  </div>
                  <div class="col-span-8 h-14  flex items-center  justify-center">
                    <div class="h-4" style="width:450px;">
                        <div class="h-full bg-7db"
                        :style="{width:`${getPercentage(product.total,getDasboardData.listProductFavorites[0].total)}%`}"></div>
                    </div>
                  </div>
                  <div class="col-span-1 h-14 flex items-center justify-center">
                    <p class="text-base font-medium" style="color:#030405">{{product.total}}</p>
                  </div>
                </div>
              </div>
            </div>            
          </div>
          </div>
        </div>
        <div class="w-full bg-6f h-full p-2 ">
          <div class="w-full bg-white shadow-4xl" style="height:648px">
            <div class="flex w-full justify-between items-center">
              <div>                
                <p class="text-lg font-semibold text-force-black pl-7 pt-4 moserrat-semibold">Top de Productos Aplicados</p>
              </div>
              <div class="flex items-center pr-3 pt-4">
                <div class="flex h-7 bg-white items-center border ">
                    <img src="../../assets/Calendario.svg" class="mx-2" style="width:15px; height:13px" alt="">                    
                    <input 
                    v-model="dateoneFilterTwo"
                    @input="changeInputDateFilterAplicateProducts"
                    :max="now"
                    class=" appearance-none  text-xs bg-white focus:outline-none active:outline-non"
                    type="date">
                    <p class="">-</p>
                    <input 
                    v-model="dateTwoFilterTwo"
                      @input="changeInputDateFilterAplicateProducts"
                      :min="dateoneFilterTwo===''?'':dateoneFilterTwo"
                      :max="now"
                    class=" appearance-none  text-xs bg-white focus:outline-none active:outline-non"
                    type="date">          
                </div>
              </div>
            </div>
          <div class="w-full h-full ">
            <div class="px-4 py-4 overflow-y-auto" style="max-height:538px">
              <div v-for="product in getDasboardData.listProductsApplications" :key="product">
                <div class="">
                  <div class="w-full h-px bg-d4"></div>
                </div>
                <div class="grid grid-cols-12 w-full">
                  <div class="col-span-3 h-14  flex items-center justify-center">
                    <p class="text-base text-center font-medium moserrat-semibold" style="color:#030405">{{product.name}}</p>
                  </div>
                  <div class="col-span-8 h-14  flex items-center  justify-center">
                    <div class="h-4" style="width:450px;">
                        <div class="h-full  bg-7db" 
                        :style="{width:`${getPercentage(product.total,getDasboardData.listProductsApplications[0].total)}%`}"
                        ></div>
                    </div>
                  </div>
                  <div class="col-span-1 h-14 flex items-center justify-center">
                    <p class="text-base font-medium" style="color:#030405">{{product.total}}</p>
                  </div>
                </div>
              </div>
            </div>            
          </div>
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
     dateone:"",
     dateoneFilterTwo:"",
     dateTwo:"",
     dateTwoFilterTwo:"",
    }
  },
 computed: {
    ...mapGetters(["getDasboardData"])
  },
  methods: {
    ...mapActions(["onGetProductsFavorites","onGetProductsAplicated",'onFilterFavoritesList','onFilterAplicatesList']),
    getPercentage(total,max){   
      return (total*100)/max;
    },
    changeInputDate(){
          // console.log(new Date(this.dateone).getTime() < new Date("2021-06-20").getTime() && new Date(this.dateTwo).getTime() > new Date("2021-06-20").getTime() )            
          if(this.dateone!="" && this.dateTwo!=""){
              console.log("filtar (favorites) por: " + this.dateone +" "+ this.dateTwo)
              this.onFilterFavoritesList({dateOne:this.dateone,dateTwo:this.dateTwo})
          }            
    },
    changeInputDateFilterAplicateProducts(){
          // console.log(new Date(this.dateone).getTime() < new Date("2021-06-20").getTime() && new Date(this.dateTwo).getTime() > new Date("2021-06-20").getTime() )            
          if(this.dateoneFilterTwo!="" && this.dateTwoFilterTwo!=""){
              console.log("filtar (aplicates) por: " + this.dateoneFilterTwo +" "+ this.dateTwoFilterTwo)
              this.onFilterAplicatesList({dateOne:this.dateoneFilterTwo,dateTwo:this.dateTwoFilterTwo})
          }            
    }
  },
  created () {
    this.onGetProductsFavorites()
    this.onGetProductsAplicated()
  },
}
</script>

<style>

</style>