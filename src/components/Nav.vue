<script setup>

</script>

<template>
  <nav>
      <div class="logo">
          <i class="fa-solid fa-shuttle-space"></i>
          <h1>GESTBOT</h1>
      </div>
      <div class="nav-links">
          <a href="#">About</a>
          <a href="#">About</a>
          <a href="#">About</a>
          <i class="fa-solid fa-earth-europe"></i>
          <button class="btn">ACCESS</button>
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
    }

    .logo{
        display: flex;
        align-items: center;
    }

    .nav-links{
        display: flex;
        align-items: center;
    }

    .nav-links a {
        font-family: 'Josefin Sans';
        font-size: 1.5rem;
        color: black;
        text-decoration: none;
        margin-right: 35px;
    }

    .nav-links a:hover {
        text-decoration: underline;
    }

    .nav-links i{
        margin-right: 20px;
    }
</style>
