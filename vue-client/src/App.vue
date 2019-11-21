<template>

  <div class="App-container">
    <NavBar></NavBar>
    <router-view></router-view>
    <Footer></Footer>
  </div>

</template>

<script>
</script>

<style>
@import "./assets/style.css";
@import "./assets/animate.css";



.App-container{
 
  display: grid;
  grid-gap: 10%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr auto 1fr;
  text-align: center;
}


</style>
