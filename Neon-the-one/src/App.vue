<script setup>
import { RouterLink, RouterView } from "vue-router";
import HeaderBar from "./components/HeaderBar.vue";


</script>

<template>
  <HeaderBar :user="user" class="bar" :cart="this.cart"/>

  <RouterView @AddToCart="purchase" :user="user"/>
</template>
<script>


import axios from "axios";

export default {
  components: {
    RouterLink,
    RouterView,
    HeaderBar,
  },
  data() {
    return {
      /*define a user object*/
      user: {
        name: "John Doe",
        id: 1,
        admin: false,
      },
      /*define an array of articles*/
      cart : [],
    };
  },
  methods: {
    purchase(article, qty) {
      /*if the article is already in the cart, increment the quantity*/
      for (let i = 0; i < this.cart.length; i++) {
        if (this.cart[i].article == article) {
          this.cart[i].qty += qty;
          return;
        }
      }

      this.cart.push({ article, qty });
    },
  },
};
</script>
<style scoped>
.bar{
  margin-bottom:0px;
}
</style>
