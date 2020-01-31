<template>
  <div class="home">
    <NavBar></NavBar>
    <div>
    <b-img class="main-image" src="https://picsum.photos/1550/650/?image=41" fluid></b-img>
    <div class="header">
    <h1 class="header-text1">Lets grow together</h1>
    <h1 class="header-text2">STUDY LEARN TRAVEL</h1>
    </div>
  </div>
    <h1 class="section-title">Features</h1>

    <div class="row row-features">
      <div class="col-lg-3 col-cards">
        <b-card
          title="Card Title"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>

          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
      </div>

      <div class="col-lg-3 col-cards">
        <b-card
          title="Card Title"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>

          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
      </div>
      <div class="col-lg-3 col-cards">
        <b-card
          title="Card Title"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>

          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
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
.main-image {
  margin-top: -2rem;
}

.col-cards {
  margin-left: 2rem;

  margin-top: 2rem;
}

.header {

  margin-top: -40rem;
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
</style>
