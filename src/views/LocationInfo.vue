<template>
  <div>
    <NavBar></NavBar>
    <b-container>
      <div class="header" :style="{ background: 'url(' + currentLocation.image + ')' + ' 50% 0'}">
        <div class="info">
          <h1>{{currentLocation.name}}</h1>
          <h4>Porto</h4>
        </div>
      </div>
      <section class="content">
        <p>{{currentLocation.description}}</p>
        <p align="center">
          <a class="website" target="currentLocation.website">Visit Website</a>
        </p>
        <b-button variant="info" @click="beenThere()">Been there</b-button>
      </section>
    </b-container>
    <!-- Form to send review about one spot -->
    <b-container>
      <b-form-group>
        <b-form-textarea
          id="textarea"
          v-model="data.texto"
          placeholder="Enter something..."
          rows="5"
          max-rows="10"
        ></b-form-textarea>

        <div class="form-group-rate" v-if="hasbeenThere()">
          <label for="range-1">Rate this spot from 1 to 5:</label>
          <b-form-input id="range-1" v-model="data.rate" type="range" min="1" max="5"></b-form-input>
          <div class="mt-2">Value: {{ data.rate }}</div>
        </div>
        <b-button @click="doReview()">Rate</b-button>
      </b-form-group>
    </b-container>

    <b-container>
      <ul class="list-group" v-for="(review, index) in reviews" :key="index">
        <li class="list-group-item">
          <div class="row">
            <div class="col-xs-2 col-md-1">
              <img src="http://placehold.it/80" class="img-circle img-responsive" alt />
            </div>
            <div class="col-xs-10 col-md-11">
              <div class="review-text">{{review.texto}}</div>
              <div class="review-rate">Rate: {{review.rate}}</div>
              <div class="review-user">By: {{review.nameUser}}</div>
            </div>
          </div>
        </li>
      </ul>
    </b-container>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import { mapGetters } from "vuex";
// import { mapState } from "vuex";
import Footer from "../components/Footer.vue";

export default {
  name: "LocationInfo",
  components: {
    NavBar,
    Footer
  },
  data() {
    return {
      // Variables to store name of the logged user
      // that are going to be used for the reviews
      userLog: "",
      users: "",
      userInfo: {},

      spot: {},
      data: {
        texto: "",
        rate: ""
      },
      reviews_data: {
        idUser: "",
        name: "",
        idLocation: "",
        texto: "",
        rate: ""
      },
      // Object to receive data about the presence of the user in certain location
      spot_visited: {
        idUser: "",
        name: "",
        idLocation: "",
        nameLocation: ""
      }
    };
  },
  mounted() {
    // Get all users from the store
    this.users = this.getusers;
    console.log("USERS: " + JSON.stringify(this.users));
    // Get user information from the token
    this.userLog = JSON.parse(localStorage.getItem("token"));
    console.log(JSON.stringify(this.userLog));
    // Object to receive all the user info
    this.userInfo = {
      name: "",
      idUsers: ""
    };
    // Get all information that the fake Token (comparing with the data in the store) can give from the logged user
    // in this case, we get the name so we can use it in the review
    for (let i = 0; i < this.users.length; i++) {
      if (this.userLog.email == this.users[i].email) {
        this.userInfo = {
          name: this.users[i].name,
          idUser: this.users[i].id
        };
      }
    }
  },
  computed: {
    ...mapGetters({
      currentLocation: "getCurrentLocation",
      reviews: "getReviews",
      getusers: "getUsers"
    })
  },
  methods: {
    async doReview() {
      this.reviews_data.idUser = this.userInfo;
      this.reviews_data.name = this.userInfo.name;
      this.reviews_data.idLocation = this.currentLocation.id;
      this.reviews_data.texto = this.data.texto;
      this.reviews_data.rate = this.data.rate;

      this.$store
        .dispatch("addReviews", this.reviews_data)
        .then(() =>
          localStorage.setItem("reviews", JSON.stringify(this.reviews_data))
        );
    },
    // Function that will allow the user the tell that he has been in a spot
    // so he can comment about it
    beenThere() {
      this.spot_visited.idUser = this.userInfo.idUser;
      this.spot_visited.name = this.userInfo.name;
      this.spot_visited.idLocation = this.currentLocation.id;
      this.spot_visited.nameLocation = this.currentLocation.name;
      // console.log("I'VE BEEN HERE: " + JSON.stringify(this.spot_visited));

      this.$store
        .dispatch("setLocationVisitors", this.spot_visited)
        .then(() =>
          localStorage.setItem(
            "location_visitors",
            JSON.stringify(this.spot_visited)
          )
        );
    },

    hasbeenThere() {
      for (let i = 0; i < this.$store.state.locationVisitors; i++) {
        console.log("FOR CYCLE");
        if (
          this.userInfo.idUser !== this.$store.state.locationVisitors[i].idUser
        ) {
          console.log("ESTE USER NAO ESTÁ LÁ");
        }
      }
    }
  }
};
</script>

<style scoped>
.container {
  margin-bottom: 10px;
}

.header {
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  height: 30vw;
  min-height: 400px;
  max-height: 550px;
  min-width: 300px;
  margin-top: 0;
  color: #eee;
}
.header:after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -1;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.12) 40%,
    rgba(27, 32, 48, 1) 100%
  );
}
.header:before {
  content: "";
  width: 100%;
  height: 200%;
  position: absolute;
  top: 0;
  left: 0;
  /* background: #1b2030
    url(https://ncultura.pt/wp-content/uploads/2016/01/lello1.jpg) 50% 0
    no-repeat; */
  background-size: 100%;
  background-attachment: fixed;
  animation: grow 360s linear 10ms infinite;
  transition: all 0.4s ease-in-out;
  z-index: -2;
}
.header h1 {
  color: #eee;
  font-size: 50px;
  font-weight: bold;
}

.info {
  width: 100%;
  padding: 15% 10% 0 10%;
  text-align: center;
  text-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
}
.author {
  display: inline-block;
  margin-bottom: 3px;
}

.content {
  padding: 5% 0%;
  text-align: justify;
  font-size: 16px;
}
.website {
  color: #333;
  border: 2px solid;
  border-radius: 3px;
  text-decoration: none;
  display: block;
  padding: 5px 10px;
  font-weight: 600;
  float: left;
}

.btn {
  display: block;
  float: right;
  height: 3rem;
  width: 10rem;
  font-size: 14px;
}

.list-group-item {
  border: 1px solid #eee;
  border-radius: 10px;
  margin-top: 15px;
  width: 100%;
}
</style>