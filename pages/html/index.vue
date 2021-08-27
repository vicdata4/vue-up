<template>
  <div class="container">
    HTML example
    <textarea v-model="xmlString" readonly></textarea>
    <a href="/example.html" target="_blank">Show document from browser</a>
    <NuxtLink to="/html/tags">Tags</NuxtLink>
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
    const response = await getXMLFile('/example.html');
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
