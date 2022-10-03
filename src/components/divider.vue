<template>
  <div class="cont">
    <div class="line"></div>
  </div>
</template>
<script>
export default {
  name: 'divider'
}
</script>
<style lang="scss" scoped>
  @import '../variables';
  .cont{
    width: 100%;
    padding-top: 30px;
    padding-bottom: 30px;
    .line{
      border-bottom: 1px solid $orange;
    }
  }
</style>