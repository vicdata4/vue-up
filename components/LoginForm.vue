<template>
  <form @submit.prevent="submitForm">
    <input
      type="email"
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

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    submitForm: async function () {
      console.log({ email: this.email, password: this.password });
      const data = { email: this.email, password: this.password };

      if (this.email && this.password) {
        const response = await fetch(http.post(data), "/login");

        if (!response.error) {
          document.cookie = `XSRF-TOKEN=${response.accessToken}`;
          window.location.href = "/home";
        } else {
          alert("Invalid email or password");
        }
        //this.$emit("search-value", this.name);
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

form {
  padding: 20px;
}

.input-text {
  margin: 20px 0px;
}
</style>
