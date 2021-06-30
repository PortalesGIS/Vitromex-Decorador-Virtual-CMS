<template>
    <SerieModalComponentVue 
    :titleForm="'espacio'"
    :isNew="false" 
    :onSaveNew="onSaveNew" 
    ref="modal"/>
  <div class=" w-full h-full bg-f5 ">
      <div class=" flex justify-between bg-1f">
          <div class="pl-10 w-full max-w-1400px grid grid-cols-12 ">
          <div class="col-span-1 flex items-center justify-between mr-4">
              <p class="text-white text-sm font-bold py-2">No.</p>
                <i class="fas fa-angle-down" style="color:white"></i></div>
          <div class="col-span-2 flex items-center justify-between mr-4">
              <p class="text-white text-sm font-bold py-2">Nombre de la Serie</p>
                <i class="fas fa-angle-down" style="color:white"></i></div>
          <div class="col-span-2 flex items-center justify-between mr-4">
              <p class="text-white text-sm font-bold py-2">Imagen Miniatura</p>
                <i class="fas fa-angle-down" style="color:white"></i></div>
          <div class="col-span-2 flex items-center justify-between mr-4">
              <p class="text-white text-sm font-bold py-2">fecha de registro</p>
                <i class="fas fa-angle-down" style="color:white"></i></div>
      </div>
      <div class="bg-1f pr-10">
          <div class="px-1"><p class="text-white text-sm font-bold py-2">Editar</p></div>
      </div>
      </div>
      <div class="pl-10 h-px w-full  bg-gray-400"></div>
      <div class="h-full overflow-y-auto bg-f5">
      <div v-for="(serie,index) in getAllSeries" :key="index">
          <div class="flex justify-between"
             :class="(index%2)?'bg-white':''">
          <div class="pl-10 w-full grid grid-cols-12 max-w-1400px ">
          <div class="col-span-1">
              <p class="text-black text-sm py-2">{{index}}</p>
          </div>
          <div class="col-span-2">
              <p class="text-black text-sm py-2">{{serie.name}}</p>
          </div>
          <div class="col-span-2 ">
              <p class="text-black text-sm py-2 truncate  ">{{`${(serie.img!="")?'1':"0"}/1`}}</p>
          </div>
          <div class="col-span-2">
              <p class="text-black text-sm py-2">{{serie.dateCreated}}</p>
          </div>
      </div>
      <div class="mr-10 flex items-center">
                <button  
                @click="onOpenModal(serie)" >
                    <img class="object-cover h-6 w-6" src="../../assets/icons/editar.svg" alt="">                    
                </button>
        </div>
        </div>
        
      </div>
          </div>      
  <div class="pl-10 py-2 flex items-center w-full justify-between bg-1f">
     <div class="flex">
          <p class="text-white font-bold text-sm pr-2">Total de Filas:</p>
        <div class="border-2 px-1 bg-white">
            <select 
            class="ml-4 text-xl text-black font-bold appearance-none focus:outline-none active:outline-non"
            name="" id="">
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="10">100</option>
            <option value="1000">full</option>
        </select>
        <i class="fas fa-angle-down"></i>
        </div>
     </div>
     <div class="flex mr-10">
         <div>
             <p class="text-white font-bold">20-12,458</p>
         </div>
         <div class="mx-4 cursor-pointer">
            <i class="fas fa-angle-left fa-2x" style="color:white"></i>
         </div>
         <div class="mx-4 cursor-pointer">
            <i class="fas fa-angle-right fa-2x" style="color:white"></i>
         </div>
     </div>
  </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import SerieModalComponentVue from '../modals/SerieModalComponent.vue';

export default {
    components: {
        SerieModalComponentVue,
    },
    data() {
        return {
        }
    },
    methods: {
        ...mapActions(["getAllSeriesDB"]),
        async onGetAllSeries(){
            await this.getAllSeriesDB();
        },
        onOpenModal(serie){
              this.$refs.modal.openModalForEditing(serie)
        },        
        onSaveNew(payload){
            console.log(payload)
        }
    },
    computed: {
    ...mapGetters(["getAllSeries"]),
    },
    created () {
        this.onGetAllSeries();
    },
}
</script>

<style scope>

</style>