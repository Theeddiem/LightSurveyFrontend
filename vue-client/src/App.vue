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
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: 1fr auto 1fr;
  text-align: center;
}

.swal-copyclipboard {
  height: 4%;
  width: auto;
  font-size: 10px;
  background-color: #26be84;
  border-radius: 10px;
}

.swal-warning {
  height: 4%;
  width: auto;
  font-size: 10px;
  background-color: #ee467e;
  border-radius: 10px;
}

.swal2-title {
  color: white;
  font-weight: 100;
  margin: 0;
}
</style>
