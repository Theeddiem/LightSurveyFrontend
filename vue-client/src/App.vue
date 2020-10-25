<template>

  <div class="App-container">
    <NavBar></NavBar>
    <router-view></router-view>
    <Footer></Footer>
  </div>

</template>

<script>
export default {

  metaInfo() {
    return {
      title: "Light Survey",
      meta: [
          { 'property': 'og:description', 'content': 'Wow', 'vmid': 'og:description'},
            { 'property': 'og:title', 'content': 'WowAA', 'vmid': 'og:title'}
      ]
    };
  }
};
</script>

<style>
@import "./assets/style.css";
@import "./assets/animate.css";

.App-container{

  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto 1fr auto;
  text-align: center;
  justify-items: center;

}


</style>
