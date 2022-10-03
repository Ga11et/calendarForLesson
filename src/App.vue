<template>
  <main class="mainApp">
    <Calendar />
    <Divider />
    <Pupils />
  </main>
</template>

<script>
import Pupils from './components/pupils.vue';
import Calendar from './components/calendar.vue';
import Divider from './components/divider.vue';
export default {
    name: "main-app",
    components: { Pupils, Calendar, Divider }
}
</script>

<style lang="scss" scoped>
@import './_variables.scss';
.mainApp{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
