<template>
  <main class="mainApp">
    <Calendar />
    <Divider />
    <Pupils />
    <Divider />
    <Logs />
  </main>
</template>

<script>
import Pupils from './components/pupils.vue';
import Calendar from './components/calendar.vue';
import Divider from './components/divider.vue';
import Logs from './views/Logs/logs.vue';

export default {
    name: "main-app",
    components: { Pupils, Calendar, Divider, Logs }
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
