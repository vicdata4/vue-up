<template>
  <header>
    <div>Vue Up</div>
    <div>
      <NuxtLink to="home">Home</NuxtLink>
      <button @click="logOut">Logout</button>
      <span>v1.0</span>
    </div>
  </header>
</template>

<script>
import { deleteCookie } from "/components/utils/functions";

export default {
  methods: {
    logOut() {
      deleteCookie("XSRF-TOKEN");
      window.location.href = "/";
    },
  },
};
</script>


<style>
header {
  display: flex;
  justify-content: space-between;

  background-color: #24292e;
  width: 100%;
  padding: 20px 30px;
  color: white;
}
</style>
