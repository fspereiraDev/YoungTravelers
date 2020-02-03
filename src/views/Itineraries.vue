<template>
  <div class="itineraries">
    <NavBar></NavBar>
    <b-container>
      <div class="input-group input-filter mb-5">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <i class="fa fa-filter"></i>
          </span>
        </div>
        <input
          type="text"
          class="form-control"
          aria-label
          aria-describedby="inputGroup-sizing-default"
          placeholder="Filter for the spot you want to find..."
          v-model="searchInput"
        />
      </div>

      <h1 class="page-title">ITENERARIES SUGESTIONS</h1>
      <div
        class="card bg-dark text-white"
        v-for="(itinerary, index) in filteredItineraries"
        :key="index"
        @click="addCurrentItinerary(itinerary)"
      >
        <img class="card-img" :src="itinerary.image" alt="Card image" />
        <div class="card-img-overlay">
          <h5 class="card-title">{{itinerary.title}}</h5>
          <!-- <p
            class="card-text"
          >This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text">Last updated 3 mins ago</p>-->
        </div>
      </div>
    </b-container>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";

import { mapState } from "vuex";

export default {
  name: "itineraries",
  components: {
    NavBar,
    Footer
  },
  data() {
    return {
      itineraries: {}
    };
  },
  mounted() {
    this.itineraries = this.getItineraries;
    console.log(this.itineraries);
  },
  methods: {
    addCurrentItinerary(itinerary) {
      // console.log(itinerary);
      let currentItinerary = itinerary;
      this.$store.dispatch("currentItinerary", currentItinerary);
      this.$router.push("/itinerariesInfo");
    }
  },
  computed: {
    ...mapState({
      getItineraries: state => state.itineraries,
      getCurrentLocation: state => state.currentLocation
    }),

    filteredItineraries() {
      let itineraries = this.$store.state.itineraries.filter(itinerary => {
        return (
          itinerary.name
            .toLowerCase()
            .includes(this.searchInput.toLowerCase()) &&
          itinerary.title.match(this.searchInput)
        );
      });
      return itineraries;
    }
  }
};
</script>

<style scoped>
.page-title {
  text-align: center;
  font-size: 40px;
}

.card {
  max-height: 200px;
  margin-top: 30px;
  margin-bottom: 50px;
  border: 1px solid white;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.card:hover {
  background-color: #ffffff;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.8);
}

.card-img {
  max-height: 150px;
}

.card-img:before {
  background: linear-gradient(70deg, black, white);
  background-size: cover;
}

.card-title {
  text-align: center;
  margin-top: 30px;
  font-size: 30px;
  font-weight: bold;
}

.input-group {
  margin-top: 10px;
  margin-left: 20px;
  height: 35px;
  width: 1000px;
}

.form-control {
  height: 35px;
  width: 500px;
}

input[type="text"] {
  font-size: 14px;
}
</style>