<template>
  <v-app>
    <LandingPage />
  </v-app>
</template>

<script>
import LandingPage from "./views/LandingPage.vue";

export default {
  name: "App",
  components: {
    LandingPage,
  },
};
</script>

<style>
@font-face {
  font-family: Nexa;
  src: url("./assets/fonts/nexa/NexaRegular.otf") format("opentype");
}

.v-application {
  font-family: Nexa !important;
}
.v-carousel__controls {
  background: transparent !important;
}
</style>