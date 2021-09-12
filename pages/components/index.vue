<template>
  <div class="container">
    <h2>Components</h2>
    <ul>
      <li><NuxtLink to="/components/modal">Modal</NuxtLink></li>
    </ul>
  </div>
</template>

<script>
import { getMLDocument } from "@/components/utils/functions";

export default {}
</script>

<style scoped>

textarea {
  width: 100%;
  height: 400px;
  resize: none;
}
</style>
