<template>
<DeleteAlertModalVue
ref="modalDelete"
:name="'Tipología'"
:actionYes="deletetypologie"
/>
<SpacesAndTypoModalComponentVue 
    :titleForm="'tipologia'"
    :isNew="true" 
    :onSaveNewSpace="onSaveNewSpace" 
    ref="modal"/>
  <div class="w-full h-8 flex">
      <div class="h-full w-full flex justify-between ml-10 mr-4">
          <div class="flex items-center h-full  max-w-17 bg-white border" style="border-color: #D4D4D4">
             <img src="../../assets/buscar.svg" class="w-4 h-4 mx-2" alt="">    
              <input type="text"
               v-model="word"
               @input="chngeInputText"
                    class=" appearance-none h-full w-full border-0 border-transparent bg-gwhite focus:outline-none active:outline-non"
                    placeholder="Buscar"
              >
              </div>
              <div class=" hidden">
              <div class="px-6"
                    :class="!isActive ? 'opacity-100':'opacity-10'"
              >
                  <button 
                  :disabled="isActive"
                  @click="onOpenModalDelete"
                  class="w-28 h-8 bg-white">
                      Eliminar
                  </button>
              </div>
              <div>
                  <button 
                  @click="onOpenModal"
                  class="w-48 h-8 bg-black text-force-white">
                      Nuevo Tipología
                  </button>
              </div>
          
          </div>
      </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import DeleteAlertModalVue from '../modals/DeleteAlertModal.vue'
import SpacesAndTypoModalComponentVue from '../modals/SpacesAndTypoModalComponent.vue'
export default {
    components: {
        SpacesAndTypoModalComponentVue,
        DeleteAlertModalVue
    },
    data() {
        return {
          word:"",

        }
    },
    props: {
        typologiasSelected: {
        },
    },
    methods: {
        ...mapActions(["filterTypologies","createTypologie","deleteTypologies"]),
        chngeInputText() {
            this.filterTypologies({word:this.word})   
        },
        onOpenModal(){
           this.$refs.modal.openModal()
        },
        // typologie
        onSaveNewSpace(typol){
            this.createTypologie(typol)
        },
        onOpenModalDelete(){
             this.$refs.modalDelete.openModal()
        },
        deletetypologie(){
          this.deleteTypologies(this.typologiasSelected)
        }
    },
    computed: {
        isActive() {
            if(this.typologiasSelected.length > 0){
                return false
            }
            return true
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