<template>

<DeleteAlertModalVue
ref="modalDelete"
:name="'Espacio'"
:actionYes="deleteSpace"
/>
<SpacesAndTypoModalComponentVue 
    :titleForm="'espacio'"
    :isNew="true" 
    :onSaveNewSpace="onSaveNewSpace" 
    ref="modal"/>
  <div class="w-full h-8 flex">
      <div class="h-full w-full flex justify-between ml-10 mr-4 ">
          <div class="flex items-center h-full  max-w-17 bg-white border" style="border-color: #D4D4D4">
              <img src="../../assets/buscar.svg" class="w-4 h-4 mx-2" alt="">    
              <input type="text"
               v-model="word"
               @input="chngeInputText"
                    class=" appearance-none h-full w-full border-0 border-transparent bg-gwhite focus:outline-none active:outline-non"
                    placeholder="Buscar"
              >
          </div>
          <div class="flex">
              <div class="px-6"
                :class="!isActive ? 'opacity-100':'opacity-10'">
                  <button 
                  @click="onOpenModalDelete"
                   :disabled="isActive"
                  class="w-28 h-8 monserrat bg-white border">
                      Eliminar
                  </button>
              </div>
              <div>
                  <button 
                  @click="onOpenModal"
                  class="w-48 h-8 monserrat bg-black text-force-white">
                      Nuevo espacio
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
    props: {
        spacesSelected: {
        },
    },
    data() {
        return {
          word:"",
        }
    },
    methods: {
        ...mapActions(["filterSpaces","createSpace","deleteAplications"]),
        chngeInputText() {
            this.filterSpaces({word:this.word})   
        },
        onOpenModal(){
           this.$refs.modal.openModal()
        },
        onSaveNewSpace(space){
        this.createSpace(space)
        },
        onOpenModalDelete(){
             this.$refs.modalDelete.openModal()
        },
        async deleteSpace(){
            await this.deleteAplications(this.spacesSelected)
        }
    },
    computed: {
        isActive() {
            if(this.spacesSelected.length > 0){
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