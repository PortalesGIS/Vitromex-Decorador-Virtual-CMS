<template>
  <div class="h-screen w-full bg-6f overflow-hidden">
    <div class="h-5 xl:h-16"></div>
    <div class="h-5/6  bg-6f shadow-10xl overflow-hidden">
      <div class="overflow-hidden">
        <p class="uppercase text-5xl text-white font-normal pl-10 py-7 monserrat">
          ONBOARDING APP
        </p>
      </div>
      <div class="flex h-10  px-5 mb-px">
        <div
          class="mx-1 px-16 py-2 font-semibold text-sm cursor-pointer rounded-t-sm moserrat-semibold"
          :class="
            menuOption === 0 ? 'bg-f5 text-force-black' : 'bg-555555 text-force-white'
          "
          @click="chageMenuOption(0)"
        >
          Espacios
        </div>
        <div
          class="  px-16 py-2 font-semibold text-sm cursor-pointer rounded-t-sm moserrat-semibold"
          :class="
            menuOption === 1 ? 'bg-f5 text-force-black' : 'bg-555555 text-force-white'
          "
          @click="chageMenuOption(1)"
        >
          Tipologías
        </div>
      </div>
      <div v-if="menuOption === 0" class="w-full h-full">
        <div class="w-full h-full px-5">
          <div class="flex items-center w-full  bg-f5 h-16">
            <SpaceFilterComponenVue
            :spacesSelected="spacesSelected"
            />
          </div>
          <div class="w-full h-3/6 xl:h-4/6   bg-f5">
            <SpacesTablecomponentVue 
            :changespaseSelected="onchangeSpaceSelected"
            />
          </div>
        </div>
      </div>
      <div v-else class="w-full h-full px-5 ">
        <div class="flex items-center w-full  bg-f5 h-16">
            <TypologieFilterComponentVue 
            :typologiasSelected="typologiesSelected"
            />
          </div>
          <div class="w-full h-3/6 xl:h-4/6  bg-f5">
            <TypologieTableComponentVue 
            :changeTypologieSelected="onchangeTypologieSelected"
            />
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import SpaceFilterComponenVue from '../filters/SpaceFilterComponen.vue';
import TypologieFilterComponentVue from '../filters/TypologieFilterComponent.vue';
import SpacesTablecomponentVue from '../tables/SpacesTablecomponent.vue';
import TypologieTableComponentVue from '../tables/TypologieTableComponent.vue';
export default {
  components: {
    SpacesTablecomponentVue,
    SpaceFilterComponenVue,
    TypologieTableComponentVue,
    TypologieFilterComponentVue
  },
  data() {
    return {
      menuOption: 0,
      spacesSelected:[],
      typologiesSelected:[]
    };
  },
  methods: {
    chageMenuOption(value) {
      this.menuOption = value;
      this.spacesSelected=[]
      this.typologiesSelected
    },
    onchangeSpaceSelected(value){
      const inde = this.spacesSelected.findIndex(elm =>elm ===value)
            if(inde>=0){
                this.spacesSelected.splice(inde,1)
            }
            else{
             this.spacesSelected.push(value)
            }
    },
    onchangeTypologieSelected(value){
      const inde = this.typologiesSelected.findIndex(elm =>elm ===value)
            if(inde>=0){
                this.typologiesSelected.splice(inde,1)
            }
            else{
             this.typologiesSelected.push(value)
            }
    }
  },
};
</script>

<style></style>
