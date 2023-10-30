<template>
  <form @add="addProduct "  action="#">
    <div class="form-group">
      <label for="name">Name</label>
      <input
        type="text"
        class="form-control"
        id="name"
        v-model="article.name"
      />
    </div>
    <div class="form-group">
      <label for="price">Price</label>
      <input
        type="text"
        class="form-control"
        id="price"
        v-model="article.price"
      />
    </div>
    <div class="form-group">
      <label for="description">Description</label>
      <input
        type="text"
        class="form-control"
        id="description"
        v-model="article.description"
      />
    </div>
    <div class="form-group">
      <label for="color">Color</label>
      <input
        type="color"
        class="form-control"
        id="color"
        v-model="article.color"
      />
    </div>
    <div class="form-group">
      <label for="img">Image</label>
      <input
        type="text"
        class="form-control"
        id="img"
        v-model="article.img"
      />
    </div>
    <button type="add"  class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
export default {
  name: "AdminCreateView",
  data() {
    return {
      /*define an array of articles*/
      article : {
        name: "",
        price: "",
        description: "",
        color: "",
        img: "",
      },
    };
  },
  methods: {
    addProduct() {
      axios
        .post("http://localhost:4000/api/prods", this.article)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
}
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