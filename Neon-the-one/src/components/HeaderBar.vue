<template>
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

    <div class="wrapper_panier">
      <img src="../assets/panier.png" alt="" class="panier" />
      <p>1 item</p>
    </div>
  </header>
</template>

<script>
export default {};
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
</style>