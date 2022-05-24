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
    <img src="/imgs/robot-arm.jpeg" alt="">
  </div>

  <div class="container video-presentation">
    <video src=""></video>
    <div class="">
      <h2>A new way to move an arm robot with your bare hands</h2><br>
      <p>GestBot allows you to use an arm robot, making gestures with your hands.</p><br><br>
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
          <h1>Library 1</h1><br>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate laboriosam magnam fugit, obcaecati quasi temporibus, architecto recusandae commodi possimus itaque, quia dignissimos! Repellendus similique modi quo dolorem provident totam sed?</p>
        </div>
        <div class="library">
          <img src="../../../public/imgs/bookshelf.jpg" alt="" style="border-radius: 110px 5px 5px 5px;">
          <h1>Library 2</h1><br>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab excepturi sint perspiciatis numquam, hic in vero sequi debitis impedit maiores, soluta ea voluptate? Laborum quibusdam, labore rem dolor animi modi.</p>
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
          <h1>Model 1</h1><br>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate laboriosam magnam fugit, obcaecati quasi temporibus, architecto recusandae commodi possimus itaque, quia dignissimos! Repellendus similique modi quo dolorem provident totam sed?</p>
        </div>
        <div class="library">
          <img src="../../../public/imgs/bookshelf.jpg" alt="" style="border-radius: 110px 5px 5px 5px;">
          <h1>Model 2</h1><br>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab excepturi sint perspiciatis numquam, hic in vero sequi debitis impedit maiores, soluta ea voluptate? Laborum quibusdam, labore rem dolor animi modi.</p>
        </div>
        <hr>
    </div>
  </div>

  <div id="aboutUs" class="container owners-images">
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
      </ul>
    </div>
    <div class="footer-info-right">
      <div class="footer-info-up">
        <div>Esto es un giño al ajedrez UWU</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, reprehenderit praesentium? Voluptatibus.</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
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
  width: 20vw;
  height: 50vh;
  margin-right: 5vw;
}
.footer-info-right{
  width: 60vw;
  display: flex;
  flex-direction: column;
}

.footer-info-up{
  width: 60vw;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5vh;
}
.footer-info-up div{
  width: 15vw;
  height: 35vh;
}
.footer-info-down{
  text-align: center;
  width: 60vw;
  height: 10vh;
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
  font-size: 2.5rem;
  font-family: 'Josefin Sans';
  margin-bottom: 3vh;
}
.library p{
  font-size: 1.75rem;
  font-family: 'Asap';
  text-align: justify;
}

</style>
