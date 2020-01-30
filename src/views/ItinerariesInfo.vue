<template>
  <div>
    <NavBar></NavBar>
    <div class="container">
      <h1 class="page-title">ITENERARIES SUGESTIONS</h1>
      <div class="block-item">
        <div class="list">
          <div class="list-item" v-for="(location, index) in locations" :key="index">
            <div class="list-time">6:00 am</div>
            <div class="list-border"></div>
            <div class="list-desc">
              <h3>{{location.name}}</h3>
              <div>{{location.address}}</div>
              <!-- <div>Boarding: 5:30 am Destination: Miami, FL</div> -->
              <div class="border"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import { mapGetters } from "vuex";

export default {
  name: "itinerariesInfo",
  components: {
    NavBar,
    Footer
  },
  data() {
    return {
      locations: {}
    };
  },
  computed: {
    ...mapGetters({
      currentItinerary: "getCurrentItinerary",
      reviews: "getReviews",
      getusers: "getUsers"
    })
  },
  mounted() {
    console.log(
      "THIS ITINERARY: " + JSON.stringify(this.currentItinerary.locations)
    );

    this.locations = this.currentItinerary.locations;
  }
};
</script>

<style scoped>
.container {
  margin-bottom: 200px;
  align-content: center;
}

.page-title {
  text-align: center !important;
  font-size: 50px;
}

.list {
  font-style: normal;
  background-color: #353842;
  float: left;
  padding: 1.5em 0;
  margin-bottom: 3em;
  margin-left: 50px;
  margin-top: 20px;
  border: 1px solid #353842;
  border-radius: 6px;
  align-content: center;
}
.list-item {
  float: left;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.list-time {
  color: #cbb46e;
  width: 25%;
  text-align: center;
}

.list-desc {
  width: 60%;
  border-bottom: 1px solid #484c56;
  color: #ffffff;
  font-size: 15px;
  line-height: 22px;
  padding: 1em;
  position: relative;
}

.border {
  background: #2a2b31;
  width: 3px;
  position: absolute;
  top: 0;
  bottom: -1px;
  left: -8%;
}

.border:after {
  content: "";
  background: #3e414e;
  border: 5px solid #2a2b31;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  margin-top: -25px;
  left: -5px;
  width: 8px;
  height: 8px;
}
</style>