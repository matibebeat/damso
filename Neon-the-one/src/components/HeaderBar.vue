<template>
  <div>

  <header class="header">
    <div class="wrapper">
      <h1>NEON</h1>
      <h2>The one</h2>
    </div>

    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/shop">Shop</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>

    <div class="wrapper_panier" @click="ShowPanier = !ShowPanier; updatePanier()">
      <img src="../assets/panier.png" alt="" class="panier" />
      <p>{{cart.length}} item</p>
    </div>

  </header>
    <div v-if="ShowPanier" class="panierPanel" >
      <div v-for="(item, index) in cart" :key="index" class="panierRow">
        <div>
          <p>{{item.name}}</p>
          <p>{{item.price}}€</p>
        </div>

        <p class="qty">{{item.qty}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HeaderBar",
  data() {
    return {
      ShowPanier: false,
    };
  },
  props: {
    cart: {
      type: Array,
      required: true,
    },
  },
  updated() {
    this.updatePanier();
  },
  methods: {
  updatePanier() {

    for (let i = 0; i < this.cart.length; i++) {
      axios.get('http://localhost:4000/api/prods/'+this.cart[i].article)
      .then(response => {
        console.log(response.data)
          this.cart[i].name = response.data[0].name;
          this.cart[i].price = response.data[0].price;

      })
    }


  },
  },

};
</script>

<style scoped>
.wrapper {
  font-family: "Tilt Neon", sans-serif;
  padding: 0 30px;
}

h1 {
  margin-bottom: 0px;
  font-size: 40px;
}

h2 {
  margin-top: 0px;
  color: #ff6088;
}

header {
  display: flex;
  flex-direction: row;
  justify-content: space-between; /* Add this line */
  border-bottom: 2px solid #9d9d9d;
  background-color: #222222;
  color: white;
  margin-bottom:0px;
}

.panier {
  width: 50px;
  height: 50px;
}
.panier:hover {
  transform: scale(1.2);
  transition: all 0.1s ease-in-out;
}

.wrapper_panier {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 20px;
  padding-left: 20px;
  width: 8%;
  background-color: #9d9d9d;
}
.wrapper_panier:hover {
  background-color: #ff6088;
  transition: all 0.1s ease-in-out;
}
.wrapper_panier:hover * {
  transform: scale(1.2);
  transition: all 0.1s ease-in-out;
}

nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 80%;
  color: white;
}

a {
  text-decoration: none;
  color: white;
  font-size: 20px;
  margin-right: 50px;
  margin-left: 50px;
}

a:hover {
  color: #ff6088;
  border-bottom: #ff6088 2px solid;
  transform: translate(0, -2px);
  transform: scale(1.15);
  transition: all 0.1s ease-in-out;
}
.panierPanel {
  width: 20%;
  height: 50%;
  position: absolute;
  right: 0;
  margin-right: 20px;
  margin-top: 10px;

  background-color: antiquewhite;
  overflow-y: scroll;



}
.panierRow{
  padding-right: 20px;
  padding-left: 20px;
  border-bottom: #222222 2px solid;
  display: flex;
  flex-direction: row ;
  justify-content: space-between;
  font-size: 34px;
}
.panierRow .qty{
  float: right;
}
</style>