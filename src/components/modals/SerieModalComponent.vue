<template>
  <div 
        v-if="isOpen"
        class="z-50 fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-20">
        <div class="w-full h-full flex items-center justify-center">
            <div class="w-80  bg-white">
                <div class="flex justify-end">
                    <img 
                    @click="closeModal"
                    class=" mr-3 mt-3 cursor-pointer w-3 h-3" src="../../assets/cerrar.svg" alt="">
                </div>
                <div class="flex justify-start pl-6">
                    <p class="uppercase text-xl font-bold ">
                           Editar serie
                    </p>
                </div>
                <div  class="flex justify-center pt-5 pb-3">
                    <p class="text-sm font-bold">
                        {{(name)?name:"Not Found"}}
                        </p>
                </div>
                <div  class="flex justify-center ">
                     <p class="text-sm">Imagen Miniatura</p>
                </div>
                <div  class="flex justify-center pt-3 ">                                       
                    <label for="inpserie">
                        <div v-if="img">
                        <div class=" cursor-pointer  flex justify-center">
                            <img 
                         :src="img"
                        style="width:130px;height:120px;"                         
                        class="object-cover border border-black"
                        alt=""
                        >                        
                        </div>
                        <div class="border mt-2 border-black ">
                        <p class="px-2 cursor-pointer" style="color:#6e6e6e">Cambiar imagen</p>
                            </div>                        
                    </div>
                    <div v-else>
                        <div class="cursor-pointer flex justify-center border border-black">
                            <img 
                         src="../../assets/agregar_imagen.svg"
                        style="width:120px;height:120px" alt="">                        
                        </div>                        
                        <div class="border mt-2 border-black ">
                        <p class="px-2 cursor-pointer" style="color:#6e6e6e">Cambiar imagen</p>
                            </div>                        
                    </div>
                    <input 
                        @change="addFileImg"   
                        accept="image/png, image/jpeg"                             
                        type="file" 
                        class="hidden" 
                        id="inpserie">
                    </label>
                </div>
                <div  class="flex justify-center py-9">
                    <button 
                    @click="onSave"
                    class="w-44 h-8 bg-1f text-force-white">
                        Guardar
                        </button>                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        titleForm:{
            type: String,
            default: "Name"
        },
        isNew:{
            type: Boolean,
            default: false
        },
        onSaveNew:{
            type:Function,
            default:()=>{},
        }
    },
    data() {
        return {
            isOpen: false,
            name:"",
            img:"",
            fileImg:File,
            id:""
        }        
    },
    methods: {
        closeModal() {
            this.isOpen =false
        },
        openModal() {
            this.isOpen =true
        },
        openModalForEditing(payload) {
            this.name=payload.name
            this.img=payload.img
            this.id=payload._id
            this.isOpen =true
        },
        addFileImg(e){                    
             this.img = URL.createObjectURL(e.target.files[0]);   
             this.fileImg =  e.target.files[0]
        },
        onSave(){           
            this.onSaveNew({
                name:this.name,
                file:this.fileImg,
                id:this.id
            })
            this.closeModal()
        }
    },

}
</script>

<style>

</style>