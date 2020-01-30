<template>
  <div class="row">
    <div class="col col-lg-2 col-admin">
      <h1 class="title">Young Travelers</h1>
      <hr class="separation" />
      <i class="fa fa-user-circle fa-3x"></i>
      <p class="user-logged">John Doe</p>
      <hr class="separation2" />
      <button class="user-list">
        <i class="fa fa-address-book fa-2x"></i>
        <p class="user-placeholder">Users</p>
      </button>
       <button class="user-locations">
        <i class="fa fa-map-marker fa-2x"></i>
        <p class="locations-placeholder">Locations</p>
      </button>
      <button class="user-reviews">
        <i class="fa fa-comments fa-2x"></i>
        <p class="locations-placeholder">Reviews</p>
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style >
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
</style>