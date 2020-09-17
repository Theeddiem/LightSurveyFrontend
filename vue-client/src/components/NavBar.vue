<template>
  <ul>
    <div class="navbar">

      <div class="homePage" @click="goToHomePage">

      <li>
        <img
          id="homepageImg"
          src="../assets/iconfinder_poll red_10494.png"
          height="48px"
        />
      </li>

         <li><a id="homepage" class="active">Home</a></li>
     
      </div>

      <div class="installApp" >
       <li>
        <img
          id="homepageImg"
          src="../assets/iconfinder_install.png"
          height="48px"
        />
      </li>

       <li><a> Install App</a></li>
  
    </div>


    </div>
  </ul>
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


</style>


