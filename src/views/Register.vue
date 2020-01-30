<template>
  <div class="wrapper fadeInDown">
    <div id="formContent">
      <!-- Icon -->
      <div class="fadeIn first">
        <img src="../assets/logo.png" id="icon" alt="User Icon" width="100px" height="200px" />
      </div>

      <!-- Register Form -->
      <form @submit.prevent="register">
        <input
          type="text"
          id="regName"
          class="fadeIn second"
          name="name"
          placeholder="Nome e sobrenome"
          v-model="name"
        />
        <input
          type="email"
          id="regEmail"
          class="fadeIn second"
          name="email"
          placeholder="Email"
          v-model="email"
        />
        <input
          type="text"
          id="regPassword"
          class="fadeIn third"
          name="password"
          placeholder="Password"
          v-model="password"
        />
        <input type="submit" class="fadeIn fourth" value="Sign Up" @submit="register" />
      </form>

      <!-- Remind Passowrd -->
      <div id="formFooter">
        <router-link to="/login" class="underlineHover">Already have an account? Log in here.</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      name: "",
      // country: "",
      // university: "",
      // course: "",
      email: "",
      password: ""
      // password2: "",
      // tags: ""
    };
  },
  methods: {
    register: function() {
      let user = {
        name: this.name,
        // country: this.country,
        // university: this.university,
        // course: this.course,
        email: this.email,
        password: this.password
        // password2: this.password2,
        // is_admin: this.is_admin
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
    }
  }
};
</script>

<style scoped>
@import "../assets/sass/register.scss";
</style>