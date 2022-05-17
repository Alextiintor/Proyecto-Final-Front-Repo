<script>
  import Nav from '../items/Nav.vue'
  import RoomCard from '../items/roomCard.vue';

  export default{
    components: {
      Nav,
      RoomCard
    },
    data(){
      return {
        robots: {
          firstRobot: {
            roomNumber: 1
          },
          secondRobot: {
            roomNumber: 2
          },
          thirdRobot: {
            roomNumber: 3
          },
          fourthRobot: {
            roomNumber: 4
          }
        }
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
  <Nav :typeNav="'rooms'"
    @change-page="(name) => changePage(name)"
  ></Nav>
  <div class="container">
    <RoomCard 
      v-for="robot in robots"
              :cardNumber="robot.roomNumber"
      :key="robot"
    ></RoomCard>
  </div>
</template>

<style scoped>
</style>