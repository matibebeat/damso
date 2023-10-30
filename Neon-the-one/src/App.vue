<script setup>
import { RouterLink, RouterView } from "vue-router";
import HeaderBar from "./components/HeaderBar.vue";
</script>

<template>
  <HeaderBar class="bar"/>

  <RouterView @AddToCart="console"/>
</template>

<style scoped>
.bar{
  margin-bottom:0px;
}
</style>
