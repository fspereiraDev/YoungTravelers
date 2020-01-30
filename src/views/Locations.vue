<template>
  <div class="locations">
    <NavBar></NavBar>
    <b-container>
      <h1 class="page-title">Spots of Interest</h1>
      <b-row align-v="center">
        <b-card
          v-for="(spot, index) in spots"
          :key="index"
          :title="spot.name"
          :img-src="spot.image"
          img-alt="Image"
          img-top
          tag="article"
          class="location-card lg-3"
        >
          <b-card-text>{{spot.description}}</b-card-text>
          <b-button to="/locationInfo" variant="primary" @click="addCurrentSpot(spot)">View Details</b-button>
        </b-card>
      </b-row>
    </b-container>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue"
import { mapState } from "vuex";
// import { mapActions } from "vuex";

export default {
  name: "Locations",
  components: {
    NavBar,
    Footer
  },
  data() {
    return {
      spots: {}
    };
  },
  mounted() {
    this.spots = this.getLocations;
    console.log(this.spots);
  },
  methods: {
    addCurrentSpot(spot) {
      console.log(spot);
      let currentSpot = spot;
      this.$store.dispatch("currentLocation", currentSpot);
    }
  },
  computed: mapState({
    getLocations: state => state.locations,
    getCurrentLocation: state => state.currentLocation
  })
};
</script>


<style scoped>
.location-card {
  position: relative;
  max-width: 30rem;
  height: 460px;
  min-height: 32rem;
  margin-top: 30px;
  margin-left: 40px;
  margin-bottom: 20px;
}

.card-img-top {
  height: 200px;
}

.card-text {
  font-size: 12px;
  color: #333;
  margin-top: 10px;
}

.card-title {
  font-size: 20px;
  font-weight: bold;
}

.card-body {
  display: flex;
  flex-direction: column;
}

.btn {
  /* position: relative; */
  margin-top: auto;
  margin-left: auto;
  width: 30%;
}

.page-title {
  text-align: center;
  font-size: 50px;
}
</style>