<template>
  <div class="container">
    <LoginForm v-if="!isLogged" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  middleware: 'login',
  computed: {
    ...mapGetters({
      isLogged: 'isLogged'
    })
  }
};
</script>

<style>
</style>
