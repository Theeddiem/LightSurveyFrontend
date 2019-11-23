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
  grid-gap: 20px;
  grid-template-columns: 1fr 2fr 1fr;
  /* grid-template-rows: 1fr 5fr 1fr; */
  text-align: center;

}


</style>
