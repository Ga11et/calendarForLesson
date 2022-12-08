<template>
  <Icons type="loading" v-if="isLoading" class="svg" />
  <template v-else>
    <section class="logs">
      <Log v-for="log in logs" :key="log.id" :content="log.log" />
    </section>
    <div class="actions">
      <button
        class="clearButton"
        @click="clearHandler">Очистить логи</button>
    </div>
  </template>
</template>
<script>
import Icons from "../../components/icons.vue"
import Log from './components/log.vue'

export default {
  name: "logs",
  mounted() {
    this.$store.dispatch("getLogs")
  },
  computed: {
    logs () {
      return this.$store.getters.logs
    },
    isLoading () {
      return this.$store.getters.isLogsLoaded
    }
  },
  methods: {
    clearHandler () {
      this.$store.dispatch("deleteLogs")
    }
  },
  components: { Icons, Log }
}
</script>
<style lang="scss" scoped>
  @import "../../variables";
  .logs {
    border: 1px solid $orange;
    min-height: 100px;
    max-height: 385px;
    overflow-y: hidden;
    width: 1280px;
    margin-bottom: 1rem;
  }
  .actions {
    width: 1280px;
    margin-bottom: 5rem;
    .clearButton {
      background-color: $orange;
      border: none;
      padding: 0.8rem 2rem;
      font-size: 1.5rem;
      transition: 300ms;

      &:hover {
        cursor: pointer;
        transition: 300ms;
        background-color: $red;
      }
    }
  }
</style>