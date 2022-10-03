<template>
  <div :class="['day', { active: isActive }]">
    <div class="head">
      {{ content.day }}
    </div>
    <div class="body">
      <div>
        <Lesson v-for="lesson in lessons" :content="lesson" :key="lesson.id" />
      </div>
      <AddLesson :day="content.day" />
    </div>
    <div class="foot">
    </div>
  </div>
</template>
<script>
import AddLesson from './addLesson.vue';
import Lesson from './lesson.vue';
export default {
  name: "calendar-card",
  props: ["content"],
  data() {
    return {
      isActive: false
    };
  },
  mounted() {
    if (this.content.day.slice(0, 3) === (new Date().toString().slice(0, 3)).toLowerCase())
      this.isActive = true;
  },
  computed: {
    lessons () {
      return this.$store.getters.lessonsByDay(this.content.day)
    }
  },
  components: { AddLesson, Lesson }
}
</script>
<style lang="scss" scoped>
@import '../variables';

.day {
  min-width: 300px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50px 1fr 20px;

  .head {
    background-color: $orange;
    border-radius: 15px 15px 0 0;
    color: $blue;
    font-weight: 700;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .body {
    border: 1px solid $orange;
    border-top: none;
    border-bottom: none;
    min-height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .foot {
    background-color: $orange;
    border-radius: 0 0 20px 20px;
  }
}

.active {
  border: 3px solid $blue;
  border-radius: 18px 18px 22px 22px;
}
</style>