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
        <b-button variant="info">Been there</b-button>
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

        <div class="form-group-rate">
          <label for="range-1">Rate this spot from 1 to 5:</label>
          <b-form-input id="range-1" v-model="data.rate" type="range" min="1" max="5"></b-form-input>
          <div class="mt-2">Value: {{ data.rate }}</div>
        </div>
        <b-button @click="doReview()">Rate</b-button>
      </b-form-group>
    </b-container>
    <!-- <b-container>
      <b-img center src="https://picsum.photos/1024/400/?image=41" fluid alt="Responsive image"></b-img>

    </b-container>-->
    <b-jumbotron bg-variant="info" text-variant="white" border-variant="dark">
      <template v-slot:header>BootstrapVue</template>

      <template v-slot:lead>
        This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
        featured content or information.
      </template>

      <hr class="my-4" />

      <p>
        It uses utility classes for typography and spacing to space content out within the larger
        container.
      </p>
    </b-jumbotron>
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
      userInfo: "",

      value: "",
      spot: {},
      data: {
        // name: "",
        // idReview: "",
        texto: "",
        rate: ""
      },
      reviews_data: [
        {
          name: "",
          idReview: "",
          idSpot: "",
          texto: "",
          rate: ""
        }
      ]
    };
  },
  mounted() {
    // Get all users from the store
    this.users = this.getusers;
    // Get user information from the token
    this.userLog = JSON.parse(localStorage.getItem("token"));
    // Object to receive all the user info
    this.userInfo = {
      name: ""
    };
    // Get all information that the fake Token (comparing with the data in the store) can give from the logged user
    for (let i = 0; i < this.users.length; i++) {
      if (this.userLog.email == this.users[i].email) {
        this.userInfo = {
          name: this.users[i].name
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
      this.reviews_data.name = this.userInfo.name;
      this.reviews_data.idReview = this.data.idReview;
      this.reviews_data.idSpot = this.currentLocation.id;
      this.reviews_data.texto = this.data.texto;
      this.reviews_data.rate = this.data.rate;

      console.log(this.reviews_data);
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
</style>