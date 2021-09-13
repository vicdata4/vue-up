<template>
  <div class="container">
    <h2 class="title">Form</h2>
     <ExampleForm @submit-form="formSubmit" />
  </div>
</template>

<script>
import { emailValidator } from '@/components/utils/functions.js';

export default {
  methods: {
    formSubmit(ev) {
      alert(JSON.stringify(ev));
    }
  }
};
</script>

<style scoped>
</style>
