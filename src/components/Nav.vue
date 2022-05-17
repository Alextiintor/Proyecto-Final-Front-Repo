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
        display: flex;
        align-items: center;
        justify-content: space-between;
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
        font-size: 1.5rem;
        color: black;
        text-decoration: none;
        margin-right: 100px;
    }

    .nav-links a:hover {
        text-decoration: underline;
    }

    .nav-links i{
        margin-right: 60px;
    }
    .nav-links i:hover{
        cursor: pointer;
    }

    .btn{
        border: none;
        border-radius: 7px;
        font-family: 'Josefin Sans';
        font-size: 16px;
        font-weight: bold;
        padding: 12px 20px;
        color: white;
        background-color: #56A0D3;
    }

    .btn:hover{
        background-color: #4987b0;
        cursor: pointer;
    }
</style>
