<template>
  <form @submit.prevent="submitForm">
    <input
      type="text"
      v-model="email"
      name="email"
      placeholder="email"
      class="input-text"
      required
    />
    <input
      type="password"
      v-model="password"
      name="password"
      placeholder="password"
      class="input-text"
      required
    />
    <button type="submit">Login</button>
  </form>
</template>

<script>
import fetch, { http } from "./utils/fetch.config";
import { emailValidator } from './utils/functions';

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    submitForm: async function () {
      const data = { email: this.email, password: this.password };

      if (emailValidator(this.email) && this.password) {
        this.$emit("submit-form", data);
      } else {
        console.log("Complete all fields");
      }
    },
  },
};
</script>

<style>
form > * {
  display: block;
}

.input-text {
  margin: 20px 0px;
}
</style>
