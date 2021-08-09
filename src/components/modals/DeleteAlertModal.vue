<template>
  <div 
        v-if="isOpen"
        class="z-50 fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-20">
        <div class="w-full h-full flex items-center justify-center">
            <div class="bg-white" style="width:434px; height:183px">               
                <div class="px-4">
                    <div class="mt-5">
                        <p class="text-force-black text-xl moserrat-bold uppercase">Eliminar {{name}}</p>
                    </div>
                    <div class="mt-3">
                        <p
                        class="text-force-black text-sm monserrat"
                        >¿Estás seguro de que deseas eliminar?</p>
                    </div>
                    <div class="flex justify-evenly mt-7">
                        <button 
                        @click="OnAccept"
                        class="bg-1f text-force-white w-44 h-8 monserrat ">Eliminar</button>
                        <button 
                        @click="closeModal"
                        class="bg-white w-44 text-force-black h-8 border monserrat border-black ">Cancelar</button>
                    </div>
                </div>  
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        actionYes: {
            type: Function,
            default: ()=>{}
        },
        name: {
            type: String,
            default:""
        },
    },
    data() {
        return {
            isOpen: false,
        }        
    },
    methods: {
        closeModal() {
            this.isOpen =false
        },
        openModal() {
            this.isOpen =true
        },
        OnAccept(){            
            this.actionYes()
            this.closeModal()
        }
    },

}
</script>

<style>

</style>