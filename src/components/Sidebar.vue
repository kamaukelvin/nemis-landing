<template>
  <div>
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
      <nav class="menu">
        <router-link
          class="menu__item"
          :to="item.route"
          v-for="item in items"
          :key="item.title"
          :class="item.active && 'active'"
        >
          <div class="menu__item__content" :class="item.active && 'active'">
            <div><img :src="item.icon" /></div>
            <div class="menu__title">
              <h5>{{ item.title }}</h5>
              <small>{{ item.subtitle }}</small>
            </div>
          </div>
        </router-link>
      </nav>
      <!-- <div class="copyright">
        <p>© 2022 All Rights Reserved</p>
        <p>nemis@education.go.ke</p>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",

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
        route: "/engage",
      },
    ],
  }),
};
</script>

<style scoped>
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


.menu__item {
  border-bottom: 1px solid rgba(0, 59, 149, 0.3);
  padding: 1.6rem 0;
  position: relative;
  display: block;
}
nav a.router-link-exact-active {
  background: #e4e4e4;
  border-bottom: none;
}
nav a.router-link-exact-active:before {
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
nav a.router-link-exact-active:after {
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
</style>