<script>
import axios from "axios";
import InputComponent from "@/components/InputComponent.vue";
export default {
  name: "RegisterView",
  components: {InputComponent},
  data() {
    return {
      user: {
        name: "",
        password: "",
        email : "",
      },

    };
  },
  methods: {
    register() {
      axios.post('http://localhost:4000/api/register', this.user)
      .then(response =>
        {
          console.log(response.data)
          if(response.status == 201){
            alert("User created")
            this.$router.push({name: 'login'})
          }
        }
      ).catch(error => {
        console.log(error)
      })
    }

}
}

</script>

<template>
  <div class="register">
    <h1>Register</h1>
    <form action="#">
      <InputComponent name="Username" v-model="user.name" />
      <InputComponent name="Password" type="password" v-model="user.password" />
      <InputComponent name="Email" type="email" v-model="user.email" />
      <button @click="register">Register</button>
    </form>
  </div>
</template>

<style scoped>
.register {
  padding: 0% 5%;
}
form{
  width: 30%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ff6088;
  padding: 5% 2%;
}
h1{
  color: white;
  text-align: center;
  font-size: 56px;
}
button{
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-top: 50px;
  margin-bottom: 10px;
  box-sizing: border-box;
  background-color: #1f1f1f;
  color: #ff6088;
  font-size: 20px;
}
button:hover{
  background-color: #ff6088;
  color: white;
  transition: all 0.1s ease-in-out;
}
</style>