<template>
  <div class="container">
    <h4 class="title">HTML Tags</h4>
    
    <a href="https://www.w3schools.com/TAGS/ref_byfunc.asp" target="_blank">HTML Element Reference - By Category</a>
  </div>
</template>

<script>
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
  methods: {}
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
