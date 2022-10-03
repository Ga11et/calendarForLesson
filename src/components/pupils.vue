<template>
  <section class="pupilsCont">
    <div class="left"></div>
    <div class="pupils">
      <Pupil v-for="pupil in pupils" :content="pupil" :key="pupil.id" />
      <AddPupil />
    </div>
  </section>
</template>
<script>
import Pupil from './pupil.vue';
import AddPupil from './addPupil.vue';
export default {
    name: "pupils-container",
    mounted() {
        this.$store.dispatch("fetchPupils");
    },
    computed: {
        pupils() {
            return this.$store.getters.pupils;
        }
    },
    components: { Pupil, AddPupil }
}
</script>
<style lang="scss" scoped>
@import '../variables';
.pupilsCont{
  width: 1280px;
  margin: 10px;
  display: grid;
  grid-template-columns: 20px min-content;

  .left{
    background-color: $orange;
    border-radius: 13px 0 0 13px;
  }

  .pupils{
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1px;
  }
}
</style>