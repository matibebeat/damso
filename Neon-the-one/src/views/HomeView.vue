<script setup>
import TheWelcome from "../components/TheWelcome.vue";
</script>

<template>
  <main>
    <h1>
      Customize your unique <br />
      neon
    </h1>
    <button class="neonbutton">Customize your own</button>
    <img src="../assets/Can-Neon-Lights-Explode.jpg" alt="" />
    <section class="first">
      <h2>Our shop</h2>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
        corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
        voluptas nulla pariatur?
      </p>
    </section>
    <section class="second">
      <h2>Our team</h2>
      <div class="wrapper">
        <div class="profile">
          <h3>Youness</h3>
          <p>
            iste natus error sit voluptatem accusantium doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
            quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
            voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            consequuntur magni dolores eos qui ratione voluptatem sequi
            nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
            amet, consectetur, adipisci velit, sed quia non numquam eius modi
            tempora incidunt ut labore et dolore magnam aliquam quaerat
            voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
            ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
            consequatur? Quis autem vel eum iure reprehenderit qui in ea
            voluptate velit esse quam nihil molestiae consequatur, vel illum qui
            dolorem eum fugiat quo voluptas nulla pariat
          </p>
        </div>
        <div class="profile">
          <h3>Damien</h3>
          <p>
            quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
            voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            consequuntur magni dolores eos qui ratione voluptatem sequi
            nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
            amet, consectetur, adipisci vellit, sed quia non numquam eius modi
            tempora incidunt ut labore et dolore magnam aliquam quaerat
            voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
            ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
            consequatur? Quis autem vel eum iure reprehenderit qui in ea
            voluptate velit esse quam nihil molestiae consequatur, vel illum qui
            dolorem eum fugiat quo voluptas nullanim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis
          </p>
        </div>
      </div>
    </section>
  </main>
</template>
<style scoped>
h1 {
  margin-top: 0px;
  padding-top: 10%;
  margin-left: 10%;
  font-size: 70px;
  font-family: "Tilt Neon", sans-serif;
  color: white;
}
img {
  width: 50%;
  height: 50%;
  position: absolute;
  bottom: 0;
  right: 0;
  object-fit: cover;
  z-index: 1;
}
main {
  background-color: black;
  margin: 0px;
}
button {
  background: none;
  border: none;
  color: #ff6088;
  margin-left: 10%;
  margin-top: 5%;
  font-size: 30px;
  border: 2px solid #ff6088;
  padding: 10px 30px;
  text-shadow:
    /* White glow */ 0 0 7px #ff6088, 0 0 10px #ff6088;
  box-shadow: 
    /* White glow */ 0 0 7px #ff6088, 0 0 10px #ff6088;
}
button:hover {
  color: white;
  transform: scale(1.1);
  transition: all 0.1s ease-in-out;
}
.first {
  margin-top: 20%;
  background-color: #222222;
  padding: 10%;
}
.second {
  background-color: #222222;
  padding: 10%;
}
h2 {
  color: #ff6088;
  font-size: 50px;
  font-family: "Tilt Neon", sans-serif;
}
p {
  color: white;
  font-size: 20px;
  font-family: "Tilt Neon", sans-serif;
  text-align: justify;
}
.wrapper {
  width: 90%;
  display: flex;
  flex-direction: row;
}
.profile {
  width: 70%;
  height: 100%;
  background-color: #ff6088;
  padding: 2%;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  margin:5px;
  font-family: "Tilt Neon", sans-serif;
  color: white;
}
</style>
