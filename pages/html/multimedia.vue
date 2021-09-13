<template>
  <div class="container">
    <h2 class="title">Multimedia</h2>
    <div class="container-section">
    <h2 class="title-module">Image</h2>
        <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML">Documentation</a>
    <pre
      class="line-numbers language-markup"
    ><code>&lt;img src="/assets/seed-icon.png" width="40px"&gt;</code></pre>
    <img src="@/assets/seed-icon.png" width="100px" />
    <img src="@/assets/seed-icon.png" width="80px" />
    <img src="@/assets/seed-icon.png" width="60px" />
    <img src="@/assets/seed-icon.png" width="40px" />
    <img src="@/assets/seed-icon.png" width="20px" />
    <img src="@/assets/seed-icon.png" width="10px" />
    </div>
    <div class="container-section">
    <h2 class="title-module">Video</h2>
    <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video">Documentation</a>
    <pre
      class="line-numbers language-markup"
    ><code>&lt;video src="https://s3.eu-central-1.amazonaws.com/pipe.public.content/short.mp4" controls&gt;</code><code>&lt;/video&gt;</code></pre>
    <video controls>
      <source
        src="https://s3.eu-central-1.amazonaws.com/pipe.public.content/short.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
    </div>
        <div class="container-section">
    <h2 class="title-module">Audio</h2>
    <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio">Documentation</a>
    <pre
      class="line-numbers language-markup"
    ><code>&lt;audio controls&gt;</code><code>&lt;/audio&gt;</code></pre>
    <audio controls>
  <source src="https://www.kozco.com/tech/piano2-CoolEdit.mp3" type="audio/mpeg">
Your browser does not support the audio element.
</audio>
</div>
  </div>
</template>

<script>
import { pageInit } from "/components/utils/prism";

export default {
  mounted() {
    pageInit();
  },
};
</script>

<style scoped>
textarea {
  width: 100%;
  height: 400px;
  resize: none;
}

pre {
    margin-bottom: 30px;
}
</style>
