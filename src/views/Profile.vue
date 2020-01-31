<template>
  <div class="profile">
    <NavBar></NavBar>
    <div class="container">
      <div class="col user-profile">
        <div class="row">
          <img
            class="user-image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTpH7jSXXbe5rbih-yECBjQhEMkM-n5ux3xKc1UhWKeakqj2kTE"
          />

          <b-tabs content-class="mt-4 " justified>
            <b-tab class="profile-tab" title="Profile" active>
              <div class="row">
                <!-------------------------UTILIZADOR----------------------->

                <div class="user-info">
                  <p class="user-name">
                    Username:
                    {{userInfo.name}}
                  </p>
                  <hr>
                  <p class="user-nationality">
                    Country:
                    {{userInfo.country}}
                  </p>
                  <hr>
                  <p class="user-university">
                    University:{{userInfo.university}}
                  </p>
                  <hr>
                  
                  <p class="user-erasmus">
                    Erasmus University: {{userInfo.erasmus_university}}
                  </p>
                  <hr>
                  <p class="user-course">
                    Course:{{userInfo.course}}
                  </p>
                  <hr>
                  <p class="user-email">
                    Email: {{userInfo.email}}
                  </p>
                  <hr>
                </div>
              </div>
            </b-tab>
            <!-- <b-tab title="Prefered Spots" class="prefered-spots-tab" >
              <div class="row">
                <div class="col col-cards">
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

                <div class="col col-cards">
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
            </b-tab> -->
            <b-tab class="map-tab" title="Map">
              
             <google-map/>
             
            </b-tab>
          </b-tabs>
        </div>
      </div>
      
    </div>
    <Footer></Footer>
  </div>
</template>

     
<script>
import NavBar from "@/components/NavBar.vue";
import GoogleMap from "@/components/Map.vue";
import Footer from "@/components/Footer.vue";
import { mapState } from "vuex";

export default {
  name: "Profile",
  components: {
    NavBar,
    GoogleMap,
    Footer
  },
  data() {
    return {
      users: "",
      userLog: "",
      userInfo: {},

      //map code
      

    };
  },
  mounted() {
    // Get all users from the store
    this.users = this.getUsers;

    // Get user information from the token
    this.userLog = JSON.parse(localStorage.getItem("token"));
    console.log(this.userLog);

    // Object to receive all the user info
    this.userInfo = {
      name: "",
      country: "",
      university: "",
      erasmus_university: "",
      course: "",
      email: "",
      password: "",
      password2: "",
      tags: "",
      is_admin: ""
    };

    for (let i = 0; i < this.users.length; i++) {
      if (this.userLog.email == this.users[i].email) {
        console.log("MATCHED USER: " + JSON.stringify(this.users[i]));
        this.userInfo = {
          name: this.users[i].name,
          country: this.users[i].country,
          university: this.users[i].university,
          erasmus_university: this.users[i].erasmus_university,
          course: this.users[i].course,
          email: this.users[i].email,
          password: this.users[i].password,
          password2: this.users[i].password2,
          tags: this.users[i].tags,
          is_admin: this.users[i].is_admin
        };
        console.log("NAME USER: " + this.userInfo.name);
      }
    }
  },
  methods: {
  },
  computed: mapState({
    getUsers: state => state.users
  })
};
</script>
    

<style scoped>
/*----------------------------------UTILIZADOR------------------------------------*/

.user-profile {
  background-color: rgb(255, 255, 255);
  border-radius: 0.5rem;
  height: 60rem;
  box-shadow: 5px 5px 8px 5px #888888;
  margin-bottom: 2rem;
}

.user-image {
  height: 20rem;
  margin-left: 5rem;
  margin-top: 4rem;
  border-radius: 10%;
  box-shadow: 5px 5px 8px 5px #88888854;
}

.user-info {
  margin-left: 2rem;
  margin-top: 4rem;
}

.user-info p.user-name {
  font-size: 2rem;
  margin-left: 0.5rem;
}

.user-info p.user-course {
  font-size: 2rem;
  margin-left: 0.5rem;
  margin-top: 0.5rem;
}

.user-info p.user-nationality {
  font-size: 2rem;
  margin-left: 0.5rem;
  margin-top: 0.5rem;
}

.user-info p.user-university {
  font-size: 2rem;
  margin-left: 0.5rem;
  margin-top: 0.5rem;
}
.user-info p.user-erasmus {
  font-size: 2rem;
  margin-left: 0.5rem;
  margin-top: 0.5rem;
}
.user-info p.user-email {
  font-size: 2rem;
  margin-left: 0.5rem;
  margin-top: 0.5rem;
}
.user-info p.user-password {
  font-size: 2rem;
  margin-left: 0.5rem;
  margin-top: 0.5rem;
}

.icon {
  margin-right: 5rem;
  font-size: 4rem;
}

.tabs {
  max-width: 100rem;
  margin-top: 2rem;
  margin-left: 3rem;
}
.vue-map-container {
  height: 450px;
  width: 70rem;
}

.card {
  width: 20rem;
  height: 27rem;
}
.col-cards {
  display: block;
  margin: 0;
}
</style>