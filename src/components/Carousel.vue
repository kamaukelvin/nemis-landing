<template>
  <v-carousel v-model="model" :show-arrows="false" height="18.3rem">
    <v-carousel-item v-for="(image, i) in images" :key="i" height="100%">
      <div :style="{ backgroundImage: 'url(' + image + ')' }" class="banner">
        <v-container>
          <div class="banner__content">
            <h2>Welcome to <span>NEMIS</span></h2>
            <p>
              The National Education Management Information System is a
              web-based data management solution which collects data &
              Information from education institutions, processes and reports
              status.
            </p>
          </div>
        </v-container>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "CarouselComponent",
  props: {
    msg: String,
  },
  data: () => ({
    model: 0,
    images: ["/assets/images/banner.png"],
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.banner {
  background-size: cover;
  height: 100%;
  background-position: top;
}
.banner:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 59, 149, 0.6);
}
.banner__content {
  color: #fff;
  width: 40%;
  z-index: 2;
  position: relative;
  margin-top: 2rem;
}
.banner__content h2 {
  font-size: 55px;
  line-height: 1.2;
}
.banner__content span {
  color: #0cc160;
  font-style: italic;
}
.banner__content p {
  font-size: 1rem;
  opacity: 0.8;
}
.v-carousel__controls {
  background: transparent !important;
}

@media only screen and (max-width: 960px) {
  .banner__content {
    width: 55%;
  }
  .banner__content p {
    font-size: 14px;
    margin-top: 1rem;
  }
}
@media only screen and (max-width: 600px) {
  .banner__content {
    width: 100%;
  }
  .banner__content h2 {
    font-size: 35px;
  }
  .banner__content p {
    font-size: 14px;
    margin-top: 1rem;
  }
}
</style>