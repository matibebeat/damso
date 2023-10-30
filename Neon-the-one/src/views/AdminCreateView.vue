/* write a vue component with a form to create a new product
the form should not update the page
*/
// Path: Neon-the-one/src/views/AdminCreateView.vue

<script setup>
import axios from "axios";
</script>

<template>
  <form @submit.prevent="createArticle">
    <label for="name">Name</label>
    <input type="text" id="name" v-model="name" />
    <label for="description">Description</label>
    <input type="text" id="description" v-model="description" />
    <label for="price">Price</label>
    <input type="number" id="price" v-model="price" />
    <label for="color">Color</label>
    <input type="color" id="color" v-model="color" />
    <label for="img">Image</label>
    <input type="text" id="img" v-model="image" />
    <button type="submit">Create</button>
  </form>
</template>

<script>
export default {
  name: "AdminCreateView",
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    if (this.user.admin == false) {
      this.$router.push("/");
    }
  }
  ,
  data() {
    return {
      name: "",
      description: "",
      price: 0,
      color: "",
      image: "",
    };
  },
  methods: {
    createArticle() {
      if (this.color== "") {
        this.color = "#000000";
      }
      axios
        .post("http://localhost:4000/api/prods", {
          name: this.name,
          description: this.description,
          price: this.price,
          color: this.color,
          image: this.image,
        })
        .then((response) => {
          console.log(response);
          alert("Article created");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>



<style scoped>
 .form-group {
   margin-bottom: 20px;
 }

label {
  display: block;
  margin-bottom: 5px;
  font-size: 30px;
}

input {
  display: block;
  width: 80%;
  margin-left: 10%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type="color"] {
  width: 50px;
  height: 50px;
  padding: 0;
}

button {
  display: block;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

form {
  text-align: center;
  width: 50%;
  margin: 50px auto;
  background-color: #ff6088;
}

</style>
