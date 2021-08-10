<template>
  <div>
    <div @click="openModal">
      <slot name="button"></slot>
    </div>
    <div ref="modal" class="modal" style="align-items: center">
      <div ref="content" class="modal-content">
        <slot name="content" class="content"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openModal() {
      this.$refs.modal.className = "modal open";
      setTimeout(() => {
        this.$refs.modal.className = "modal open effect";
      }, 0);
    },
    closeModal() {
      this.$refs.modal.className = "modal open";
      setTimeout(() => {
        this.$refs.modal.className = "modal";
      }, 300);
    },
  },
  mounted() {
    const closeElements = this.$refs.content.querySelectorAll(".close");

    closeElements.forEach((element) => {
      element.addEventListener("click", this.closeModal.bind(this));
    });
  },
};
</script>


<style scoped>
body,
html {
  --modal-content-padding: 0.8rem 1rem;
  --modal-content-background: white;
}

.modal.open {
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  color: black;
  overflow: auto;
  opacity: 1;
  z-index: 888;
  transition: all 0.3s;
}

.modal.open.effect {
  background-color: rgba(0, 0, 0, 0.4);
}

.modal .modal-content {
  opacity: 0;
  margin-top: -50px;
  transition: all 0.3s;
}

.modal.open.effect .modal-content {
  opacity: 1;
  margin-top: 0px;
}

.modal-content {
  background-color: white;
  width: 95%;
  margin-top: -50px;
}

.content {
  display: block;
}

.modal {
  display: none;
  background-color: transparent;
}

.content {
  padding: var(--modal-content-padding);
}
.close {
  height: fit-content;
}
.title {
  font-weight: bold;
}
.modal-content div p {
  margin: 0 !important;
}
@media (min-width: 768px) {
  .modal-content {
    width: 80%;
  }
}
@media (min-width: 1025px) {
  .modal-content {
    width: 70%;
  }
}
@media (min-width: 1280px) {
  .modal-content {
    width: 50%;
  }
}
</style>
