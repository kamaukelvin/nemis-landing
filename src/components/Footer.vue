<template>
  <div class="footer">
    <v-container>
      <ul>
        <li><a>Ministry of Education</a></li>
        <li>/</li>
        <li><a>COVID 19 Measures</a></li>
        <li>/</li>
        <li><a>Info Center</a></li>
        <li>/</li>
        <li><a>FAQ's</a></li>
        <li>/</li>
        <li><a>Institutions</a></li>
      </ul>
      <div class="social__icons">
        <a><v-icon small color="white">mdi-facebook</v-icon></a>
        <a><v-icon small color="white">mdi-twitter</v-icon></a>
        <a><v-icon small color="white">mdi-youtube</v-icon></a>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "FooterComponent",

  data: () => ({}),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
  border-top: 1px solid rgba(255, 255, 255, 0.4);

  padding: 2rem 0;
}
.footer > div:first-of-type {
  display: flex;
  align-items: center;
  justify-content: center;
}
.footer ul {
  list-style-type: none;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: start;
}
.footer ul li {
  margin: 0 0.5rem;
  color: #fff;
}
.footer ul li a {
  color: #fff;
  font-size: 12px;
}
.social__icons {
  display: flex;
  align-items: center;
  justify-content: center;
}
.social__icons > a {
  height: 40px;
  width: 40px;
  background: #0c73e4;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: #fff;
  margin-right: 1rem;
}

@media only screen and (max-width: 600px) {
  .footer {
    padding: 1rem 0;
  }
  .footer > div:first-of-type {
    display: flex;
    align-items: start;
    justify-content: start;
  }
  .footer ul {
    list-style-type: none;
    flex-direction: column;
    display: flex;
    align-items: start;
    justify-content: start;
    padding-left: 0;
  }
  .footer ul li:nth-child(even) {
    display: none;
  }

  .social__icons > a {
    height: 30px;
    width: 30px;
  }
}
</style>