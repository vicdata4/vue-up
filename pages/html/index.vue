<template>
  <div class="container">
    <h2 class="title">HTML</h2>
    <textarea v-model="xmlString" readonly></textarea>
    <ul>
      <li><a href="/vue-up/example.html" target="_blank">Show document from browser</a></li>
      <li><NuxtLink to="/html/tags">Tags</NuxtLink></li>
      <li><NuxtLink to="/form">Learn about html form tag</NuxtLink></li>
    </ul>
  </div>
</template>

<script>
import { getMLDocument } from "@/components/utils/functions";

export default {
    data() {
    return {
      xmlString: '',
    };
  },

  async created() {
    const response = await getMLDocument('/example.html');
    this.xmlString = response.xmlString;
  },
};
</script>

<style scoped>

textarea {
  width: 100%;
  height: 400px;
  resize: none;
}
</style>
