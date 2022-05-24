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
      <h2>A new way to move a robot arm with your bare hands</h2><br>
      <p>GestBot allows you to use a robot arm, making gestures with your hands.</p>
    </div>
    <img src="/imgs/robot-arm.jpeg" alt="">
  </div>

  <div id="demo" class="container video-presentation">
    <video src=""></video>
    <div class="">
      <h2>A new way to move a robot arm with your bare hands</h2><br>
      <p>GestBot allows you to use a robot arm, making gestures with your hands.</p><br><br>
      <button class="btn btn-blue" @click="$emit('main-change-page', 'roomsPage')">Move your robot</button>
    </div>
  </div>

  <div id="gestures" class="container app-show hidden">
    <h1>gestos</h1>
  </div>
  
  <div id="libraries" class=" libs-info">
    <h1 class="header-lib">Project libraries</h1>
    <div class="container">
        <hr>
        <div class="library">
          <img src="../../../public/imgs/bookshelf.jpg" alt="" style="border-radius: 5px 5px 110px 5px;">
          <h1>Tensorflow js</h1><br>
          <p>
            <a href="https://www.tensorflow.org/" target="_blank">Tensorflow</a> es una libreria open-source de Google para el Deep Learning, de las mas importante del sector de la inteligencia arificial. La cual nos ha permitido usar modelos ya entrenados que nos han facilitado el trabajo de deteccion de manos.
          </p>
        </div>
        <div class="library">
          <img src="../../../public/imgs/bookshelf.jpg" alt="" style="border-radius: 110px 5px 5px 5px;">
          <h1>Fingerpose</h1><br>
          <p>
            <a href="https://github.com/andypotato/fingerpose" target="_blank">Fingerpose</a>  es una libreria hecha por <a href="https://github.com/andypotato" target="_blank">Andreas Schallwig</a>, la cual nos ha permitido crear los gestos que necesitabamos para mover el robot y despues compararlos con los gestos que capturaba la IA.
          </p>
        </div>
        <hr>
    </div>
  </div>

  <div id="models" class="models-info">
    <h1 class="header-lib">Project models</h1>
    <div class="container">
        <hr>
        <div class="library">
          <img src="../../../public/imgs/bookshelf.jpg" alt="" style="border-radius: 5px 5px 110px 5px;">
          <h1>Hand Pose Detection</h1><br>
          <p>
            <a href="https://blog.tensorflow.org/2021/11/3D-handpose.html" target="_blank">Hand Pose detection</a> es un modelo hecho por un grupo de desarrolladores, que nos permite la deteccion de ambas manos en tiempo real. Lo cual nos ha servido para poder crear gestos diferentes para cada mano.
          </p>
        </div>
        <div class="library">
          <img src="../../../public/imgs/bookshelf.jpg" alt="" style="border-radius: 110px 5px 5px 5px;">
          <h1>Hands model</h1><br>
          <p>
            El modelo <a href="https://google.github.io/mediapipe/solutions/hands.html" target="_blank">Hands</a> ha sido desarrollado por mediapipe, este modelo nos ha permitido realizar pruebas para crear los gestos de cada mano por separado.
          </p>
        </div>
        <hr>
    </div>
  </div>

  <div id="aboutUs" class="container owners-images hidden">
    <h1>About Us</h1>
  </div>

  <footer>
    <div class="footer-info-left">
      <ul>
        <li>item of left side footer</li>
        <li>item of left side footer</li>
        <li>item of left side footer</li>
        <li>item of left side footer</li>
        <li>item of left side footer</li>
        <li>item of left side footer</li>
        <li>item of left side footer</li>
        <li>item of left side footer</li>
        <li>item of left side footer</li>
        <li>item of left side footer</li>
        <li>item of left side footer</li>
        <li>item of left side footer</li>
        <li>item of left side footer</li>
        <li>item of left side footer</li>
        <li>item of left side footer</li>
        <li>item of left side footer</li>
        <li>item of left side footer</li>
        <li>item of left side footer</li>
        <li>item of left side footer</li>
        <li>item of left side footer</li>
        <li>item of left side footer</li>
        <li>item of left side footer</li>
      </ul>
    </div>
    <div class="footer-info-right">
      <div class="footer-info-up">
        <div>
          <ul>
            <li>item of left side footer</li>
            <li>item of left side footer</li>
            <li>item of left side footer</li>
            <li>item of left side footer</li>
            <li>item of left side footer</li>
            <li>item of left side footer</li>
            <li>item of left side footer</li>
            <li>item of left side footer</li>
            <li>item of left side footer</li>
            <li>item of left side footer</li>
            <li>item of left side footer</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>item of left side footer</li>
            <li>item of left side footer</li>
            <li>item of left side footer</li>
            <li>item of left side footer</li>
            <li>item of left side footer</li>
            <li>item of left side footer</li>
            <li>item of left side footer</li>
            <li>item of left side footer</li>
            <li>item of left side footer</li>
            <li>item of left side footer</li>
            <li>item of left side footer</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>item of left side footer</li>
            <li>item of left side footer</li>
            <li>item of left side footer</li>
            <li>item of left side footer</li>
            <li>item of left side footer</li>
            <li>item of left side footer</li>
            <li>item of left side footer</li>
            <li>item of left side footer</li>
            <li>item of left side footer</li>
            <li>item of left side footer</li>
            <li>item of left side footer</li>
          </ul>
        </div>
      </div>
      <div class="footer-info-down">Web designed by Alex Gallardo and Oscar Adell</div>
    </div>
  </footer>

</template>

<style scoped>

/* =========================================Footer========================================= */
footer{
  font-family: 'Asap';
  font-size: 1.25rem;
  display: flex;
  padding: 5vw;
}
.footer-info-left{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20vw;
  height: 55vh;
  margin-right: 5vw;
  background-color: var(--white);
  border: 2px solid var(--blue);
  border-radius: 8px;
}
.footer-info-right{
  width: 60vw;
  height: 55vh;
  display: flex;
  flex-direction: column;
}

.footer-info-up{
  width: 60vw;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10vh;
}
.footer-info-up div{
  width: 15vw;
  height: 35vh;
  background-color: var(--white);
  border: 2px solid var(--blue);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.footer-info-down{
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 60vw;
  height: 10vh;
  background-color: var(--white);
  border: 2px solid var(--blue);
  border-radius: 8px;
}
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
/* =========================================libraries========================================= */
#libraries hr, #models hr{
  margin-top: -15vh;
  border:         none;
  border-left:    1px solid hsla(200, 10%, 50%,100);
  height:         50vh;
  width:          1px;  
}
.header-lib{
  font-size: 4rem;
  font-family: "Josefin Sans";
  font-weight: 100;
  margin-top: 8vh;
  margin-left: 8vw;
}

.library{
  display: flex;
  flex-direction: column;
  width: 25vw;
  height: 75vh;
}
.library img{
  width: 25vw;
  height: 20vh;
  object-fit: cover;
  margin-bottom: 3vh;
}

.library h1{
  font-size: 2.5em;
  font-family: 'Josefin Sans';
  margin-bottom: 3vh;
}
.library p{
  font-size: 24px;
  font-family: 'Asap';
  text-align: justify;
}

</style>
