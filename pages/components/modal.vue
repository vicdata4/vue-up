<template>
  <div class="container">
     <h2 class="title">Modal</h2>
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
  </div>
</template>

<script>
import { getMLDocument } from "@/components/utils/functions";

export default {
  data() {
    return {
    };
  },
  methods: {},
};
</script>

<style scoped>
</style>
