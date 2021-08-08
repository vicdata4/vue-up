<template>
  <div class="container">
    Home view

    <button @click="logOut">Logout</button>
  </div>
</template>

<script>
import { deleteCookie } from '../components/utils/functions';

export default {
  middleware: "auth",
  methods: {
    logOut() {
      deleteCookie("XSRF-TOKEN");
      window.location.href = "/";
    },
  },
};
</script>

<style>
</style>
