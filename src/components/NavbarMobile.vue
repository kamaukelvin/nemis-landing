<template>
  <div class="mobile__menu">
    <v-app-bar dense elevation="1" color="#fff">
      <!-- <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(0,59,149,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template> -->

      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <!-- <v-app-bar-title>Welcome to Nemis</v-app-bar-title> -->

      <v-spacer></v-spacer>

      <!-- <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn> -->
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute left temporary>
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

      <v-divider></v-divider>
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
              <div>
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
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "NavbarMobile",
  props: {
    msg: String,
  },
  data: () => ({
    drawer: false,

    group: null,
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

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style scoped>
/* mobile menu styles */
.menu__header {
  background: #19a0fb;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.6rem 0;
}
.menu__header .header__subtitle {
  font-size: 10px;
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

.shield {
  margin-bottom: 1rem;
}
.list-icon {
  max-height: 50px;
}
.menu__content {
  display: flex;
  flex-direction: column;
}
.menu__content ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
  flex: 1;
}
.menu__item {
  border-bottom: 1px solid rgba(0, 59, 149, 0.3);
  padding: 1rem 0;
  position: relative;
}
.menu__item.active {
  background: #e4e4e4;
  border-bottom: none;
}
/* .menu__item.active:before {
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
} */
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

.mobile__menu {
  display: none;
}

@media only screen and (max-width: 960px) {
  .mobile__menu {
    display: block;
  }
}
</style>
