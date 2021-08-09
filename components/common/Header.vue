<template>
  <header>
    <div>
      <NuxtLink to="/" class="header-link">Vue App v1.0</NuxtLink>
    </div>
    <div>
      <NuxtLink to="app" class="header-link">App</NuxtLink>
      <button v-if="isLogged" @click="logOut">Logout</button>
    </div>
  </header>
</template>

<script>
import { deleteCookie } from "/components/utils/functions";
import { mapGetters, mapActions } from 'vuex';

export default {
  methods: {
    logOut() {
      deleteCookie("XSRF-TOKEN");
      window.location.href = "/";
    },
  },
  computed: {
    ...mapGetters({
      isLogged: 'isLogged'
    })
  }
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

.header-link {
  color: white;
}
</style>
