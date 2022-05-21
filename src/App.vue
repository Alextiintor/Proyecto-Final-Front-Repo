<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HomePage from './components/pages/HomePage.vue'
import style from './style.css'
import SignIn from './components/pages/signIn.vue'
import SignUp from './components/pages/signUp.vue'
import RoomsPage from './components/pages/roomsPage.vue'
import RoomPage from './components/pages/roomPage.vue'

export default{
  components: {
    HomePage,
    RoomsPage,
    RoomPage,
    SignIn,
    SignUp
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
  <SignIn v-if='currentPage == "signIn"' 
    @main-change-page="(name) => changePage(name)"
  />
  <SignUp v-if='currentPage == "signUp"' 
    @main-change-page="(name) => changePage(name)"
  />
  <RoomsPage v-if='currentPage == "roomsPage"' 
    @main-change-page="(name) => changePage(name)"
  />
  <RoomPage v-if='currentPage == "roomPage"' 
    @main-change-page="(name) => changePage(name)"
  />

</template>

<style>

</style>
