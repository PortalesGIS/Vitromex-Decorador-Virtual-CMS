<template>
  <SerieModalComponentVue
    :titleForm="'espacio'"
    :isNew="false"
    :onSaveNew="onSaveNew"
    ref="modal"
  />
  <div class="w-full h-full bg-f5">
    <div class="flex justify-between bg-1f">
      <div class="pl-10 w-full max-w-1400px grid grid-cols-12">
        <div class="col-span-1 flex items-center justify-start mr-4">
          <p class="text-white text-xs font-semibold py-2">No.</p>
        </div>
        <div class="col-span-2 flex items-center justify-start mr-4">
          <p class="text-white text-xs font-semibold py-2">
            Nombre de la Serie
          </p>
          <i class="fas fa-angle-down px-2" style="color: white"></i>
        </div>
        <div class="col-span-2 flex items-center justify-center mr-4">
          <p class="text-white text-xs font-semibold py-2">Imagen Miniatura</p>
          <i class="fas fa-angle-down px-2" style="color: white"></i>
        </div>
        <div class="col-span-2 flex items-center justify-center mr-4">
          <p class="text-white text-xs font-semibold py-2">fecha de registro</p>
          <i class="fas fa-angle-down px-2" style="color: white"></i>
        </div>
      </div>
      <div class="bg-1f pr-10">
        <div class="px-1">
          <p class="text-white text-sm font-bold py-2">Editar</p>
        </div>
      </div>
    </div>
    <div class="pl-10 h-px w-full bg-gray-400"></div>
    <div class="h-full overflow-y-auto bg-f5">
      <div v-for="(serie, index) in getAllSeries" :key="index">
        <div v-if="(index >= startData && index <= endData)">
          <div class="flex justify-between" :class="index % 2 ? 'bg-white' : ''">
          <div class="pl-10 w-full grid grid-cols-12 max-w-1400px">
            <div class="col-span-1 flex justify-start">
              <p class="text-black text-sm py-2">{{ index }}</p>
            </div>
            <div class="col-span-2 flex justify-start">
              <p class="text-black text-sm py-2">{{ serie.name }}</p>
            </div>
            <div class="col-span-2 flex justify-center">
              <p class="text-black text-sm py-2 truncate">
                {{ `${serie.img != "" ? "1" : "0"}/1` }}
              </p>
            </div>
            <div class="col-span-2 flex justify-center">
              <p class="text-black text-sm py-2">{{ serie.dateCreated }}</p>
            </div>
          </div>
          <div class="mr-10 flex items-center">
            <button @click="onOpenModal(serie)">
              <img
                class="object-cover h-6 w-6"
                src="../../assets/icons/editar.svg"
                alt=""
              />
            </button>
          </div>
        </div>
          </div>        
      </div>
    </div>
    <div class="pl-10 py-2 flex items-center w-full justify-between bg-1f">
      <div class="flex items-center">
        <p class="text-white font-semibold text-xs pr-2">Total de Filas:</p>
        <div class="border-2 px-1 bg-white">
          <select
            class="
              text-xs
              w-10
              pl-2
              appearance-none
              focus:outline-none
              active:outline-non
            "
            name=""
            id=""            
            v-model="numberDataPerPage"
            @change="changeRange"
          >
            <option value="20" >20</option>
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="100000">todo</option>
          </select>
          <i class="fas fa-angle-down w-2"></i>
        </div>
      </div>
      <div class="flex mr-7 items-center">
        <div>
          <p class="text-white font-semibold text-xs">{{startData}}-{{endData}},{{getAllSeries.length}}</p>
        </div>
        <div class="cursor-pointer ml-7"
          @click="backPageTable()"
        >
          <img
            src="../../assets/paginador_izquierda.svg"
            style="width: 18px; height: 12px"
            alt=""
          />
        </div>
        <div class="cursor-pointer ml-14"
          @click="nextPageTable"
        >
          <img
            src="../../assets/paginador_derecha.svg"
            style="width: 18px; height: 12px"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import SerieModalComponentVue from "../modals/SerieModalComponent.vue";

export default {
  components: {
    SerieModalComponentVue,
  },
  data() {
    return {
      numberDataPerPage: 20,
      startData:0,
      endData:20,      
    };
  },
  methods: {
    ...mapActions(["getAllSeriesDB", "UpdateSerieImgDB"]),
    async onGetAllSeries() {
      await this.getAllSeriesDB();
    },
    onOpenModal(serie) {
      this.$refs.modal.openModalForEditing(serie);
    },
    onSaveNew(payload) {
      this.UpdateSerieImgDB({
        id: payload.id,
        file: payload.file,
        name: payload.name,
      });
    },
    changeRange(){        
        this.startData = 0;
        this.endData = this.numberDataPerPage
    },
    nextPageTable(){
      if(this.startData<=-1){
        this.changeRange()
      }
      else if(this.endData>this.getAllSeries.length){
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
    ...mapGetters(["getAllSeries"]),
  },
  created() {
    this.onGetAllSeries();
  },
};
</script>

<style scope>
</style>