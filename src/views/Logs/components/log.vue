<template>
  <p class="log">
    {{ content }}
  </p>
</template>
<script>
export default {
  name: "log-card",
  props: {
    content: {
      type: String,
      required: true
    }
  }
}
</script>
<style lang="scss">
  @import "../../../variables";
  .log {
    border: 1px solid $blue;
    font-size: 1.5rem;
    padding: 1rem;
    margin: 5px;
  }
</style>