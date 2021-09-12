<template>
  <div class="container">
    <h2 class="title">JSON</h2>
    <textarea v-model="xmlString" readonly></textarea>
    <ul>
      <li><a href="/vue-up/example.json" target="_blank">Show document from browser</a></li>
      <li><NuxtLink to="/json/table">Tags</NuxtLink></li>
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
    const response = await getMLDocument('/example.json');
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
