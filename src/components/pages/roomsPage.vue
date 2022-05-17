<script setup>
    import Nav from '../items/Nav.vue'
    import RoomCard from '../items/roomCard.vue';
</script>

<template>
  <Nav typeNav='else'></Nav>

  <div class="container">
    
      <RoomCard cardNumber="1"></RoomCard>
      <RoomCard cardNumber="2"></RoomCard>
      <RoomCard cardNumber="3"></RoomCard>
      <RoomCard cardNumber="4"></RoomCard>
  </div>
</template>

<style scoped>
</style>