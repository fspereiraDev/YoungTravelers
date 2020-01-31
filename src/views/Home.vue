<template>
  <div class="home">
    <NavBar></NavBar>
    <div class="container-fluid">
      <div class="header">
        <h1 class="header-text1">Lets grow together</h1>
        <h1 class="header-text2">STUDY LEARN TRAVEL</h1>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
// import { mapState } from "vuex";

export default {
  name: "home",
  components: {
    NavBar,
    Footer
  },
  methods: {}
};
</script>

<style scoped>
body {
  width: 100%;
}

.container-fluid {
  background-image: url("../assets/hero.jpg");
  background-size: cover;
  height: 900px;
  width: 100%;
  margin-top: -2rem;
}

.col-cards {
  margin-left: 2rem;

  margin-top: 2rem;
}

.header {
  margin-top: 15rem;
  text-align: center;
}

.header-text1 {
  font-size: 8rem;
}

.header-text2 {
  font-weight: bold;
  font-size: 8rem;
}

.row-features {
  margin-top: 5rem;
  margin-left: 25rem;
  margin-bottom: 5rem;
}

.section-title {
  margin-top: 25rem;
  text-align: center;
}

.team-pictures .container .row {
  text-align: center;
  margin-right: 45px;
  margin-left: -45px;
  margin-top: 40px;
}

.team-page-jumbotron .container .row h4 {
  font-family: "roboto";
  font-size: 25px;
  text-align: center;
  margin-right: 80px;
  margin-left: -10px;
  margin-top: -80px;
}

.team-page-jumbotron .container .row h5 {
  font-size: 15px;
  font-family: "roboto";
  text-align: center;
  margin-top: -5px;
  margin-right: 80px;
  margin-left: -10px;
}

.team-page-jumbotron .container .row p {
  line-height: 1.8em;
  font-family: "roboto", sans-serif;
  text-align: justify;
  font-weight: lighter;
  margin-top: 20px;
  margin-left: -50px;
  margin-right: 50px;
}
</style>
