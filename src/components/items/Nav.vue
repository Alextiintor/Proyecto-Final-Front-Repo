<script setup>

</script>

<template>
  <nav>
      <div class="logo">
          <img src="robotic-arm2.png" alt="">
          <h1>GESTBOT</h1>
      </div>
      <div class="nav-links">
          <a href="#">About</a>
          <a href="#">About</a>
          <a href="#">About</a>
          <i class="fa-solid fa-earth-europe fa-2xl"></i>
          <button class="btn"> ACCESS </button>
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

    @media (max-width: 1250px) {
        .nav-links{
            display: none;
        }
    }
</style>
