<template>
<SpacesAndTypoModalComponentVue 
    :titleForm="'espacio'"
    :isNew="true" 
    :onSaveNewSpace="onSaveNewSpace" 
    ref="modal"/>
  <div class="w-full h-8 flex">
      <div class="h-full w-full flex justify-between ml-10 mr-4 ">
          <div class="flex items-center h-full  max-w-17 bg-white">
              <img src="../../assets/buscar.svg" class="w-4 h-4 mx-2" alt="">    
              <input type="text"
               v-model="word"
               @input="chngeInputText"
                    class=" appearance-none h-full w-full border-0 border-transparent bg-gwhite focus:outline-none active:outline-non"
                    placeholder="Buscar"
              >
          </div>
          <div class="flex">
              <div class="px-6">
                  <button class="w-28 h-8 bg-white border">
                      Eliminar
                  </button>
              </div>
              <div>
                  <button 
                  @click="onOpenModal"
                  class="w-48 h-8 bg-black text-white">
                      Nuevo espacio
                  </button>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import SpacesAndTypoModalComponentVue from '../modals/SpacesAndTypoModalComponent.vue'
export default {
    components: {
        SpacesAndTypoModalComponentVue,
    },
    data() {
        return {
          word:"",

        }
    },
    methods: {
        ...mapActions(["filterSpaces","createSpace"]),
        chngeInputText() {
            this.filterSpaces({word:this.word})   
        },
        onOpenModal(){
           this.$refs.modal.openModal()
        },
        onSaveNewSpace(space){
        this.createSpace(space)
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