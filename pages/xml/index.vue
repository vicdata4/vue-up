<template>
  <div class="container">
    XML example
    <textarea v-model="xmlString" readonly></textarea>
    <a href="/books.xml" target="_blank">Show document from browser</a>
    <NuxtLink to="/xml/table">Table representation</NuxtLink>
  </div>
</template>

<script>
import { getXMLFile } from "@/components/utils/functions";

export default {
    data() {
    return {
      xmlString: '',
    };
  },

  async created() {
    const response = await getXMLFile('/books.xml');
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
