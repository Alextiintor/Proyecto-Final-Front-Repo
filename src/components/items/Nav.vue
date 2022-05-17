<script>
    export default {
        props: ['type']
    }
</script>

<template >
  <nav>
        <div class="logo">
            <img src="robotic-arm2.png" alt="">
            <h1>GESTBOT</h1>
        </div>
        <div v-if="type==home" class="nav-links">
            <a href="#">About</a>
            <a href="#">About</a>
            <a href="#">About</a>
            <i class="fa-solid fa-earth-europe fa-2xl"></i>
            <button class="btn"> ACCESS </button>
        </div>

        <div v-else-if="type==rooms" class="nav-links">
            <div class="icon-container"><i class="fa-solid fa-wrench"></i></div>
            <div class="icon-container"><i class="fa-solid fa-robot"></i></div>
        </div>

        <div v-else class="nav-links">
            <i id="close" class="fa-solid fa-rectangle-xmark"></i>
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
        margin-right: 35px;
        margin-right: 60px;
    }
    .nav-links i:hover{
        cursor: pointer;
    }

    .icon-container{
        background-color: var(--blue);
    }

    #close{
        color: var(--blue);
    }
    @media (max-width: 1250px) {
        .nav-links{
            display: none;
        }
    }
</style>
