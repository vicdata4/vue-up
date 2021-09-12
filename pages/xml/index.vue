<template>
  <div class="container">
    XML example
    <textarea v-model="xmlString" readonly></textarea>
    <ul>
      <li><a href="/vue-up/books.xml" target="_blank">Show document from browser</a></li>
      <li><NuxtLink to="/xml/table">Table representation</NuxtLink></li>
      <li><NuxtLink to="/xml/schema">XML Schema</NuxtLink></li>
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
    const response = await getMLDocument('/books.xml');
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
