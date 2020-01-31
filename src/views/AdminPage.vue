<template>
  <div class="row">
    <div class="col col-lg-2 col-admin">
      <h1 class="title">Young Travelers</h1>
      <hr class="separation" />
      <i class="fa fa-user-circle fa-3x"></i>
      <p class="user-logged">Admin</p>
      <hr class="separation2" />
      <button class="user-list" @click="showUsers()">
        <i class="fa fa-address-book fa-2x"></i>
        <p class="user-placeholder">Users</p>
      </button>
      <button class="user-locations" @click="showLocations()">
        <i class="fa fa-map-marker fa-2x"></i>
        <p class="locations-placeholder">Locations</p>
      </button>
      <button class="user-reviews">
        <i class="fa fa-comments fa-2x" @click="showReviews()"></i>
        <p class="locations-placeholder">Reviews</p>
      </button>
      <button class="user-logout">
        <i class="fa fa-sign-out fa-2x" @click="logout"></i>
        <p class="locations-placeholder">Sign Out</p>
      </button>
    </div>
     <!-- <Modal></Modal>
    <b-button id="show-btn" @click="$bvModal.show('bv-modal-example')">Open Modal</b-button> -->
    <div class="container" v-if="clickUsers == true">
      <table class="table user-table table-striped">
        <thead class>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Country</th>
            <th scope="col">University</th>
            <th scope="col">ERASMUS University</th>
            <th scope="col">Email</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user,index) in users" :key="index">
            <td>{{user.id}}</td>
            <td>{{user.name}}</td>
            <td>{{user.country}}</td>
            <td>{{user.university}}</td>
            <td>{{user.erasmus_university}}</td>
            <td>{{user.email}}</td>
            <td>
              <button class="btn btn-danger btn-sm" @click="remove(user.id)">
                <i class="fa fa-trash fa-2x"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="container" v-if="clickLocations == true">
      <table class="table user-table table-striped">
        <thead class>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Adress</th>
            <th scope="col">Rating</th>
            <th scope="col">Tag</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(location, index ) in locations " :key="index">
            <td>{{location.id}}</td>
            <td>{{location.name}}</td>
            <td>{{location.address}}</td>
            <td>{{location.rating}}</td>
            <td>{{location.tag}}</td>
            <td>
              <button class="btn btn-danger btn-sm" @click="removeLocation(location.id)">
                <i class="fa fa-trash fa-2x"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
  
    </div>
    <div class="container" v-if="clickReviews == true">
      <table class="table user-table table-striped">
        <thead class>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">User Text</th>
            <th scope="col">Rate</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(review, index ) in reviews " :key="index">
            <td>{{review.id}}</td>
            <td>{{review.nameUser}}</td>
            <td>{{review.texto}}</td>
            <td>{{review.rate}}</td>
            <td>
              <button class="btn btn-danger btn-sm" @click="removeReview(review.id)">
                <i class="fa fa-trash fa-2x"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
// import { mapState } from 'vuex';
// import Modal from "../components/Modal.vue";
export default {
  name: "AdminPage",
  components: {
    // Modal
  },

  data() {
    return {
      clickUsers: false,
      clickLocations: false,
      clickReviews: false,
      inputName: "",
      users: {},
      locations: [],
      reviews: [],
      addLocations: {
        id: this.$store.getters.getLastId,
        name: "",
        address: "",
        rating: "",
        tag: ""
      }
    };
  },
  created() {
    this.users = this.$store.getters.getUsers;
    this.locations = this.$store.getters.getLocations;
    this.reviews = this.$store.getters.getReviews;
  },
  methods: {
    showUsers() {
      this.clickUsers = true;
      this.clickLocations = false;
      this.clickReviews = false;
    },

    showLocations() {
      this.clickUsers = false;
      this.clickLocations = true;
      this.clickReviews = false;
    },

    showReviews() {
      this.clickUsers = false;
      this.clickLocations = false;
      this.clickReviews = true;
    },
    remove(id) {
      this.$store.dispatch("removeUser", id);
    },

    removeLocation(id) {
      this.$store.dispatch("removeLocation", id);
    },

    removeReview(id) {
      this.$store.dispatch("removeReview", id);
    },
    logout: function() {
      this.$store.dispatch("logout").then(() => {
        // this.$store.dispatch(""); !!! passar informação para o prepare local !!!!
        this.$swal({
          title: "Goodbye",
          text: "Loggin Out",
          icon: "success",
          timer: 1000
        });
        this.$router.push("/login").catch(err => {
          err;
        });
      });
    },

    registerLocation() {
      this.$store.dispatch("addLocation", {
        name: this.addLocations.name,
        address: this.addLocations.address,
        rating: this.addLocations.rating,
        tag: this.addLocations.tag
      });
    }
  },

  computed: {
    filteredUsers() {
      let users = this.users.filter(user => {
        return user.name.match(this.inputName);
      });
      return users;
    }
  }
};
</script>

