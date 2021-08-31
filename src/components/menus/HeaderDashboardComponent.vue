<template>
  <div class="flex justify-between full w-full ">
        <div class="w-full h-full p-2 " >
          <div class="w-full h-40  bg-white shadow-4xl">
            <div>
              <p class="uppercase moserrat-bold ml-4 py-1 font-bold text-xl text-force-black">Aplicación móvil</p>
              <div class="px-3">
                <div class="w-full h-px bg-d4"></div>
              </div>
            </div>
          <div class="w-full ">
            <div class="grid grid-cols-3 px-5 mt-4">
              <div class="text-sm flex justify-center">
                <p class="text-sm font-medium moserrat-semibold text-force-black">Descargas por Sistema Operativo</p></div>
              <div class="text-sm flex justify-center">
                <p class="text-sm font-medium moserrat-semibold text-force-black">Usuarios Registrados</p></div>
              <div class="text-sm flex justify-center">
                <p class="text-sm font-medium moserrat-semibold text-force-black">Descargas Totales</p></div>
            </div>
            <div class="grid grid-cols-3 px-5 mt-3">
              <div class="text-sm flex justify-around">
                  <div class="flex  items-center h-8">
                    <div class="h-full mr-1">
                      <img class="w-9 h-9 " src="../../assets/Android.svg" alt="">                      
                    </div>
                    <div>
                      <p class="text-force-black font-bold text-xl">{{getDasboardData.totalDownloadAndoid/1000}}K</p>
                      <p class="text-xs font-medium moserrat-semibold -mt-1" style="color:#7d7d7d">Android</p>
                    </div>
                  </div>
                  <div class="flex  items-center h-8">
                    <div class="h-full mr-1">
                      <img class="w-9 h-9 " src="../../assets/iOS.svg" alt="">                      
                    </div>
                    <div>
                      <p class="text-force-black font-bold text-xl">{{getDasboardData.totalDownloadsIos/1000}}K</p>
                      <p class="text-xs font-medium moserrat-semibold -mt-1" style="color:#7d7d7d">iOS</p>
                    </div>
                  </div>
                </div>
              <div class="text-sm flex justify-center">
                <div class="flex  items-center h-8">
                    <div class="h-full mr-1">
                      <img class="w-9 h-9 " src="../../assets/Usuarios.svg" alt="">                      
                    </div>
                    <div>
                      <p class="text-force-black font-bold text-xl">{{getDasboardData.totalUserRegister/1000}}K</p>
                      <p class="text-xs font-medium moserrat-semibold -mt-1" style="color:#7d7d7d">Usuarios</p>
                    </div>
                  </div>
               </div>
              <div class="text-sm flex justify-center">
                <div class="flex  items-center h-8">
                    <div class="h-full mr-1">
                      <img class="w-9 h-9 " src="../../assets/Descargas.svg" alt="">                      
                    </div>
                    <div>
                      <p class="text-force-black font-bold text-xl">{{(parseInt(getDasboardData.totalDownloadAndoid)+parseInt(getDasboardData.totalDownloadsIos))/1000}}K</p>
                      <p class="text-xs font-medium moserrat-semibold -mt-1" style="color:#7d7d7d">Descargas</p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          <!--  -->
          </div>
        </div>
        <div class="w-full bg-6f h-full p-2 " >
          <div class="w-full h-40  bg-white shadow-4xl">
            <div>
              <p class="uppercase moserrat-bold ml-4 py-1 font-bold text-xl text-force-black">DECORADOR WEB 3D</p>
              <div class="px-3">
                <div class="w-full h-px bg-d4"></div>
              </div>
            </div>
          <div class="px-7 w-full flex ml-4 mt-3">
            <div>
              <div>
                <p class="text-sm py-1 font-medium moserrat-semibold text-force-black">Espacio más visitado</p>
              </div>
              <div class="flex  items-center h-8 mt-2">
                    <div class="h-full mr-1">
                      <img class="w-9 h-9 " src="../../assets/AR.svg" alt="">                      
                    </div>
                    <div>
                      <p class="text-force-black font-bold text-xl">{{spaceMoreAplicated.total/1000}}K</p>
                      <!-- TODO: espacio mas visitado -->
                      <p class="text-xs font-medium moserrat-semibold -mt-1 capitalize" style="color:#7d7d7d">{{(spaceMoreAplicated.name==='banio'?'baño':spaceMoreAplicated.name)}}</p>
                    </div>
              </div>
            </div>
            <div class="ml-12">
              <div>
                <p class="text-sm py-1 font-medium moserrat-semibold text-force-black">Visitas al Decorador</p>
              </div>
              <div class="flex  items-center h-8 mt-2">
                    <div class="h-full mr-1">
                      <img class="w-9 h-9 " src="../../assets/vistas.svg" alt="">                      
                    </div>
                    <div>
                      <p class="text-force-black font-bold text-xl">{{getDasboardData.totalViewsWeb/1000}}K</p>
                      <p class="text-xs font-medium moserrat-semibold -mt-1" style="color:#7d7d7d">Vistas</p>
                    </div>
              </div>
            </div>
          </div>
          <div class="w-full h-full ">
          </div>
          </div>
        </div>
      </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(["getDasboardData"]),
    spaceMoreAplicated(){
      // i don't know why i did this 
      const spaces = this.getDasboardData.totalspaceMoreVisited
      const arrayspacs = ['cocina','comedor','sala','banio','fachada']
      let mayor = {name:'cocina',total:0}
      for (let index = 0; index <= 4; index++) {
         if(spaces.spaces[arrayspacs[index]].total>mayor.total){
           mayor = {name:arrayspacs[index], total:spaces.spaces[arrayspacs[index]].total}
         }
      }
      return mayor
    }
  },
  methods: {
    ...mapActions(["getNmberOfUsers",
    'onGeatAllUsersDowloadAndroid',
    'onGeatAllUsersDowloadWeb',
    'onGetSpacesCountersAplicateds',
    'onGeatAllUsersDowloadIos']),
    
  },
  created () {
    this.getNmberOfUsers()
    this.onGeatAllUsersDowloadAndroid()
    this.onGeatAllUsersDowloadWeb()
    this.onGeatAllUsersDowloadIos()
    this.onGetSpacesCountersAplicateds()
  },
}
</script>

<style>

</style>