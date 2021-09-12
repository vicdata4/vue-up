<template>
  <div class="container">
    <h4 class="title">JSON File</h4>
    <table>
      <tr>
        <th v-for="field in columns" :key="field">
          {{ field }}
        </th>
      </tr>
      <tr v-for="element in list" :key="element.author">
        <td v-for="field in columns" :key="field">
          {{ element[field] }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { getMLDocument } from "@/components/utils/functions";

export default {
  data() {
    return {
      list: [],
      columns: [
        'email',
        'phone',
        'taxId',
        'id',
      ]
    };
  },
  methods: {},
  async created() {
    const response = await getMLDocument('/example.json');
    
    this.list = JSON.parse(response.xmlString).submissions;
  },
};
</script>

<style scoped>
textarea {
  width: 100%;
  height: 400px;
  resize: none;
}

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
