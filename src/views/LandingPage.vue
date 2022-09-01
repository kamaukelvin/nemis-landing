<template>
  <div>
    <!-- mobile -->
    <NavbarMobile />

    <!-- mobile end -->

    <v-row no-gutters>
      <v-col cols="12" sm="12" md="12" lg="2" class="sidebar">
        <v-list-item class="menu__header">
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              <v-img
                src="/assets/images/shield.png"
                class="shield"
                contain
                max-height="95"
                max-width="250"
              />
            </v-list-item-title>
            <v-list-item-subtitle class="header__subtitle">
              REPUBLIC OF KENYA
            </v-list-item-subtitle>
            <v-list-item-subtitle class="header__subtitle">
              MINISTRY OF EDUCATION
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <div class="menu__content">
          <ul class="menu">
            <li
              class="menu__item"
              :class="item.active && 'active'"
              v-for="item in items"
              :key="item.title"
            >
              <div class="menu__item__content" :class="item.active && 'active'">
                <div><img :src="item.icon" /></div>
                <div class="menu__title">
                  <h5>{{ item.title }}</h5>
                  <small>{{ item.subtitle }}</small>
                </div>
              </div>
            </li>
          </ul>
          <div class="copyright">
            <p>© 2022 All Rights Reserved</p>
            <p>nemis@education.go.ke</p>
          </div>
        </div>
      </v-col>
      <v-col cols="12" sm="12" md="12" lg="10">
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
                  For School Managers or Head of Institutions, Register
                  Institution for credibility
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
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { Carousel, Footer, NavbarMobile } from "../components";

export default {
  name: "LandingPage",
  components: {
    NavbarMobile,
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
      },
      {
        title: "Learn",
        subtitle: "More About Us",
        icon: "/assets/icons/learn.png",
      },
      {
        title: "Discover",
        subtitle: "Our Curriculum",
        icon: "/assets/icons/register.png",
      },
      {
        title: "Engage",
        subtitle: "With School Managers...",
        icon: "/assets/icons/engage.png",
      },
    ],
  }),
};
</script>

<style scoped>
.content {
  background: #003b95;
}
.menu__header {
  background: #19a0fb;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3.7rem 0;
}
.shield {
  margin-bottom: 1rem;
}
.menu__header .header__subtitle {
  font-size: 12px;
  text-align: center;
  color: #fff !important;
  padding: 0.1rem 0;
}
.v-list-item__content :nth-child(2) {
  opacity: 0.7;
}
.v-list-item__content :nth-child(3) {
  font-weight: bold;
}
.menu__content ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.menu__item {
  border-bottom: 1px solid rgba(0, 59, 149, 0.3);
  padding: 1.6rem 0;
  position: relative;
}
.menu__item.active {
  background: #e4e4e4;
  border-bottom: none;
}
.menu__item.active:before {
  position: absolute;
  content: "";
  color: rgba(0, 59, 149);
  width: 0;
  height: 0;
  right: 0;
  top: 33.3%;
  border-top: 12px solid transparent;
  border-right: 25px solid rgba(0, 59, 149);
  border-bottom: 12px solid transparent;
}
.menu__item.active:after {
  position: absolute;
  content: "";
  width: 60%;
  height: 0;
  left: 10%;
  bottom: 0;

  border-bottom: 4px solid rgba(0, 59, 149);
}
.menu__item__content {
  display: flex;
  align-items: center;
  justify-content: start;
  width: 80%;
  margin: 0 auto;
}
.menu__item__content > div:first-of-type {
  background: #fff;
  padding: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px 0 0;
  border-radius: 4px;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.05);
}
.menu__title {
  margin-top: 10px;
}

.menu__item__content img {
  max-height: 50px;
}
.menu__item__content h5 {
  color: rgba(0, 59, 149);
  line-height: 0.6 !important;
}
.menu__item__content small {
  color: rgba(0, 59, 149, 0.4);
}
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
  padding: 1.5rem 1rem;
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
.copyright {
  padding: 1rem 2rem;
  position: absolute;
  bottom: 0;
  left: 0;
}
.copyright p {
  margin-bottom: 0;
  font-size: 12px;
  color: #c4c4c4;
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
  .left {
    padding: 1rem;
  }
}
</style>
