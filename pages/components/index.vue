<template>
  <div class="container">
    <h2>Componentes</h2>
    <NuxtLink to="/components/modal">Modal</NuxtLink>
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
