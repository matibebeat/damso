<template>
  <div class="admin">
    <h1>This is an admin page</h1>
    <div class="admingrid">
      <div
        class="article"
        v-for="(article) in articles"
        :key="article.index"
        :style="{
          boxShadow:
            '0 0 7px ' +
            article.color +
            ', 0 0 10px ' +
            article.color +
            ', 0 0 20px ' +
            article.color,
        }"
      >
        <img :src="article.img" alt="" class="panier" />
        <div class="infos">
          <div class="tittle">
            <h3>{{ article.name }}</h3>
            <p :style="{ color: article.color }">{{ article.price }}€</p>
          </div>
          <p>{{ article.description }}</p>

        </div>
      </div>
    </div>
  </div>

</template>

<script>
import axios from "axios";
export default {
  name: "AdminView",
  data() {
    return {
      /*define an array of articles*/
      articles: [],
    };
  },
  mounted() {
    this.getArticles();
  },
  methods: {
    getArticles() {
      axios
        .get("http://localhost:4000/api/prods")
        .then((response) => {
          this.articles = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
}
</script>

<style scoped>

h1 {
  color: white;
}
.admin {
  padding: 0% 5%;
}
.admingrid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
}
img {
  width: 100%;
  height: 60%;
  object-fit: cover;
  border-radius: 20px 20px 0 0;
  margin-bottom: 0px;
  padding-bottom: 0px;
}
.article {
  background-color: rgba(0, 0, 0, 0.35);
  margin: 5%;
  border-radius: 20px;
  box-shadow:
    /* White glow */ 0 0 7px #ff6088, 0 0 10px #ff6088,
  0 0 20px #ff6088;
  height: 100%;
}
.article:hover {
  transform: scale(1.005);
  transition: all 0.1s ease-in-out;
}
.infos {
  margin-top: -5px;

  height: 40%;
  border-radius: 0 0 20px 20px;
  padding: 15px;
}
h3 {
  margin-top: 0px;
  color: white;
  font-size: 30px;
  margin-bottom: 0px;

  letter-spacing: 2px;
}
.tittle {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /*align the items in the center
  */
  align-items: center;
}
.tittle p {
  margin-top: 0px;

  font-size: 30px;
  margin-bottom: 0px;
}
p {
  color: white;
}
a {
  text-decoration: none;
}



</style>