<template>
  <div class="container">
    <h4 class="title">XML File</h4>
    <textarea v-model="xmlString" readonly></textarea>
    <h4 class="title">Table representation</h4>
    <table>
      <tr>
        <th v-for="field in columns" :key="field">
          {{ field }}
        </th>
      </tr>
      <tr v-for="element in list" :key="element.author">
        <td v-for="field in columns" :key="field">
          {{ element.querySelector(field).innerHTML }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { getXMLFile } from "@/components/utils/functions";

export default {
  data() {
    return {
      list: [],
      columns: [
        'author',
        'title',
        'genre',
        'price',
        'publish_date',
        'description',
      ],
      xmlString: '',
    };
  },
  methods: {},
  async created() {
    const response = await getXMLFile('/books.xml');
    
    this.xmlString = response.xmlString;
    this.list = response.xmlList;
  },
};
</script>

<style scoped>
textarea {
  width: 100%;
  height: 400px;
  resize: none;
}

th,
tr {
  text-align: left;
}

th {
  color: grey;
}
</style>
