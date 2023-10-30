<template>
  <div
      class="article"
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
    <img :src="article.img" alt="" class="panier"/>
    <div class="infos">
      <form action="#">
        <div class="tittle">
          <input class='h' v-model="article.name">
          <input class="price" v-model="article.price" :style="{ color: article.color }">
        </div>
        <textarea class='desc' v-model="article.description"> </textarea>
      </form>

      <button
          @click="$emit('update-article'); this.deleteArticle();"
          :style="{
              boxShadow:
                '0 0 7px ' +
                article.color +
                ', 0 0 10px ' +
                article.color +
                ', 0 0 20px ' +
                article.color,
                borderColor: article.color,
                Hover: {
                  color: article.color,
                },
            }"
      >
        DELETE
      </button>

      <button
          @click="$emit('update-article'); this.updateArticle();"
          :style="{
              boxShadow:
                '0 0 7px ' +
                article.color +
                ', 0 0 10px ' +
                article.color +
                ', 0 0 20px ' +
                article.color,
                borderColor: article.color,
                Hover: {
                  color: article.color,
                },
            }"
      >
        MODIFY
      </button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: 'AdminArticle',
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      id : this.article._id,
    };
  },
  mounted() {
    console.log(this.article);
  },
  methods: {
    deleteArticle() {
      axios
          .delete("http://localhost:4000/api/prods/" + this.id)
          .then((response) => {
            console.log(response);
            alert("Article deleted");
          })
          .catch((error) => {
            console.log(error);
          });
    },
    updateArticle() {
      axios
          .put("http://localhost:4000/api/prods/" + this.id, {
            name: this.article.name,
            description: this.article.description,
            price: this.article.price,
            color: this.article.color,
            image: this.article.img,
          })
          .then((response) => {
            console.log(response);
            alert("Article updated");
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
  box-shadow: /* White glow */ 0 0 7px #ff6088, 0 0 10px #ff6088,
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
.desc{
  margin-top: 0px;
  color: white;
  font-size: 20px;
  margin-bottom: 0px;
  width: 100%;
  height: 100px;
  border: none;
  background: none;
}

.h {
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

.price{
  margin-top: 0px;

  font-size: 30px;
  margin-bottom: 0px;
  width: 100px;
}

p {
  color: white;
}

a {
  text-decoration: none;
}

button {
  float: right;
  background: none;
  border-radius: 10px;
  font-size: 30px;
  padding: 5px 15px;
  border: 2px solid #ff6088;
  box-shadow: /* White glow */ 0 0 2px #ff6088, 0 0 20px #ff6088;
  margin-bottom: 20px;
  color: white;
}

button:hover {
  background-color: rgba(255, 255, 255, 0.2);
  cursor: pointer;
}

input{
  border: none;
  background: none;
}


</style>