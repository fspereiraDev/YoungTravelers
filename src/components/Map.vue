<template>
  <div>
    <gmap-map ref="gmap" :center="center" :zoom="5" style="width:80vh;  height: 60vh;">
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="toggleInfoWindow(m,index)"
      ></gmap-marker>

      <gmap-info-window
        :options="infoOptions"
        :position="infoWindowPos"
        :opened="infoWinOpen"
        @closeclick="infoWinOpen=false"
      >
        <div v-html="infoContent"></div>
      </gmap-info-window>
    </gmap-map>
  </div>
</template>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      //a default center for the map
      center: { lat: 48.0995395, lng: 4.152024 },
      map: null,
      infoContent: "",
      infoWindowPos: {
        lat: 0,
        lng: 0
      },
      infoWinOpen: false,
      currentMidx: null,
      //optional: offset infowindow so it visually sits nicely on top of our marker
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      },
      markers: [
        {
          name: "Hochschule Furtwangen University",
          description: "Partner of Esmad",
          date_build: "",
          position: { lat: 48.0513873, lng: 8.2054062 }
        },
        {
             name: "Escola Superiror de Media Artes e Design",
          description: "It is Esmad",
          date_build: "",
          position: { lat: 41.3668584, lng: -8.7404978 }
        },
      ]
    };
  },
  mounted() {
  },
  methods: {
    toggleInfoWindow: function(marker, idx) {
      this.infoWindowPos = marker.position;
      this.infoContent = this.getInfoWindowContent(marker);

      //check if its the same marker that was selected if yes toggle
      if (this.currentMidx == idx) {
        this.infoWinOpen = !this.infoWinOpen;
      }
      //if different marker set infowindow to open and reset current marker index
      else {
        this.infoWinOpen = true;
        this.currentMidx = idx;
      }
    },

    getInfoWindowContent: function(marker) {
      return `<div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="title is-4">${marker.name}</p>
      </div>
    </div>
    <div class="content">
      ${marker.description}
      <br>
      <time datetime="2016-1-1">${marker.date_build}</time>
    </div>
  </div>
</div>`;
    }
  }
};
</script>

<style>
</style>