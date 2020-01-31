<template>
  <div class="container-fluid">
    <div class="form fadeInDown" id="formContent">
      <!-- Icon -->
      <div class="fadeIn first">
        <img src="../assets/logotipo.png" id="icon" alt="User Icon" width="100px" height="200px" />
      </div>

      <!-- Register Form -->

      <form @submit.prevent="register">
        <div class="form-row">
          <div class="form-group col-md-12">
            <!-- <label>Name</label> -->
            <input
              type="text"
              class="form-control"
              v-model="formInput.name"
              placeholder="Name and Surname"
            />
          </div>

          <div class="form-group col-md-6">
            <!-- <label for>Email</label> -->
            <input type="email" class="form-control" v-model="formInput.email" placeholder="Email" />
          </div>
          <div class="form-group col-md-6">
            <!-- <label for>Password</label> -->
            <input
              type="password"
              class="form-control"
              v-model="formInput.password"
              placeholder="Password"
            />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <!-- <label for="inputCity">Country</label> -->
            <input
              type="text"
              class="form-control"
              v-model="formInput.country"
              placeholder="Country"
            />
          </div>
          <div class="form-group col-md-6">
            <!-- <label for="inputCity">Course</label> -->
            <input type="text" class="form-control" v-model="formInput.course" placeholder="Course" />
          </div>
          <div class="form-group col-md-6">
            <label for="inputState">Erasmus University</label>
            <select class="form-control-select" v-model="formInput.erasmus_university">
              <option selected>Choose...</option>
              <option value="Hochschule Furtwangen University">Hochschule Furtwangen University</option>
              <option value="Karel de Grote University College">Karel de Grote University College</option>
              <option
                value="Universidad Austral de Chile (UACh) - Faculty of Archictecture and Arts"
              >Universidad Austral de Chile (UACh) - Faculty of Archictecture and Arts</option>
              <option
                value="Josip Juraj Strossmayer University of Osijek - Unios"
              >Josip Juraj Strossmayer University of Osijek - Unios</option>
              <option value="Universidad Complutense de Madrid">Universidad Complutense de Madrid</option>
              <option value="Universidad Antonio de Nebrija">Universidad Antonio de Nebrija</option>
              <option
                value="University of Las Palmas de Gran Canaria (ULPGC)"
              >University of Las Palmas de Gran Canaria (ULPGC)</option>
              <option
                value="University of Zaragoza - School of Engineering and Architecture "
              >University of Zaragoza - School of Engineering and Architecture</option>
              <option
                value="Escuela de Arte y Superior de Diseño - EASD Segovia"
              >Escuela de Arte y Superior de Diseño - EASD Segovia</option>
              <option value="Vilnius College of Design">Vilnius College of Design</option>
              <option
                value="Kauno Kolegija University of Applied Sciences"
              >Kauno Kolegija University of Applied Sciences</option>
              <option
                value="Vilnius Gediminas Technical University"
              >Vilnius Gediminas Technical University</option>
              <option value="University of Silesia in Katowice">University of Silesia in Katowice</option>
              <option
                value="University of Szczecin - Faculty of Economics and Management"
              >University of Szczecin - Faculty of Economics and Management</option>
              <option
                value="Lodz University of Technology - Faculty od Electrical, Electronic, Computer and Control Engineering"
              >Lodz University of Technology - Faculty od Electrical, Electronic, Computer and Control Engineering</option>
              <option value="Bialystok University of Technology">Bialystok University of Technology</option>
              <option value="Cracow University of Technology">Cracow University of Technology</option>
              <option
                value="Akademia Sztuk Pieknich im Jana Matejki w Krakowie"
              >Akademia Sztuk Pieknich im Jana Matejki w Krakowie</option>
              <option value="Niversitatea Din Craiova">Niversitatea Din Craiova</option>
              <option value="Yasar Universitesi">Yasar Universitesi</option>
              <option value="Dicle University">Dicle University</option>
            </select>
          </div>
          <div class="form-group col-md-6">
            <label for>University</label>
            <select class="form-control-select" v-model="formInput.university">
              <option
                value="Escola Superior de Media Artes e Design"
              >Escola Superior de Media Artes e Design</option>
            </select>
          </div>
        </div>

        <input type="submit" class="fadeIn fourth" value="Sign Up" @submit="register" />
        <div id="formFooter">
          <router-link to="/login" class="underlineHover">Already have an account? Log in here.</router-link>
        </div>
      </form>
    </div>
    <!-- Remind Passowrd -->
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      formInput: {
        id: this.$store.getters.getLastId,
        name: "",
        country: "",
        university: "",
        erasmus_university: "",
        course: "",
        email: "",
        password: ""
        // password2: "",
        // tags: ""
      }
    };
  },
  methods: {
    register: function() {
      let user = {
        name: this.formInput.name,
        country: this.formInput.country,
        university: this.formInput.university,
        erasmus_university: this.formInput.erasmus_university,
        course: this.formInput.course,
        email: this.formInput.email,
        password: this.formInput.password,
        // password2: this.password2,
        user_type: 2
      };
      console.log(user);
      this.$store
        .dispatch("register", user)
        .then(
          () => this.$router.push("/login"),
          localStorage.setItem(
            "users",
            JSON.stringify(this.$store.getters.getUsers)
          )
        )
        .catch(err => console.log(err));
    },
    getLastId() {
      return this.series.length ? this.series[this.series.length - 1].id : 0;
    }
  }
};
</script>

