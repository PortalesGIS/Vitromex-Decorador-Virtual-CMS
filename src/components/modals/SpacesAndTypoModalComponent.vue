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
                    <p class="uppercase text-xl moserrat-bold">
                            {{isNew?'Nuevo':'Editar'}} {{titleForm}}
                    </p>
                </div>
                <div v-if="titleForm==='espacio'">
                <div  class="flex justify-start pl-6 pt-5 pb-3">
                    <p class="text-sm monserrat">Nombre del {{titleForm}}</p>
                </div>
                <div  class="flex justify-start px-6">
                        <input 
                        @keyup="validateText"
                        v-model="name"
                        class="border w-full h-8 pl-3 uppercase" type="text" placeholder="Ingresa el nombre">
                    
                </div>
                </div>
                <div  class="flex justify-center pt-6 monserrat">
                     <p>Imagen Miniatura</p>
                </div>
                <div  class="flex justify-center bg ">
                    <label for="inpfile">
                        <div class=" px-6 pt-2 cursor-pointer">
                        <div class="flex justify-center">
                            <div v-if="!img" class="bg-f5 px-4 py-2 ">
                            <div class="flex justify-center">
                                <img 
                         src='../../assets/agregar_imagen.svg'
                        style="width:100px;height:100px" alt="">
                            </div>
                        <p v-if="isNew" class="monserrat text-center pt-1 text-base" style="color:#6E6E6E">Agregar imagen</p>
                        </div>
                        <div v-else>
                            <img 
                         :src="img"
                        style="width:160px;height:160px" alt="">
                        </div>
                        </div>
                        <p v-if="!isNew" class="my-1 py-1 border-2 w-40 px-2 border-black monserrat" style="color:#1f1f1f">Cambiar imagen</p>
                    </div>
                    <input 
                        @change="addFileImg"   
                        accept="image/png, image/jpeg"                             
                        type="file" 
                        class="hidden" 
                        id="inpfile">
                    </label>
                </div>
                <div  class="flex justify-center py-7">
                    <button 
                    :disabled="btnDisabled"
                    @click="onSave"
                    class="w-44 h-8 text-white monserrat"
                    :class="btnDisabled ? 'bg-gray-300':'bg-black'"
                    >
                         {{!isNew?'Guardar':'Agregar'}}
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
        onSaveNewSpace:{
            type:Function,
            default:()=>{},
        }
    },
    data() {
        return {
            isOpen: false,
            name:"",
            img:"",
            fileimg:File,
            id:"",
            dateCreated:"",
            btnDisabled:true
        }        
    },
    methods: {
        closeModal() {
            this.name=""
            this.img=""
            this.fileimg=File
            this.id=""
            this.isOpen =false
        },
        openModal() {
            this.isOpen =true
        },
        openModalForEditing(payload) {
            this.name=payload.name
            this.img=payload.img
            this.id=payload._id
            this.dateCreated=payload.dateCreated
            this.isOpen =true
        },
         addFileImg(e){                    
             this.img = URL.createObjectURL(e.target.files[0]);   
             this.fileimg =  e.target.files[0]
             this.btnDisabled=false;
        },
        validateText(){
            this.name = this.name.replace(/[^a-zA-Z]+/,''); 
        },
        onSave(){ 
            this.onSaveNewSpace({
                name:this.name.toUpperCase(),
                file:this.fileimg,
                id:this.id,
                img:this.img,
                dateCreated:this.dateCreated,
            })
            this.closeModal()
             this.name=""
            this.img=""
            this.fileimg=File
            this.id=""
        }
    },

}
</script>

<style>

</style>