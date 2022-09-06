<template>
  <div>
    <!-- mobile -->

    <Carousel />
    <div class="content">
      <v-container class="container">
        <v-row>
          <v-col
            cols="12"
            sm="12"
            md="12"
            lg="8"
            class="left order-last order-md-first"
          >
            <p>
              For School Managers or Head of Institutions, Register Institution
              for credibility
            </p>
            <v-row class="quick__links">
              <v-col cols="12" sm="6">
                <ul>
                  <li><a>Register an institution</a></li>
                  <li><a>What is NEMIS</a></li>
                  <li><a>Our Policies</a></li>
                  <li><a>How to Apply</a></li>
                </ul>
              </v-col>
              <v-col cols="12" sm="6">
                <ul>
                  <li><a>FAQ's</a></li>
                  <li><a>Application Forms</a></li>
                  <li><a>Schools/Institutions</a></li>
                  <li><a>Information Center</a></li>
                </ul>
              </v-col>
            </v-row>
            <v-card class="guide__card" max-width="344">
              <p>Download School Guide</p>
              <a class="download__button">
                <v-icon small color="white">mdi-arrow-down</v-icon></a
              >
            </v-card>
          </v-col>
          <v-col cols="12" sm="12" md="12" lg="4" class="right"
            >Login form goes here</v-col
          >
        </v-row>
      </v-container>
      <Footer />
    </div>
    <!-- </v-col>
    </v-row> -->
  </div>
</template>

<script>
import { Carousel, Footer } from "@/components";

export default {
  name: "LandingPage",
  components: {
    Footer,
    Carousel,
  },
  props: {
    msg: String,
  },
  data: () => ({
    items: [
      {
        title: "Register",
        subtitle: "An Institution",
        icon: "/assets/icons/discover.png",
        active: true,
        route: "/",
      },
      {
        title: "Learn",
        subtitle: "More About Us",
        icon: "/assets/icons/learn.png",
        route: "/learn",
      },
      {
        title: "Discover",
        subtitle: "Our Curriculum",
        icon: "/assets/icons/register.png",
        route: "/discover",
      },
      {
        title: "Engage",
        subtitle: "With School Managers...",
        icon: "/assets/icons/engage.png",
        route: "engage",
      },
    ],
  }),
};
</script>

<style scoped>
.left {
  padding: 3rem 1rem;
  color: #fff;

  font-size: 14px;
}
.content .left {
  border-right: 1px solid rgba(255, 255, 255, 0.4);
}
.quick__links {
  margin-top: 2rem;
}
.quick__links ul {
  border-top: 5px solid rgba(235, 243, 255, 0.1);
  padding: 2rem 1rem;
  list-style-type: none;
}
.quick__links ul li {
  margin: 1rem 0;
}
.quick__links ul li a {
  color: #fff;
  text-decoration: underline;
}
.guide__card {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  padding: 0.5rem;
  margin-top: 1.5rem;
}
.guide__card p {
  flex: 1;
  margin: 0;
  font-weight: 600;
}
.download__button {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #c4c4c4;
  padding: 0.7rem;
  border-radius: 6px;
  color: #fff;
}
/* .copyright {
  padding: 1rem 2rem;
  position: absolute;
  bottom: 0;
  left: 0;
}
.copyright p {
  margin-bottom: 0;
  font-size: 12px;
  color: #c4c4c4;
} */

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
  .left {
    padding: 1rem;
  }
  .quick__links ul {
    padding: 0.5rem 1rem;
  }
}
</style>
