<template>
  <div class="container">
    <LoginForm class="login-case" v-if="!isLogged" />
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
import { mapGetters } from "vuex";

export default {
  middleware: "login",
  computed: {
    ...mapGetters({
      isLogged: "isLogged",
    }),
  },
};
</script>

<style scoped>
.login-case {
  margin-bottom: 20px;
}
</style>
