<template>
   <div class="w-full h-full ">
       <div class='w-full relative bg-4f' style="height: 174px">
            <div class="absolute w-full">
                <img class="object-contain w-full" src="../../assets/logo_fondo.png" style="height: 174px" alt="">
            </div>
            <div class="absolute z-10 h-full  w-full">
               <div class=' h-full flex justify-center items-center'>
                    <img class="object-contain" src="../../assets/Logo.svg" style="height: 57px" alt="">
               </div>
            </div>
       </div>    
       <div class="pt-20 w-full flex justify-center">
           <div>
               <p class="text-black text-2xl font-medium">Iniciar Sesión</p>
           </div>
        </div>   
        <div class='px-16 pt-7 w-full'>            
     <form  
        @submit.prevent="onLogiIn()"
        class="h-full overflow-auto w-full">
        <div class='flex justify-start w-full' >
            <div class="w-full">                
            <p class="text-black text-sm font-normal">Correo</p>
            <input 
            class="border px-2 py-1 w-full"
            v-model="email"
            type="email" 
            required
            placeholder="Ingresa tu correo electrónico">
            </div>
        </div>
        <div class='flex justify-sart'>
            <div class="w-full pt-6">                
            <p class="text-black text-sm font-normal">Contraseña</p>
            <input 
            class="border px-2 py-1 w-full"
            v-model="password"
            type="password" 
            placeholder="Ingresa tu contraseña">
            </div>
        </div>
        <div class="flex justify-center pt-12">
            <button 
            type="submit"
            class="bg-1f h-8 w-44 text-white" >
                Ingresar
            </button>
        </div>
     </form>
        </div>
    </div> 

</template>
<script>
import { mapActions } from 'vuex'
export default {
    data() {
        return {
            email: "test@admin.com",
            password:"123456"
        }
    },
    methods: {  
        ...mapActions(["AdminLogin"]),      
        onLogiIn() {
            this.AdminLogin({
                email:this.email,
                password:this.password
            });
            // this.password="";
            // this.email="";
        }
    },
};
</script>

<style>
</style>