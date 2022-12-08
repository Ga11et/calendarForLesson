<template>
  <Icons type="loading" v-if="isLoading" class="svg" />
  <section v-else class="days">
    <CalendarCard v-for="day in days" :content="day" :key="day.id" />
  </section>
</template>
<script>
import Icons from "./icons.vue"
import CalendarCard from "./calendarCard.vue"
export default {
  name: "calendar",
  mounted() {
    this.$store.dispatch("getDays")
    this.$store.dispatch("getLessons")
  },
  computed: {
    days() {
      return this.$store.getters.days
    },
    isLoading() {
      return this.$store.getters.isCalendarLoading
    }
  },
  components: { Icons, CalendarCard }
}
</script>
<style lang="scss" scoped>
  @import '../variables';
  .svg{
    margin-top: 50px;
    width: 100%;
    height: 100px;
    stroke: $orange;
  }
  .days{
    width: 1280px;
    margin: 50px 10px 10px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
  }
  
</style>