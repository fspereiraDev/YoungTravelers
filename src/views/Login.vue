<template>
  <div class="container-fluid">
    <div class="form fadeInDown" id="formContent">
      <!-- Icon -->
      <div class="icon">
        <img src="../assets/logo.png" id="icon" alt="User Icon" width="100px" height="200px" />
      </div>

      <!-- Login Form -->
      <form @submit.prevent="login">
        <input
          type="text"
          id="logEmail"
          class="fadeIn second"
          name="email"
          placeholder="Email"
          v-model="loginInput.email"
        />
        <input
          type="password"
          id="logPassword"
          class="fadeIn third"
          name="password"
          placeholder="Password"
          v-model="loginInput.password"
        />
        <input type="submit" class="fadeIn fourth" value="Log In" @submit="login" />
      </form>

      <!-- Remind Passowrd -->
      <div id="formFooter">
        <router-link to="/register" class="underlineHover">Don't have an account? Sign up here.</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      loginInput: {
        email: "",
        password: ""
      },
      users: this.$store.state.users
    };
  },
  created() {
    // console.log(this.users);
  },
  methods: {
    async login() {
      let email = this.loginInput.email;
      let password = this.loginInput.password;
      //console.log("Email: " + email + " & password: " + password);
      let loginConfirm = "";

      for (let i = 0; i < this.users.length; i++) {
        if (
          email == this.users[i].email &&
          password == this.users[i].password
        ) {
          await this.$store
            .dispatch("login", { email, password })
            .then(response => {
              loginConfirm = response.data;
              // this.$router.push("/home");
            })
            .catch(err => {
              loginConfirm = err.response.data;
              console.log(err.response.data);
            });

          if (loginConfirm != "Incorrect email or password.") {
            await this.$swal({
              title: "Welcome",
              text: "Login In",
              icon: "success",
              timer: 1000
            });
            this.$router.push("/");
          } else {
            await this.$swal({
              title: "ERROR",
              text: "Check your email or password",
              icon: "warning",
              timer: 1000
            });
          }
        }
      }
    }
  },
  computed: {
    ...mapGetters(["getUsers"])
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
  width: 90%;
  max-width: 450px;
  position: relative;
  -webkit-box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.1);
  text-align: center;
  margin-top: 8rem;
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
input[type="password"] {
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

input[type="text"]:focus,
input[type="password"]:focus {
  background-color: rgb(233, 233, 233);
  border-bottom: 2px solid #5fbae9;
}

input[type="text"]:placeholder {
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