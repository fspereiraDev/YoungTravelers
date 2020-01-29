<template>
  <div class="profile">
    <NavBar></NavBar>
    <div class="container">
      <div class="col user-profile">
        <div class="row">
          <!-------------------------UTILIZADOR----------------------->
          <img
            class="user-image"
            src="../assets/13260158_1117762158265646_6591456049993627245_n.jpg"
          />
          <div class="user-info">
            <p class="user-name">
              <i class="fa fa-user icon"></i>
              {{userInfo.name}}
            </p>
            <p class="user-nationality">
              <i class="fa fa-flag icon"></i>
              {{userInfo.country}}
            </p>
            <p class="user-university">
              <i class="fa fa-university icon"></i>Escola Superior de Media Artes e Design
            </p>

            <!--AQUI POMOS SE É ESTUDANTE DE ERASMUS OU ESTUDANTE NORMAL-->
            <p class="user-erasmus">
              <i class="fa fa-globe icon"></i>Erasmus Student
            </p>
            <p class="user-course">
              <i class="fa fa-graduation-cap icon"></i>Tecnologias e Sistemas de Informação para a Web
            </p>
            <p class="user-email">
              <i class="fa fa-envelope icon"></i>filipe-pereira95@hotmail.com
            </p>
            <p class="user-password">
              <i class="fa fa-lock icon"></i>123456789
            </p>
          </div>
        </div>
        <div class="row">
          <!--ISTO VAI SER PARA METER O PROFILE OS ACHIVEMENTS RANKING E TUDO O QUE TEM HAVER COM O UTILIZADOR NUMA SÓ PÁGINA-->
          <b-tabs content-class="mt-4 " justified>
            <b-tab title="First" active>
              <p>I'm the first tab</p>
            </b-tab>
            <b-tab title="Second">
              <p>I'm the second tab</p>
            </b-tab>
            <b-tab title="Very">
              <p>I'm the tab with the very, very long title</p>
            </b-tab>
            <b-tab title="Disabled" disabled>
              <p>I'm a disabled tab!</p>
            </b-tab>
          </b-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import { mapState } from "vuex";

export default {
  name: "Profile",
  components: {
    NavBar
  },
  data() {
    return {
      users: "",
      userLog: "",
      userInfo: {}
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
  computed: mapState({
    getUsers: state => state.users
  })
};
</script>

<style scoped>
/*----------------------------------UTILIZADOR------------------------------------*/
.user-profile {
  background-color: white;
  border-radius: 0.5rem;
  height: 60rem;
}

.user-image {
  height: 20rem;
  margin-left: 5rem;
  margin-top: 4rem;

  border-radius: 10%;
}

.user-info {
  margin-left: 10rem;
  margin-top: 4rem;
}

.user-info p.user-name {
  font-size: 3rem;
  margin-left: 2rem;
}

.user-info p.user-course {
  font-size: 2rem;
  margin-left: 0.9rem;
  margin-top: 0.5rem;
}

.user-info p.user-nationality {
  font-size: 2rem;
  margin-left: 2rem;
  margin-top: 0.5rem;
}

.user-info p.user-university {
  font-size: 2rem;
  margin-left: 1.3rem;
  margin-top: 0.5rem;
}
.user-info p.user-erasmus {
  font-size: 2rem;
  margin-left: 2.5rem;
  margin-top: 0.5rem;
}
.user-info p.user-email {
  font-size: 2rem;
  margin-left: 2rem;
  margin-top: 0.5rem;
}
.user-info p.user-password {
  font-size: 2rem;
  margin-left: 3rem;
  margin-top: 0.5rem;
}

.icon {
  margin-right: 5rem;
  font-size: 4rem;
}
</style>