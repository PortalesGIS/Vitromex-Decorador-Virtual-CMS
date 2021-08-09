<template>
    <NewAdminModalComponentVue
    ref="modal"
    />
    <DeleteAdminModalComponentVue
    ref="modalDelete"
    :actionYes="onDeletesAdmins"
    />
  <div class="w-full   h-8 flex justify-between">
      <div class="flex">
          <div class="h-full ml-10 mr-4 bg-white">
          <div class="flex items-center h-full  max-w-17 border" style="border-color: #D4D4D4">
              <img src="../../assets/buscar.svg" class="w-4 h-4 mx-2" alt="">    
              <input type="text"
              v-model="word"
               @input="chngeInputName"
                    class=" appearance-none h-full w-full border-0 border-transparent bg-white focus:outline-none active:outline-non"
                    placeholder="Buscar"
              >
          </div>
      </div>
      <div class="flex  h-full bg-white items-center border" style="border-color: #D4D4D4">
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
      </div>
      <div class="flex">
          <div>
              <button 
              @click="OnOpenModalDelete"
              class="border-gray-400 border-2 monserrat bg-white text-gray-500 px-4 py-2 mx-2">Eliminar</button>
          </div>
          <div>
              <button 
              @click="OnOpenModalNew"
              class=" border-black border-2 monserrat bg-black text-force-white mx-2 p-2">Nuevo administrador</button>
          </div>
      </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import DeleteAdminModalComponentVue from '../modals/DeleteAdminModalComponent.vue';
import NewAdminModalComponentVue from '../modals/NewAdminModalComponent.vue';
export default {
    components: {
        NewAdminModalComponentVue,
        DeleteAdminModalComponentVue
    },
    props: {
        adminsSelected: {
        },
    },
    data() {
        return {
             now: new Date().toISOString().slice(0,10),
          word:"",
          city:"",
          dateone:"",
          dateTwo:""
        }
    },
    methods: {
        ...mapActions(["filterAdmin","adminFilterDates","deleteAdmin"]),
        chngeInputName() {
          this.filterAdmin({word:this.word})
        },
        changeInputDate(){
            // console.log(new Date(this.dateone).getTime() < new Date("2021-06-20").getTime() && new Date(this.dateTwo).getTime() > new Date("2021-06-20").getTime() )            
            if(this.dateone!="" && this.dateTwo!=""){
                this.adminFilterDates({
                    dateOne:this.dateone,
                    dateTwo:this.dateTwo
                })
            }            
        },
        OnOpenModalNew(){
             this.$refs.modal.openModal()
        },
        OnOpenModalDelete(){
             this.$refs.modalDelete.openModal()
        },
        onDeletesAdmins(){
            this.deleteAdmin(this.adminsSelected)
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