<template>

    <div class="navbar">

      <div class="homePage" @click="goToHomePage">


        <img
          id="homepageImg"
          src="../assets/iconfinder_poll red_10494.png"
          height="48px"
        />


        <p id="homepage" class="active">Home</p>
     
      </div>

      <div class="installApp" >
        <img 
          id="installAppImg"
          src="../assets/iconfinder_install.png"
        />

       <p> Install</p>
  
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
#installAppImg
{
  margin-top:3px;
  height:48px;
  width:48px
}

p{
     float: right;
}
.navbar {
  display: flex;
  grid-column: 1/-1;
  justify-content: space-between;
  background-color: #fff;
  font-family: myFirstFont, Arial, Helvetica, sans-serif;
}

.installApp:hover,
.installApp:active,
.homePage:hover,
.homePage:active{
    background-color:  rgb(238, 251, 230);
}

/* make it so that in touch devices hover color won't stuck after clicking */
@media (hover: none) { 
    .installApp:hover,
    .installApp:active {
        background-color:white;
    }
}
</style>


