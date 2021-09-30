<template>
<!-- <div class="fixed top-0 right-0">
<div class="fixed top-0 right-0  mt-5 mx-1 text-xs font-mono text-white h-6 w-6 rounded-full flex items-center justify-center bg-gray-700 sm:bg-pink-500 md:bg-orange-500 lg:bg-green-500 xl:bg-blue-500">
  <div class="block  sm:hidden md:hidden lg:hidden xl:hidden">al</div>
  <div class="hidden sm:block  md:hidden lg:hidden xl:hidden">sm</div>
  <div class="hidden sm:hidden md:block  lg:hidden xl:hidden">md</div>
  <div class="hidden sm:hidden md:hidden lg:block  xl:hidden">lg</div>
  <div class="hidden sm:hidden md:hidden lg:hidden xl:block">xl</div>
</div>
  <p class="bg-red-400 text-sm">
    V 1.0.3
  </p>
  </div> -->
 <div :class="getPageState?'':'theme-arko'">
  <router-view/>
 </div>
</template>
<script >
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(["getPageState"])
  },
  mounted () {
    console.log("V 1.1.0")
  },
}
</script>
<style>
</style>
