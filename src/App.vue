<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HomePage from './components/pages/HomePage.vue'
import style from './style.css'
import RoomsPage from './components/pages/roomsPage.vue'

export default{
  components: {
    HomePage,
    RoomsPage
  },
  data(){
    return {
      currentPage: 'homePage'
    }
  },
  methods:{
    changePage: function(page){
      console.log(page);
      this.currentPage = page
    }
  }
}

</script>

<template>

  <HomePage v-if='currentPage == "homePage"'
    @main-change-page="(name) => changePage(name)"
  />
  <RoomsPage v-if='currentPage == "roomsPage"' 
    @main-change-page="(name) => changePage(name)"
  />

</template>

<style>

</style>
