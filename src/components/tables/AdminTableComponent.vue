<template>
  <div class="w-full bg-f5">
    <div class="pl-10 w-full grid grid-cols-12 bg-1f">
      <div class="flex items-center justify-between bg-1f">
        <p class="text-force-white text-sm font-bold py-2">
          <input type="checkbox" />
        </p>
      </div>
      <div class="">
        <p class="text-force-white text-xs font-semibold py-2">No.</p>
      </div>
      <div class="col-span-2 flex items-center justify-start mr-4">
        <p class="text-force-white text-xs font-semibold py-2">Nombre</p>
        <i class="fas fa-angle-down px-2" style="color: white"></i>
      </div>
      <div class="col-span-2 flex items-center justify-start mr-4">
        <p class="text-force-white text-xs font-semibold py-2">Correo</p>
        <i class="fas fa-angle-down px-2" style="color: white"></i>
      </div>
      <div class="col-span-2 flex items-center justify-start mr-4">
        <p class="text-force-white text-xs font-semibold py-2">Fecha de registro</p>
        <i class="fas fa-angle-down px-2" style="color: white"></i>
      </div>
    </div>
    <div class="pl-10 h-px w-full bg-gray-400"></div>
    <div v-for="(user, i) in getAllAdmins" :key="i">
      <div class="pl-10 grid grid-cols-12" :class="i % 2 ? 'bg-white' : ''">
        <div class="col-span-1">
          <p class="text-force-black text-sm py-2">
            <input 
            @change="selectCheckBox(user._id)"
            type="checkbox" /></p>
        </div>
        <div class="">
          <p class="text-force-black text-sm py-2">{{ i }}</p>
        </div>
        <div class="col-span-2">
          <p class="text-force-black text-sm py-2">{{ user.name }}</p>
        </div>
        <div class="col-span-2">
          <p class="text-force-black text-sm py-2">{{ user.email }}</p>
        </div>
        <div class="col-span-2">
          <p class="text-force-black text-sm py-2 overflow-x-hidden">
            {{ user.dateCreated }}
          </p>
        </div>
      </div>
    </div>
    
  </div>
  <div class="pl-10 py-2 flex items-center w-full justify-between bg-1f">
    <div class="flex items-center">
      <p class="text-force-white font-semibold text-xs pr-2">Total de Filas:</p>
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
        >
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
        <p class="text-force-white font-semibold text-xs">20-12,458</p>
      </div>
      <div class="cursor-pointer ml-7">
        <img
          src="../../assets/paginador_izquierda.svg"
          style="width: 18px; height: 12px"
          alt=""
        />
      </div>
      <div class="cursor-pointer ml-14">
        <img
          src="../../assets/paginador_derecha.svg"
          style="width: 18px; height: 12px"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },  
  props: {
    onSelectedAdmin: {
      type: Function,
      default: ()=>{}
    },
  },
  methods: {
    ...mapActions(["getAllAdminsDB"]),
    async onGetAllUsers() {
      await this.getAllAdminsDB();
    },
  selectCheckBox(value){  
    this.onSelectedAdmin(value)
  }
  },
  computed: {
    ...mapGetters(["getAllAdmins"]),
  },
  created() {
    this.onGetAllUsers();
  },
};
</script>

<style scope>
</style>