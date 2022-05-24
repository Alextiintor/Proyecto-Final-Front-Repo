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
      },
      signIn: function(){
        let username_email = $('#email').val()
        let paswd = $('#pasword').val()
        $.ajax({
          method: "GET",
          URL: `api.gestbot.es/api/users/${username_email}`
        }).done(function(data) {
          let result = bcrypt.compare(paswd, data.password)
          console.log(result);
        }).fail(function(msg) {
          console.log(msg);
        })
        this.$emit('main-change-page', 'roomsPage')
      }
    }
  }

  
</script>

<template>
  <Nav :typeNav="'else'"
    @change-page="(name) => changePage(name)"
  ></Nav>
  <div class="container">
      <div class="signin">
        <div class="header-sign">
            <div class="icon-container"><i class="fa-solid fa-robot"></i></div>
            <h1>Iniciar session</h1>
        </div>
        <form action="" method="">
            <div class="item-form" style="margin-top: 2vh;">
                <span for="">Email</span>
                <input type="email" name="" id="email">
            </div>
            <div class="item-form">
                <span for="">Contraseña</span>
                <input type="password" name="" id="password">
            </div>
            <div class="btn btn-blue" style="margin-top: 2vh;" @click="signIn">Iniciar</div>
        </form>
      </div>
      <div class="signup">
        <p style="margin-bottom: 2vh;">Si no tienes cuenta, dale aqui para crear una</p>
        <button class="btn btn-blue" >Registrate</button>
      </div>
  </div>
  
</template>

<style scoped>
  .container{
    flex-direction: column;
  }
  .signin{
    margin-top: 25vh;
      display: flex;
      flex-direction: column;
      align-items: center;
  }
  .header-sign{
      display: flex;
      align-items: center;
      
      font-family: "Nova Flat";
      font-size: 1.5rem;
      font-weight: bold;
      margin: 0;
  }
  .icon-container{
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 60px;
      height: 60px;
      background-color: var(--blue);
      margin-right: 1vw;
  }
  .icon-container i{
      font-size: 2.5rem;
      color: var(--white);
  }
  form{
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 20vw;
  }
  .item-form {
    margin-bottom: 1vh;
  }
  .item-form span{
      width: 35vw;
  }
  span{
    font-family: 'Asap';
  }
  input{
    padding: 0.5vh 1vh;
    border: 1px solid var(--blue);
    border-radius: 0.35vw;
    width: 20vw;
    height: 3vh;
    background-color: var(--grey);
  }

  .send-btn{
    padding: 0px;
    width: 12.5vw;
    border: unset;
    height: 6vh;
    background-color: var(--blue);
    color: var(--white);
    font-family: "Nova Flat";
    font-size: 34px;
    border-radius: 0.3vw;
  }

  .signup{
    margin-top: 15vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>