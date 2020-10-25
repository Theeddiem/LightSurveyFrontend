<template>

    <div class="navbar">

      <div class="homePage" @click="goToHomePage">


        <img
          id="homepageImg"
          src="../assets/iconfinder_poll red_10494.png"
          height="48px"
        />


        <p class="imgTitle">Home</p>
     
      </div>

      <div class="installApp" >
        <img 
          id="installAppImg"
          src="../assets/iconfinder_install.png"
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


#installAppImg
{
  margin-top:3px;
  height:48px;
  width:48px
}

.imgTitle{
     float: right;
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


