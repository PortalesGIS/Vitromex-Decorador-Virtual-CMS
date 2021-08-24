<template>
<SpacesAndTypoModalComponentVue 
    :titleForm="'tipología'"
    :isNew="false" 
    :onSaveNewSpace="onSaveNewTipologie" 
    ref="modal"/>
  <div class=" w-full h-full bg-f5 ">
      <div class=" flex justify-between bg-1f">
          <div class="pl-10 w-full max-w-1400px grid grid-cols-12 bg-1f">
          <!-- <div class="col-span-1 flex items-center justify-center mr-4">
              <p class="text-force-white text-xs font-semibold py-2 moserrat-semibold"></p>
            </div> -->
          <div class="col-span-1 flex items-center justify-center mr-4">
              <p class="text-force-white text-xs font-semibold py-2 moserrat-semibold">No.</p>
            </div>
          <div class="col-span-2 flex items-center justify-center mr-4">
              <p class="text-force-white text-xs font-semibold py-2 moserrat-semibold">Imágenes</p>
            </div>
          <div class="col-span-2 flex items-center justify-center mr-4">
              <p class="text-force-white text-xs font-semibold py-2 moserrat-semibold">Nombre del Espacio</p>
            </div>
          <div class="col-span-2 flex items-center justify-center mr-4">
              <p class="text-force-white text-xs font-semibold py-2 moserrat-semibold">Fecha de Registro</p>
            </div>
      </div>
      <div class="bg-1f">
          <div class="mr-10"><p class="text-force-white text-sm font-bold py-2">Editar</p></div>
      </div>
      </div>
      <div class="pl-10 h-px w-full  bg-gray-400"></div>
      <div class="h-full overflow-y-auto bg-f5">
      <div v-for="(typologie,index) in getAllTypologies" :key="index">
           <div v-if="(index >= startData && index <= endData)">
          <div class="flex justify-between"
             :class="(index%2)?'bg-white':''">
          <div class="pl-10 w-full grid grid-cols-12 max-w-1400px ">
              <!-- <div class="col-span-1 flex justify-start items-center">
              <p class="text-force-black text-sm py-2 monserrat "> 
                  <input @change="changeTextBox(typologie._id)" type="checkbox">
                  </p>
          </div> -->
          <div class="col-span-1 flex justify-center items-center">
              <p class="text-force-black text-sm py-2 monserrat ">{{index+1}}</p>
          </div>
          <div class="col-span-2 flex justify-center items-center">
              <!-- <p class="text-force-black text-sm py-2 monserrat ">{{typologie.name}}</p> -->
              <div class="py-2">
                <img  :src="typologie.img" style="width:86px; height:86px" alt="">              
              </div>
          </div>
          <div class="col-span-2  flex justify-center items-center">
              <p class="text-force-black text-sm py-2 monserrat  truncate  ">{{typologie.name}}</p>
          </div>
          <div class="col-span-2 flex justify-center items-center">
              <p class="text-force-black text-sm py-2 monserrat ">{{typologie.dateCreated}}</p>
          </div>
      </div>
      <div class="mr-10 flex items-center">
                <button  
                @click="onOpenModalForEditing(typologie)" >
                    <img class="object-cover h-6 w-6" src="../../assets/icons/editar.svg" alt="">                    
                </button>
        </div>
        </div>
        </div>
        
      </div>
          </div>      
 <div class="pl-10 py-2 flex items-center w-full  justify-between bg-1f">
     <div class="flex items-center">
          <p class="text-force-white font-semibold text-xs pr-2">Total de Filas:</p>
        <div class="border-2 px-1 bg-white">
           <select 
            class="text-xs w-10 pl-2   appearance-none focus:outline-none active:outline-non"
            name="" id=""
            v-model="numberDataPerPage"
            @change="changeRange"
            >
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="100000">Todo</option>
        </select>
        <i class="fas fa-angle-down w-2"></i>
        </div>
     </div>
     <div class="flex mr-7 items-center">
         <div>
             <!-- <p class="text-force-white font-semibold text-xs">{{startData}}-{{endData}},{{getAllTypologies.length}}</p> -->
             <p v-if="endData<10000" class="text-force-white font-semibold text-xs">{{startData}}-{{endData}},{{getAllTypologies.length}}</p>
          <p v-else class="text-force-white font-semibold text-xs">Todo</p>
         </div>
         <div class="cursor-pointer ml-7"    @click="backPageTable()">
            <img src="../../assets/paginador_izquierda.svg" style="width:18px; height:12px" alt="">
         </div>
         <div class="cursor-pointer ml-14"  @click="nextPageTable">
            <img src="../../assets/paginador_derecha.svg" style="width:18px; height:12px" alt="">            
         </div>
     </div>
  </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import SpacesAndTypoModalComponentVue from '../modals/SpacesAndTypoModalComponent.vue';

export default {
    components: {
        SpacesAndTypoModalComponentVue,
    },
    data() {
        return {
             numberDataPerPage: 20,
      startData:0,
      endData:20,
        }
    },
    props: {
        changeTypologieSelected: {
            type: Function,
            default: ()=>{}
        },
    },
    methods: {
        ...mapActions(["getAllTypologiesDB","updateTypologieDB"]),
        async onGetAllTypologies(){
            await this.getAllTypologiesDB();
        },
        onOpenModalForEditing(typologie){
          this.$refs.modal.openModalForEditing(typologie)
        },
        changeTextBox(value){
            this.changeTypologieSelected(value)
        },
        onSaveNewTipologie(typologie){
            this.updateTypologieDB(typologie)
        },
         changeRange(){        
        this.startData = 0;
        this.endData = this.numberDataPerPage
    },
    nextPageTable(){
      if(this.startData<=-1){
        this.changeRange()
      }
      else if(this.endData>this.getAllTypologies.length){
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
    },
    computed: {
    ...mapGetters(["getAllTypologies"]),
    },
    created () {
        this.onGetAllTypologies();
    },
}
</script>

<style scope>

</style>