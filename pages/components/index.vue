<template>
  <div class="container">
    Components
    <h2>Componentes</h2>
      <Modal>
        <button slot="button">Modal Example</button>
        <div slot="content">
          Content
          <button class="close">Close</button>
        </div>
      </Modal>
      <Modal>
        <button slot="button">Modal Example 22222</button>
        <div slot="content">
          Content 22222
          <button class="close">Close2</button>
        </div>
      </Modal>
    <NuxtLink to="/components/modal">Modal</NuxtLink>
  </div>
</template>

<script>
import { getXMLFile } from "@/components/utils/functions";

export default {}
</script>

<style scoped>

textarea {
  width: 100%;
  height: 400px;
  resize: none;
}
</style>
