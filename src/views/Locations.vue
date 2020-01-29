<template>
  <div class="locations">
    <NavBar></NavBar>
    <div class="container">
      <h1 class="page-title">Points of Interest</h1>
      <div class="row location-title">
        <div class="col-lg-4">
          <b-card
            title="Card Title"
            img-src="https://picsum.photos/1000/800/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            class="location-card lg-3"
          >
            <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>

            <b-button href="#" variant="primary">View Details</b-button>
          </b-card>
        </div>
        <div class="col-lg-4">
        <b-card
          title="Card Title"
          img-src="https://picsum.photos/1000/800/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          class="location-card lg-3"
        >
          <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>

          <b-button href="#" variant="primary">View Details</b-button>
        </b-card>
        </div>
        <div class="col-lg-4">
        <b-card
          title="Card Title"
          img-src="https://picsum.photos/1000/800/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          class="location-card lg-3"
        >
          <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>

          <b-button href="#" variant="primary">View Details</b-button>
        </b-card>
        </div>

        <div class="col-lg-4">
        <b-card
          title="Card Title"
          img-src="https://picsum.photos/1000/800/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          class="location-card lg-3"
        >
          <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>

          <b-button href="#" variant="primary">View Details</b-button>
        </b-card>
        </div>
        <div class="col-lg-4">
        <b-card
          title="Card Title"
          img-src="https://picsum.photos/1000/800/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          class="location-card lg-3"
        >
          <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>

          <b-button href="#" variant="primary">View Details</b-button>
        </b-card>
        </div>
        <div class="col-lg-4">
        <b-card
          title="Card Title"
          img-src="https://picsum.photos/1000/800/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          class="location-card lg-3"
        >
          <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>

          <b-button href="#" variant="primary">View Details</b-button>
        </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";

export default {
  name: "Locations",
  components: {
    NavBar
  }
};
</script>


<style>
.location-card {
  max-width: 25rem;
  min-height: 32rem;
}

.page-title {
  text-align: center;
}

.location-title {

    margin-top: 4rem;
    
}
.col-lg-4 {

    margin-top: 2rem;
}


</style>