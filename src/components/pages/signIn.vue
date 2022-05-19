<script>
  import Nav from '../items/Nav.vue'

  export default{
    components: {
      Nav,
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
  <Nav :typeNav="'else'"
    @change-page="(name) => changePage(name)"
  ></Nav>
  <div class="container">
      <div class="signin">
        <div class="header-sign">
            <div class="icon-container"><i class="fa-solid fa-robot"></i></div>
            <h1>Iniciar session</h1>
        </div>
        <form action="" method="post">
            <div class="item-form">
                <span for="">Email</span>
                <input type="email" name="" id="">
            </div>
            <div class="item-form">
                <span for="">Contraseña</span>
                <input type="password" name="" id="">
            </div>
            <input type="submit" value="Iniciar">
        </form>
      </div>
    <RoomCard 
      v-for="robot in robots"
              :cardNumber="robot.roomNumber"
      :key="robot"
      @change-page="(name) => changePage(name)"
    ></RoomCard>
  </div>
  
</template>

<style scoped>
    .signin{
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
        width: 40vw;
    }
    .item-form {
    }
    .item-form span{
        width: 35vw;
    }
    span{

    }
    input{

    }
</style>