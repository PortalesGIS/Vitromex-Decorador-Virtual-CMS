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
                            {{isNew?'Nuevo':'Editar'}} {{titleForm}}
                    </p>
                </div>
                <div  class="flex justify-start pl-6 pt-5 pb-3">
                    <p class="text-sm">Nombre del {{titleForm}}</p>
                </div>
                <div  class="flex justify-start px-6">
                        <input 
                        v-model="name"
                        class="border w-full h-8 pl-3" type="text" placeholder="Ingresa el nombre">
                    
                </div>
                <div  class="flex justify-center pt-6">
                     <p>Imagen Miniatura</p>
                </div>
                <div  class="flex justify-center pt-3">
                    <div class="bg-f5 px-6 pt-4 cursor-pointer">
                        <div v-if="isNew">
                            <img 
                         src='../../assets/agregar_imagen.svg'
                        style="width:120px;height:120px" alt="">
                        </div>
                        <div v-else>
                            <img 
                         :src="img"
                        style="width:120px;height:120px" alt="">
                        </div>
                        <p class="py-2 " style="color:#6e6e6e">Agregar imagen</p>
                    </div>
                </div>
                <div  class="flex justify-center py-7">
                    <button 
                    @click="onSave"
                    class="w-44 h-8 bg-gray-300 text-white">
                        Agregar
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
        onSave(){           
            this.onSaveNewSpace({
                name:this.name,
                img:this.img,
                id:this.id
            })
            this.closeModal()
        }
    },

}
</script>

<style>

</style>