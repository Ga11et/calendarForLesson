<template>
  <div class="lesson">
    <div class="time">
      {{ content.starttime }} - {{ content.endtime }}
    </div>
    <div class="name">
      {{ content.pupil_name }}
    </div>
    <button class="delete" @click="deleteHandler">
      <Icons type="delete" class="svg" />
    </button>
  </div>
</template>
<script>
import Icons from './icons.vue';
export default {
    name: "lesson",
    props: ["content"],
    components: { Icons },
    methods: {
      deleteHandler () {
        this.$store.dispatch('deleteLesson', { id: this.content.id })
      }
    },
}
</script>
<style lang="scss" scoped>
@import '../variables';
.lesson{
  border: 2px solid $blue;
  margin: 5px;
  padding: 10px;
  display: grid;
  grid-template-columns: 25% 60% 1fr;
  font-size: 1.2rem;

  .time{
    display: flex;
    align-items: center;
    border-right: 1px solid $blue;
    padding: 5px;
  }

  .name{
    display: flex;
    align-items: center;
    border-right: 1px solid $blue;
    padding-left: 20px;
  }

  .delete{
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
      cursor: pointer;

      .svg{
        fill: $orange;
        transition: 300ms;
      }
    }

    .svg{
      width: 30px;
      height: 30px;
      fill: $blue;
      transition: 600ms;
    }
  }
}
</style>