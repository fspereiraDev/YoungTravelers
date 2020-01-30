<template>
  <div class="itineraries">
    <NavBar></NavBar>

    <b-container>
      <b-card
        
        v-for="(itinerary, index) in itineraries" :key= "index"
        overlay
        :img-src="itinerary.image"
        img-alt="Card Image"
        text-variant="white"
        title="Image Overlay"
        sub-title="Subtitle"
        class="card"
      >
        <b-card-text>Some quick example text to build on the card and make up the bulk of the card's content.</b-card-text>
      </b-card>
    </b-container>

    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";

import {mapState} from "vuex";

export default {
  name: "itineraries",
  components: {
    NavBar,
    Footer
  },
  data() {
      return {
          
          itineraries:{}
      }
  },

  mounted() {
    this.itineraries = this.getItineraries;
    console.log(this.itineraries);
  },

  computed: mapState({
    getItineraries: state => state.itineraries,
    getCurrentLocation: state => state.currentLocation
  })
};
</script>

<style scoped>

.card{
    
    max-height: 200px;
}
</style>