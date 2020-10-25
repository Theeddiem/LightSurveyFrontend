<template>

    <div class="navbar">

      <div class="homePage" @click="goToHomePage">
        <img
          class="navBarIcons"
          src="../assets/pie-chart_icon.svg"
          height="48px"
          width="48px"
        />
        <p class="imgTitle">Home</p>
      </div>



      <div class="installApp" >
        <img 
          class="navBarIcons"
          src="../assets/install_icon.svg"
        />
       <p class="imgTitle"> Install</p>
    </div>

    </div>
    
</template>

<script>
export default {
  methods: {

    goToHomePage() {

        this.$router.replace ('/')
        this.$store.state.currentSurvey = null
        
    },
  }
};
</script>

<style>

.installApp{
  margin-right: 5px;
}

.navBarIcons{
  margin-top: 2px;
  margin-left: 2px;
  height:48px;
  width:48px
}

.imgTitle{
     float: right;
     margin-left: 5px;
}
.navbar {
  width: 100%;
  display: flex;
  grid-column: 1/-1;
  justify-content: space-between;
  background-color: white;
  font-family: myFirstFont, Arial, Helvetica, sans-serif;
}

.installApp:hover,
.installApp:active,
.homePage:hover,
.homePage:active{
    background-color:  rgb(230, 251, 236);
    cursor: pointer;
}

/* make it so that in touch devices hover color won't stuck after clicking */
@media (hover: none) { 
    .installApp:hover,
    .installApp:active,
    .homePage:hover,
    .homePage:active{ 
        background-color:white;
    }
}
</style>


