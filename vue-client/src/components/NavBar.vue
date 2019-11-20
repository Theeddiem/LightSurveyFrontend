<template>
  <ul>
    <div class="navBar" @click="goToHomePage">
      <li>
        <img
          id="homepageImg"
          src="../assets/iconfinder_poll red_10494.png"
          height="48px"
        />
      </li>
      <li><a id="homepage" class="active">Home</a></li>
    </div>
  </ul>
</template>

<script>
export default {
  methods: {
    goToHomePage() {
      console.log("homePage");
    }
  }
};
</script>

<style></style>
