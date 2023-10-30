<template>
  <div class="admin">
    <h1>This is an admin page</h1>
    <div class="admingrid">
      <AdminArticle v-for="(article) in articles"  :key="article._id" :article="article"  @update-article="this.getArticles();"/>
    </div>
  </div>

</template>

<script>
import axios from "axios";
import AdminArticle from "@/views/AdminArticle.vue";

export default {
  name: "AdminView",
  components: {AdminArticle},
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      /*define an array of articles*/
      articles: [],
    };
  },
  mounted() {
    if (this.user.admin == false) {
      this.$router.push("/");
    }
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
    supr(id) {
      axios
          .delete("http://localhost:4000/api/prods/" + id)
          .then((response) => {
            console.log(response);
            alert("Article deleted");
          })
          .catch((error) => {
            console.log(error);
          });
      /*update the articles array*/
      this.getArticles();
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

h3 {
  margin-top: 0px;
  color: white;
  font-size: 30px;
  margin-bottom: 0px;

  letter-spacing: 2px;
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

button {
  float: right;
  background: none;
  border-radius: 10px;
  font-size: 30px;
  padding: 5px 15px;
  border: 2px solid #ff6088;
  box-shadow:
    /* White glow */ 0 0 2px #ff6088, 0 0 20px #ff6088;
  margin-bottom: 20px;
  color: white;
}
button:hover {
  background-color: rgba(255, 255, 255, 0.2);
  cursor: pointer;
}

P{

}

</style>