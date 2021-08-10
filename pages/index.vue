<template>
  <div class="container">
    <LoginForm class="login-case" v-if="!isLogged" @submit-form="submitForm" />
    <div>
      <h2>Componentes</h2>
      <Modal>
        <button slot="button">Modal Example</button>
        <div slot="content">
          Content
          <button class="close">Close</button>
        </div>
      </Modal>
      <Modal>
        <button slot="button">Modal Example 22222</button>
        <div slot="content">
          Content 22222
          <button class="close">Close2</button>
        </div>
      </Modal>
    </div>
  </div>
</template>

<script>
import fetch, { http } from "@/components/utils/fetch.config";
import { mapGetters } from "vuex";

export default {
  middleware: 'login',
  methods: {
    async submitForm(data) {
      const response = await fetch(http.post(data), '/login');

        if (!response.error) {
          document.cookie = `XSRF-TOKEN=${response.accessToken}`;
          window.location.href = '/app';
        } else {
          alert('Invalid email or password');
        }
    }
  },
  computed: {
    ...mapGetters({
      isLogged: 'isLogged',
    }),
  },
};
</script>

<style scoped>
.login-case {
  margin-bottom: 20px;
}
</style>
