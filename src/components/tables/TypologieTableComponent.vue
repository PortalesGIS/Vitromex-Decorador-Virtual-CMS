<template>
<SpacesAndTypoModalComponentVue 
    :titleForm="'tipología'"
    :isNew="false" 
    :onSaveNewSpace="onSaveNewSpace" 
    ref="modal"/>
  <div class=" w-full h-full bg-f5 ">
      <div class=" flex justify-between bg-1f">
          <div class="pl-10 w-full max-w-1400px grid grid-cols-12 bg-1f">
          <div class="col-span-1 flex items-center justify-between mr-4">
              <p class="text-white text-sm font-bold py-2">No.</p>
                <i class="fas fa-angle-down" style="color:white"></i></div>
          <div class="col-span-2 flex items-center justify-between mr-4">
              <p class="text-white text-sm font-bold py-2">Imagen</p>
                <i class="fas fa-angle-down" style="color:white"></i></div>
          <div class="col-span-2 flex items-center justify-between mr-4">
              <p class="text-white text-sm font-bold py-2">Nombre del espacio</p>
                <i class="fas fa-angle-down" style="color:white"></i></div>
          <div class="col-span-2 flex items-center justify-between mr-4">
              <p class="text-white text-sm font-bold py-2">Fecha de Registro</p>
                <i class="fas fa-angle-down" style="color:white"></i></div>
      </div>
      <div class="bg-1f">
          <div class="mr-10"><p class="text-white text-sm font-bold py-2">Editar</p></div>
      </div>
      </div>
      <div class="pl-10 h-px w-full  bg-gray-400"></div>
      <div class="h-full overflow-y-auto bg-f5">
      <div v-for="(typologie,index) in getAllTypologies" :key="index">
          <div class="flex justify-between"
             :class="(index%2)?'bg-white':''">
          <div class="pl-10 w-full grid grid-cols-12 max-w-1400px ">
          <div class="col-span-1">
              <p class="text-black text-sm py-2">{{index}}</p>
          </div>
          <div class="col-span-2">
              <!-- <p class="text-black text-sm py-2">{{typologie.name}}</p> -->
              <div class="py-2">
                <img  :src="typologie.img" style="width:86px; height:86px" alt="">              
              </div>
          </div>
          <div class="col-span-2 ">
              <p class="text-black text-sm py-2 truncate  ">{{typologie.name}}</p>
          </div>
          <div class="col-span-2">
              <p class="text-black text-sm py-2">{{typologie.dateCreated}}</p>
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
 <div class="pl-10 py-2 flex items-center w-full  justify-between bg-1f">
     <div class="flex items-center">
          <p class="text-white font-semibold text-xs pr-2">Total de Filas:</p>
        <div class="border-2 px-1 bg-white">
            <select 
            class="text-xs w-10 pl-2   appearance-none focus:outline-none active:outline-non"
            name="" id="">
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="10">10</option>
            <option value="1000">full</option>
        </select>
        <i class="fas fa-angle-down w-2"></i>
        </div>
     </div>
     <div class="flex mr-7 items-center">
         <div>
             <p class="text-white font-semibold text-xs">20-12,458</p>
         </div>
         <div class="cursor-pointer ml-7">
            <img src="../../assets/paginador_izquierda.svg" style="width:18px; height:12px" alt="">
         </div>
         <div class="cursor-pointer ml-14">
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
        }
    },
    methods: {
        ...mapActions(["getAllTypologiesDB"]),
        async onGetAllTypologies(){
            await this.getAllTypologiesDB();
        },
        onOpenModalForEditing(typologie){
          this.$refs.modal.openModalForEditing(typologie)
        },
        onSaveNewSpace(typologie){
            console.log(typologie)
            //TODO: update product
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