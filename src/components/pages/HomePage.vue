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
  <Nav :typeNav="'home'"
    @change-page="(name) => changePage(name)"
  ></Nav>

  <div class="container front-page">
    <div>
      <h2>A new way to move an arm robot with your bare hands</h2><br>
      <p>GestBot allows you to use an arm robot, making gestures with your hands.</p>
    </div>
    <img src="" alt="">
  </div>

  <div class="container video-presentation">
    <video src=""></video>
    <div class="">
      <h2>A new way to move an arm robot with your bare hands</h2><br>
      <p>GestBot allows you to use an arm robot, making gestures with your hands.</p><br><br>
      <button class="btn btn-blue" @click="$emit('main-change-page', 'roomsPage')">Move your robot</button>
    </div>
  </div>

  <div id="gestures" class="container app-show">
    <h1>Gestures</h1>
  </div>
  
  <div id="libraries" class="container libs-info">
    <h1>Libraries</h1>
  </div>

  <div class="container models-info">
    <h1>Models</h1>
  </div>

  <div id="aboutUs" class="container owners-images">
    <h1>About Us</h1>
  </div>

  <footer>
    <h1>Footer</h1>
  </footer>

</template>

<style scoped>
/* =========================================front-page========================================= */
.front-page{
  justify-content: center;
}

.front-page div{
  width: 32vw;
  margin-right: 7.5vw;
}

.front-page h2{
  font-size: 48px;
  font-weight: 100;
}

.front-page p{
  font-size: 32px;
}

.front-page img{
  border-radius: 15px;
  width: 25vw;
  height: 60vh;
  background-color: var(--grey);
}

/* =========================================video-presentation========================================= */
.video-presentation{
  justify-content: center;
}

.video-presentation video{
  border-radius: 15px;
  width: 45vw;
  height: 60vh;

  /* margin-left: -5vw; */
  margin-right: 3vw;
  
  background-color: var(--grey);
}

.video-presentation div{
  width: 25vw;
}

.video-presentation h2{
  font-size: 48px;
  font-weight: 100;
}

.video-presentation p{
  font-size: 32px;
}
</style>
