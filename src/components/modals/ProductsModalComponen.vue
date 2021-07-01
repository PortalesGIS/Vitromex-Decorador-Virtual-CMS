<template>
   <div 
        v-if="activeModal"
        class="z-50 fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-20">
        <div class="w-full h-full flex items-center justify-center">
             <div class=" bg-white h-full overflow-y-auto"  style="width:664px; max-height:984px">
                <div class="flex justify-end">
                    <img 
                    @click="onCloseModal"
                    class=" mr-3 mt-3 cursor-pointer w-3 h-3" src="../../assets/cerrar.svg" alt="">
                </div>
                <div class="px-9">
                    <p class="text-black font-bold">COMPLETAR DATOS DEL PRODUCTO</p>
                </div>
                <HeaderModalProductsVue :page="page"/>
                <!-- Page 1 -->
                <div v-if="page===0"> 
                <div class="mt-4 w-full h-36 bg-1f">
                    <div class="pl-16 pt-5">
                        <p class="uppercase text-xl text-white font-bold">Nombre del producto</p>
                        <p class="mt-2 text-white text-xs font-normal">Indica el nombre que se visualizará en la App y Web 3D.</p>
                        <input 
                        placeholder="value"
                        v-model="name"
                        class="bg-white px-3 mt-2 w-96 h-8"
                        type="text">
                    </div>                    
                </div>
                <div class="mt-10 px-16">
                    <p class="uppercase text-xl text-black font-bold ">Carga de imágenes</p>
                    <p class="mt-3 text-xs text-black font-normal">Carga los tipos de imágenes que se mostrarán dentro del catálogo de la App y Web 3D.</p>
                </div>  
                <div class="mt-6 px-16">
                    <p class="text-black font-semibold text-sm">Imagen del Producto</p>
                    <p class="mt-3 text-xs text-black font-normal">Carga las imágenes que visualizarán los usuarios dentro del detalle de los productos en la App. Puedes cargar hasta 3 imágenes.</p>
                </div> 
                <div class="px-16 mt-5">
                    <div class="flex justify-between items-center">
                        <div class="" style="width:174px; height:112px;">
                           <div v-if="img1===''" class="flex justify-center">
                                    <img src="../../assets/agregar_imagen.svg"  alt=""> 
                               </div>
                               <div v-else class="flex justify-center">
                                    <img :src="img1"  alt=""> 
                               </div>
                        </div>
                        <div class="" style="width:174px; height:112px;">
                           <div v-if="img2===''" class="flex justify-center">
                                    <img src="../../assets/agregar_imagen.svg"  alt=""> 
                               </div>
                               <div v-else class="flex justify-center">
                                    <img :src="img2"  alt=""> 
                               </div>
                        </div>
                        <div class="" style="width:174px; height:112px;">
                           <div v-if="img3===''" class="flex justify-center">
                                    <img src="../../assets/agregar_imagen.svg"  alt=""> 
                               </div>
                               <div v-else class="flex justify-center">
                                    <img :src="img3"  alt=""> 
                               </div>
                        </div>
                    </div>
                    <div class="flex justify-between items-center mt-2">
                        <div class="w-44 flex justify-center items-center " >
                            <div class="border border-black py-1 px-2">
                                <p class="text-xs font-medium text-black">Cambiar imagen</p>
                            </div>
                        </div>
                        <div class="w-44 flex justify-center items-center " >
                            <div class="border border-black py-1 px-2">
                                <p class="text-xs font-medium text-black">Cambiar imagen</p>
                            </div>
                        </div>
                        <div class="w-44 flex justify-center items-center " >
                            <div class="border border-black py-1 px-2">
                                <p class="text-xs font-medium text-black">Cambiar imagen</p>
                            </div>
                        </div>                        
                    </div>
                </div>  
                <div class="px-16 mt-9">
                        <p class="text-black font-semibold text-sm">Imagen Miniatura</p>
                        <p class="mt-3 text-xs text-black font-normal">Carga la imagen que se mostrará como vista previa 
                            o miniatura del producto en la App y Web 3D.</p>
                        <div class="mt-5">
                            <div class="" style="width:167px; height:112px;">
                                <div v-if="smallPicture===''" class="flex justify-center">
                                    <img src="../../assets/agregar_imagen.svg" class="object-contain" style="width:167px; height:112px;" alt=""> 
                               </div>
                               <div v-else class="flex justify-center">
                                   <img :src="smallPicture" class="object-cover" style="width:167px; height:112px;" alt="">
                               </div>
                            </div>
                        </div>
                        <div class="w-44 flex justify-center items-center mt-3" >
                            <div class="border border-black py-1 px-2">
                                <p class="text-xs font-medium text-black">Cambiar imagen</p>
                            </div>
                        </div> 
                </div>  
                <div class="px-3 mt-5">
                    <div class="h-px bg-d5"></div>
                </div>                         
                <div class="w-full flex justify-center items-center mt-5">
                    <button 
                    @click="nexPage"
                    class="bg-1f w-48 text-white py-1">Siguiente</button>
                </div>
                </div>
                <!-- page 2 -->
                <div v-if="page===1">
                    <div class="mt-4 w-full h-16 bg-1f">
                        <div class="pl-16 ">
                            <p class="text-white text-sm font-semibold pt-3">Producto</p>
                            <p class="uppercase text-xl text-white font-bold">{{name}}</p>
                        </div>                    
                    </div>
                    <div class="mt-5 px-16">
                        <p class="uppercase text-xl text-black font-bold ">Carga de imágenes</p>
                        <p class="mt-2 text-xs text-black font-normal">Carga las texturas que serán montadas dentro de la App y Web 3D.</p>
                    </div>
                    <div class="mt-4 px-16">
                        <p class="text-black text-sm font-semibold">Albedo</p>
                        <p class="mt-2 text-xs text-black font-normal">Agrega las texturas que darán color a los modelos aplicados en la experiencia de Realidad Aumentada en la App y Web 3D.</p>
                    </div>            
                    <div class="mt-5 px-16">
                        <div class="w-44 h-28 bg-f5 flex justify-center items-center">
                            <div class="">
                               <div v-if="albedo===''" class="flex justify-center">
                                    <img src="../../assets/agregar_imagen.svg" style="width:51px; height:51px" alt=""> 
                               </div>
                               <div v-else class="flex justify-center">
                                    <img :src="albedo" style="width:51px; height:51px" alt=""> 
                               </div>
                                <p class="text-xs mt-2">Agregar imagen</p>
                            </div>
                        </div>
                    </div>        
                    <div class="mt-6 px-16">
                        <p class="text-black text-sm font-semibold">Normal</p>
                        <p class="mt-2 text-xs text-black font-normal">Agrega las texturas que darán relieve a los modelos aplicados en la experiencia de Realidad Aumentada en  la App y Web 3D.</p>
                    </div>            
                    <div class="mt-5 px-16">
                        <div class="w-44 h-28 bg-f5 flex justify-center items-center">
                            <div class="">
                               <div v-if="normal===''" class="flex justify-center">
                                    <img src="../../assets/agregar_imagen.svg" style="width:51px; height:51px" alt=""> 
                               </div>
                               <div v-else class="flex justify-center">
                                    <img :src="normal" style="width:51px; height:51px" alt=""> 
                               </div>
                                <p class="text-xs mt-2">Agregar imagen</p>
                            </div>
                        </div>
                    </div>  
                    <div class="mt-6 px-16">
                        <p class="text-black text-sm font-semibold">Repeticiones</p>
                        <p class="mt-2 text-xs text-black font-normal">Indica el número de veces que se repitió el producto a lo largo y a lo ancho para generar el patrón en las texturas de Albedo y Normal.</p>
                    </div>  
                    <div class="mt-2 px-16">
                        <div class="flex ">
                            <div>
                                <input 
                                v-model="textureHeight"
                                class="pl-2 h-8 border w-40" type="text" placeholder="Largo">
                            </div>
                            <div>
                                <input 
                                v-model="textureWidth"
                                class="pl-2 h-8 border w-40 ml-8" type="text" placeholder="Ancho">
                            </div>
                        </div>
                    </div>  
                    <div class="px-3 " style=" margin-top:85px">
                        <div class="h-px bg-d5 "></div>
                    </div>    
                    <div class="mt-5 px-16">
                        <div class="flex justify-center">
                            <button  @click="beforePage" class="mx-2 w-44 h-8 border border-black">Anterior</button>                                
                            <button  @click="nexPage" class="mx-2 w-44 h-8 bg-black text-white">Siguiente</button>                                
                        </div>
                    </div>
                </div>
                <!-- page 3 -->
                <div v-if="page===2" class="overflow-y-auto">
                    <div class="mt-4 w-full h-16 bg-1f">
                        <div class="pl-16 ">
                            <p class="text-white text-sm font-semibold pt-3">Producto</p>
                            <p class="uppercase text-xl text-white font-bold">{{name}}</p>
                        </div>                    
                    </div>
                    <div class="mt-5 px-16">
                        <p class="uppercase text-xl text-black font-bold ">Asignar Espacios</p>
                        <p class="mt-2 text-xs text-black font-normal">Selecciona dentro de los check box las opciones de Espacios correspondientes</p>
                    </div>
                    <div class=" px-16">
                        <div class="grid grid-cols-3 justify-center">
                            <div class="py-4  flex justify-start items-center">
                                <input type="checkbox" class="h-4 w-4">
                                <p class="pl-2 font-semibold text-black text-xs">Piso</p>
                            </div>
                            <div class="py-4  flex justify-start items-center">
                                <input type="checkbox" class="h-4 w-4">
                                <p class="pl-2 font-semibold text-black text-xs">Interior</p>
                            </div>
                            <div class="py-4  flex justify-start items-center">
                                <input type="checkbox" class="h-4 w-4">
                                <p class="pl-2 font-semibold text-black text-xs">Fachada</p>
                            </div>
                            <div class="py-4  flex justify-start items-center">
                                <input type="checkbox" class="h-4 w-4">
                                <p class="pl-2 font-semibold text-black text-xs">Muro</p>
                            </div>
                            <div class="py-4  flex justify-start items-center">
                                <input type="checkbox" class="h-4 w-4">
                                <p class="pl-2 font-semibold text-black text-xs">Exterior</p>
                            </div>
                            <div class="py-4  flex justify-start items-center">
                                <input type="checkbox" class="h-4 w-4">
                                <p class="pl-2 font-semibold text-black text-xs">Baño</p>
                            </div>
                        </div>
                    </div>
                    <div class="px-3" style=" margin-top:537px">
                            <div class="h-px bg-d5"></div>
                        </div>    
                    <div class="mt-5 px-16">
                        <div class="flex justify-center">
                            <button  @click="beforePage" class="mx-2 w-44 h-8 border border-black">Anterior</button>                                
                            <button  @click="nexPage" class="mx-2 w-44 h-8 bg-black text-white">Guardar Cambios</button>                                
                        </div>
                    </div>                    
                </div>
             </div>
        </div>
    </div>
</template>

<script>
import HeaderModalProductsVue from './HeaderModalProducts.vue'
export default {
    components: {
        HeaderModalProductsVue,
    },
    data() {
        return {
            activeModal:false,
            page: 0,
            img1:"",
            img2:"",
            img3:"",
            smallPicture:"",
            name:"",
            albedo:"",
            normal:"",
            textureWidth:0,
            textureHeight:0,          
        }
    },
    methods: {
        nexPage() {
            if(this.page<2){
                this.page++
            }
            else{
                this.page=2
            }
        },
        beforePage() {
            if(this.page>0){
                this.page--
            }
            else{
                this.page=2
            }
        },
        onActiveModal(payload){
            this.page=0;
            this.name=payload.name
            this.activeModal=true;
            this.img1 = payload.renders[0]
            this.img2 = payload.renders[1]
            this.img3 = payload.renders[2]
            this.smallPicture = payload.smallPicture
            this.albedo = payload.albedo
            this.normal = payload.normal
            this.textureWidth = payload.textureWidth,
            this.textureHeight = payload.textureHeight
        },
        onCloseModal(){
            this.activeModal=false;
        }
    },

}
</script>

<style>

</style>