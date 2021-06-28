<template>
  <div class="w-full h-8 flex">
      <div class="h-full ml-10 mr-4">
          <div class="flex items-center h-full bg-f5 max-w-17">
              <i class="fas fa-search mx-2"></i>
              <input type="text"
               v-model="word"
               @input="chngeInputText"
                    class=" appearance-none h-full w-full border-0 border-transparent bg-gwhite focus:outline-none active:outline-non"
                    placeholder="Buscar"
              >
          </div>
      </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data() {
        return {
          word:"",

        }
    },
    methods: {
        ...mapActions(["filterTypologies"]),
        chngeInputText() {
            this.filterTypologies({word:this.word})   
        },
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