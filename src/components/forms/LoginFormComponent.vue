<template>
   <div class="w-full h-full ">
     <form  
        @submit.prevent="onLogiIn()"
        class="h-full overflow-auto">
         <div class="h-full flex flex-wrap content-evenly">
             <div class=" px-10  w-full" >
                 <div class=" w-full ">
                        <img class="object-contain" src="../../assets/img/logos/logobitromex.png" alt="">
                 </div>
             </div>
              <div class="h-4/6 flex flex-wrap content-evenly">
                  <div class="  w-full" >
                  <div class="px-10">
                    <p class="text-2xl font-bold text-black">Iniciar Sesión</p>
                  </div>
              </div>
             <div class="  w-full" >
                 <div class="px-10">
                     <p class="text-base py-2 text-black">Correo</p>
                     <input 
                        v-model="email"
                        class="w-full bg-gray-100 py-2 px-4" 
                        type="email" 
                        placeholder="Ingresa tu correo electrónico"
                        required
                        >
                 </div>
             </div>
             <div class="  w-full" >
                 <div class="px-10">
                     <p class="text-base py-2 text-black">Contraseña</p>
                     <input 
                        v-model="password"
                        class="w-full bg-gray-100 py-2 px-4" 
                        type="text" 
                        placeholder="Ingresa tu contraseña"
                        required
                        >
                 </div>
             </div>
             <div class="  w-full" >
                 <div class="w-full">
                     <div class="px-10 flex justify-center w-full">
                         <button type="submit" class="bg-black text-sm text-white w-full max-w-xs py-2">INGRESAR</button>
                     </div>
                 </div>
             </div>
              </div>
         </div>
     </form>
    </div> 

</template>

<script>
export default {
    data() {
        return {
            email: "",
            password:""
        }
    },
    methods: {        
        onLogiIn() {
            // this.password="";
            // this.email="";
        }
    },
};
</script>

<style>
</style>