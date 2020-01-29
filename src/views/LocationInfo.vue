<template>
  <div>
    <NavBar></NavBar>

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
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";

export default {
  name: "LocationInfo",
  components: {
    NavBar
  }
};
</script>

<style scoped>
.jumbotron {
  display: block;
  margin: auto;
  width: 70%;
  background-image: url("https://ncultura.pt/wp-content/uploads/2016/01/lello1.jpg");
}

.header {
  align-content: center;
}
</style>