<template>
  <div class="grid grid-cols-11 w-full px-16 pt-4 items-center justify-center">
                    <div class="w-full flex justify-center">
                        <div class="h-10 w-10 rounded-full col-span-1 flex justify-center items-center"
                            :class="(page===0)?'bg-black':'bg-c4'"
                        >
                        <div>
                            <p class="text-center font-semibold text-lg monserrat " 
                            :class="(page===0)?'text-force-white':'text-force-black'"
                            >1</p>
                        </div>
                    </div>
                    </div>
                    <div class="col-span-4 px-3">
                        <div class="bg-c4 h-px"></div>
                    </div>
                    <div class="w-full flex justify-center">
                        <div class="h-10 w-10 rounded-full col-span-1 flex justify-center items-center"
                            :class="(page===1)?'bg-black':'bg-c4'"
                         >
                        <div>
                            <p class="text-center font-semibold text-lg monserrat " 
                            :class="(page===1)?'text-force-white':'text-force-black'"
                            >2</p>
                        </div>
                    </div>
                    </div>
                     <div class="col-span-4 px-3">
                        <div class="bg-c4 h-px"></div>
                    </div>            
                    <div class="w-full flex justify-center">
                        <div class="h-10 w-10 rounded-full col-span-1 flex justify-center items-center"
                            :class="(page===2)?'bg-black':'bg-c4'"
                         >
                        <div>
                            <p class="text-center font-semibold text-lg monserrat " 
                            :class="(page===2)?'text-force-white':'text-force-black'"
                            >3</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="grid grid-cols-12 w-full px-16 pt-1 items-center justify-center">
                    <div class="col-span-2 text-sm">Imágenes</div>
                    <div class="col-span-2 text-sm"></div>
                    <div class="col-span-4 text-sm text-center">Texturas AR/3D</div>
                    <div class="col-span-2 text-sm"></div>
                    <div class="col-span-2 text-sm flex justify-end">Espacios</div>
                </div>  
</template>

<script>
export default {
    props: {
        page: {
            type: Number,
            default: 0
        },
    },
}
</script>

<style>

</style>