<style scoped>
.row {
  background-color: grey;
}

.col-admin {
  color: white;
  background-color: black;
  height: 71rem;
}

.title {
  margin-left: 3rem;
  margin-top: 2rem;
}

.separation {
  color: white;
  stroke-width: 0.2rem;
  margin-left: 1rem;
  border: 1px solid white;
}
.separation2 {
  color: white;
  stroke-width: 0.2rem;
  margin-left: 1rem;
  margin-top: 2rem;
  border: 1px solid white;
}

.fa-user-circle {
  margin-top: 2rem;
  margin-left: 4rem;
}

.user-logged {
  font-size: 1.8rem;
  margin-left: 9rem;
  margin-top: -2.5rem;
}

.user-list {
  background-color: black;
  font-size: 1.8rem;
  margin-left: 1.2rem;
  margin-bottom: -7.5rem;
  border: none;
  width: 20rem;
  border-radius: 12px;
}
.user-list:hover {
  background-color: rgb(39, 131, 235);
  transition-duration: 0.4s;
}

.user-locations {
  background-color: black;
  font-size: 1.8rem;
  margin-left: 1.2rem;
  margin-top: 2rem;
  border: none;
  width: 20rem;
  border-radius: 12px;
}

.user-locations:hover {
  background-color: rgb(39, 131, 235);
  transition-duration: 0.4s;
}

.user-reviews {
  background-color: black;
  font-size: 1.8rem;
  margin-left: 1.2rem;
  margin-top: 2rem;
  border: none;
  width: 20rem;
  border-radius: 12px;
}

.user-reviews:hover {
  background-color: rgb(39, 131, 235);
  transition-duration: 0.4s;
}

.fa-address-book {
  margin-top: 1rem;
  margin-left: -12rem;
}

.user-placeholder {
  margin-left: 8 2rem;
  margin-top: -3rem;
}

.locations-placeholder {
  margin-left: 3.5rem;
  margin-top: -3rem;
}

.fa-map-marker {
  margin-top: 1rem;
  margin-left: -12rem;
}

.fa-comments {
  margin-top: 0.5rem;
  margin-left: -12rem;
}

.user-table {
  margin: 0 auto;
  height: 25rem;
  max-width: 75%;
}
.container {
  padding-top: 10rem;
  border-radius: 12px;
  background-color: white;
  margin-top: 5rem;
  height: 60rem;
}
.user-logout {
  background-color: black;
  font-size: 1.8rem;
  margin-left: 1.2rem;
  margin-top: 2rem;
  border: none;
  width: 20rem;
  border-radius: 12px;
}
.user-logout:hover {
  background-color: rgb(39, 131, 235);
  transition-duration: 0.4s;
}

.fa-sign-out {
  margin-top: 0.5rem;
  margin-left: -12rem;
}

th {
  font-size: 2rem;
  font-weight: bold;
}

tr {
  text-align: center;
  font-size: 1.5rem;
}

.modal {
    position: absolute;
    z-index: 100;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 80%;
    height: 80%;
    border-radius: 50px;
}
</style>