<style scoped>
a {
  color: #92badd;
  display: inline-block;
  text-decoration: none;
  font-weight: 400;
}

label {
  color: white;
}
/* STRUCTURE */
.container-fluid {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 80rem;
  background-image: url("../assets/backg.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: 100%;
}

#formContent {
  -webkit-border-radius: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 10px;
  background: rgb(126, 126, 126, 0.2);
  padding: 30px;
  width: 600px;
  /* max-width: 450px; */
  position: relative;
  -webkit-box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.1);
  text-align: center;
  margin-top: 5rem;
}

#formFooter {
  background-color: rgb(126, 126, 126, 0.2) !important;
  /* border-top: 1px solid #f3f3f3; */
  border: none;
  padding: 25px;
  text-align: center;
  -webkit-border-radius: 0 0 10px 10px;
  border-radius: 0 0 10px 10px;
}

/* FORM TYPOGRAPHY*/
input[type="button"],
input[type="submit"],
input[type="reset"] {
  background-color: #56baed;
  border: none;
  color: white;
  padding: 15px 80px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  font-size: 13px;
  -webkit-box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);
  box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
  margin: 5px 20px 40px 20px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

input[type="button"]:hover,
input[type="submit"]:hover,
input[type="reset"]:hover {
  background-color: #39ace7;
}

input[type="button"]:active,
input[type="submit"]:active,
input[type="reset"]:active {
  -moz-transform: scale(0.95);
  -webkit-transform: scale(0.95);
  -o-transform: scale(0.95);
  -ms-transform: scale(0.95);
  transform: scale(0.95);
}

input[type="text"],
input[type="password"],
input[type="email"] {
  background-color: #e2e2e2;
  border: none;
  color: #0d0d0d;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5px;
  width: 100%;
  /* border: 1px solid #f6f6f6; */
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
}

.form-control-select {
  background-color: #e2e2e2;
  border: none;
  color: #0d0d0d;
  padding: 5px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5px;
  width: 100%;
  /* border: 1px solid #f6f6f6; */
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
}

input[type="text"]:focus,
input[type="password"]:focus {
  background-color: rgb(233, 233, 233);
  border-bottom: 2px solid #5fbae9;
}

input[type="text"]:placeholder,
input[type="email"]:placeholder {
  color: #cccccc;
}

.underlineHover:after {
  display: block;
  left: 0;
  bottom: -10px;
  width: 0;
  height: 2px;
  background-color: #56baed;
  content: "";
  transition: width 0.2s;
}

.underlineHover:hover {
  color: #0d0d0d;
}

.underlineHover:hover:after {
  width: 100%;
}

#icon {
  width: 50%;
}
</style>