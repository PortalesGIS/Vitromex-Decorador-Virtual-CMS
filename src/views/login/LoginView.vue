<template>
 <div class="h-screen w-screen ">
     <div class="w-full h-full flex">
         <div class="w-6/12 h-full ">
             <img class="object-cover w-full h-full" 
             src="http://4.bp.blogspot.com/-atlYJj3NH0g/VOEJjol1NsI/AAAAAAAADYs/EkxAW6LyQaA/s1600/Kenneth%2BBarker.jpg" alt="">
         </div>
         <div class="w-6/12 h-full bg-4f">
             <div class="w-full h-full flex justify-center items-center">
                 <div class="px-9 cursor-pointer">
                     <img src="../../assets/flecha_izquierda.svg" alt="">
                     </div>                    
                 <div class="bg-white" style="width:487px; height:581px;">
                    <LoginFormComponentVue/>
                 </div>
                 <div class="px-9 cursor-pointer">
                     <img src="../../assets/flecha_derecha.svg" alt="">
                     </div>                     
             </div>
         </div>
     </div>
 </div>
</template>

<script>
import LoginFormComponentVue from '../../components/forms/LoginFormComponent.vue'
export default {
    
    components:{
        LoginFormComponentVue
    },

}
</script>

<style>

</style>