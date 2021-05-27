<template>
 <div class="h-screen w-screen ">
     <div class="w-full h-full flex">
         <div class="w-6/12 h-full ">
             <img class="object-cover w-full h-full" 
             src="http://4.bp.blogspot.com/-atlYJj3NH0g/VOEJjol1NsI/AAAAAAAADYs/EkxAW6LyQaA/s1600/Kenneth%2BBarker.jpg" alt="">
         </div>
         <div class="w-6/12 h-full bg-gray-300">
             <div class="w-full h-full flex justify-center items-center">                    
                 <div class="p-4 w-full max-w-lg h-full max-h-120 bg-white ">
                    <LoginFormComponentVue/>
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