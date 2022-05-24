<script>
    export default {
        props: {
            typeNav: String
        }
    }

    
</script>

<template>
  <nav>
        <div class="logo" @click="$emit('change-page', 'homePage')">
            <img src="/robotic-arm2.png" alt="">
            <h1>GESTBOT</h1>
        </div>

        <div v-if="typeNav=='home'" class="nav-links">
            <a href="#demo">Demostration</a>
            <a href="#libraries">Libraries</a>
            <a href="#models">Models</a>
            <!-- <a href="#aboutUs">About Us</a> -->
            <!-- <i class="fa-solid fa-earth-europe fa-2xl"></i> -->
            <button class="btn btn-blue" @click="$emit('change-page', 'roomsPage')"> ACCESS </button>
        </div>

        <!-- <div v-else-if="typeNav=='rooms'" class="nav-icons">
            <div class="icon-container" style="width: 50px; height: 50px;"><i class="fa-solid fa-wrench" style="font-size: 2rem;"></i></div>
            <div style="width: 20px;"></div>
            <div class="icon-container"><i class="fa-solid fa-robot"></i></div>
        </div> -->

        <div v-else class="nav-links">
            <i id="close" class="fa-solid fa-rectangle-xmark" @click="$emit('change-page', 'homePage')"></i>
        </div>
  </nav>
</template>

<style scoped>
    nav{
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }

    h1{
        font-family: "Nova Flat";
        font-size: 64px;
        font-weight: 100;
        margin: 0;
    }

    .logo{
        display: flex;
        align-items: center;
        
    }
    
    .logo:hover{
        cursor: pointer;
    }

    .logo img {
        margin: 10px;
        margin-right: 20px;
    }

    .nav-links{
        display: flex;
        align-items: center;
        margin-right: 15px;
    }

    .nav-links a {
        font-family: 'Josefin Sans';
        font-size: 2rem;
        color: black;
        text-decoration: none;
        margin-right: 100px;
    }

    .nav-links a:hover {
        text-decoration: underline;
    }

    .nav-links i{
        font-size: 2rem;
        margin-right: 60px;
    }
    .nav-links i:hover{
        color: #015eba;
        cursor: pointer;
    }

    .nav-icons{
        display: flex;
        align-items: flex-end;
        margin-right: 15px;
    }

    .icon-container{
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60px;
        height: 60px;
        background-color: var(--blue);
        box-shadow:  5px 5px 10px #bfbfbf,
             -5px -5px 10px #ffffff;
    }
    .icon-container:hover{
        background: linear-gradient(145deg, #015eba, #209aff);
        box-shadow:  5px 5px 10px #bfbfbf,
             -5px -5px 10px #ffffff;
        cursor: pointer;
        background-color: #0080ff;
    }
    .icon-container i{
        font-size: 2.5rem;
        color: var(--white);
    }

    #close{
        color: var(--blue);
    }

    @media (max-width: 1400px) {
        .nav-links{
            margin-right: 16px;
        }

        .nav-links a {
        font-size: 1.5rem;
        margin-right: 50px;
    }
    }
</style>
