<script>
  import Nav from '../items/Nav.vue'

  export default{
    components: {
      Nav
    },
    data(){
      return {

      }
    },
    methods:{
      changePage: function(page){
        console.log(page);
        this.$emit('main-change-page', page);
      }
    }
  }
</script>

<template>
  <Nav :typeNav="home"
    @change-page="(name) => changePage(name)"
  ></Nav>

  <div class="container front-page">
    <div class="text">
      <h2>A new way to move an arm robot with your bare hands</h2>
      <p>GestBot allows you to use an arm robot, making gestures with your hands.</p>
    </div>
    <img src="" alt="">
  </div>

  <div class="container vide-presentation">
    <video src=""></video>
  </div>

  <div class="container app-show">

  </div>
  
  <div class="container libs-info">

  </div>

  <div class="container models-info">

  </div>

  <div class="container owners-images">

  </div>

  <footer>
    <h1>Footer</h1>
  </footer>

</template>

<style scoped>
</style>
