<template>
  <div class="h-screen w-full bg-6f overflow-hidden">
    <div class="h-5 xl:h-16"></div>    
    <div class="h-5/6  bg-6f shadow-10xl overflow-hidden">
    <div class="overflow-hidden">
      <div class="flex justify-between ">
        <p class="uppercase monserrat text-5xl text-white font-normal pl-10 py-7">
      DASHBOARD
      </p>
      <div class="flex items-end pb-7"> 
        <a href="https://analytics.google.com/analytics/web">
        <button class="mr-10 moserrat-semibold text-force-white text-sm w-48 h-8 bg-1f" >Ir A Google Analytics</button>
        </a>
      </div>
      </div>
    </div>
      <div class="w-full px-5 ">
    <div class="w-full h-full ">
        <HeaderDashboardComponentVue/>      
        <StatsDashboardComponenVue/>
    </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderDashboardComponentVue from '../menus/HeaderDashboardComponent.vue'
import StatsDashboardComponenVue from '../stats/StatsDashboardComponen.vue'
export default {
  components: {
    HeaderDashboardComponentVue,
    StatsDashboardComponenVue
  },

}
</script>

<style>

</style>