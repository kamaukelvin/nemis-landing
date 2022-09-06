<template>
  <v-app>
    <NavbarMobile />
    <v-row no-gutters>
      <v-col cols="12" sm="12" md="12" lg="2" class="sidebar">
        <Sidebar />
      </v-col>
      <v-col cols="12" sm="12" md="12" lg="10">
        <router-view />
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import { Sidebar, NavbarMobile } from "@/components";

export default {
  components: {
    Sidebar,
    NavbarMobile,
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
.content {
  background: #003b95;
  height: 100%;
}

nav a {
  text-decoration: none;
}

/* media queries */
@media only screen and (max-width: 1024px) {
  .sidebar {
    display: none;
  }
}
@media only screen and (max-width: 960px) {
  .sidebar {
    display: none;
  }
}
@media only screen and (max-width: 600px) {
  .sidebar {
    display: none;
  }
}
</style>
