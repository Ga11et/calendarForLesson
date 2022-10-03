<template>
  <svg v-if="type === 'delete'" clip-rule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"/></svg>
  <svg v-else-if="type === 'loading'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
    width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" style="align-self: flex-start;">
    <path d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50" fill="#F89B11" stroke="none">
      <animateTransform attributeName="transform" type="rotate" dur="1.3157894736842106s" repeatCount="indefinite"
        keyTimes="0;1" values="0 50 50;-360 50 50"></animateTransform>
    </path>
  </svg>
</template>
<script>
export default {
  name: 'icons',
  props: ['type']
}
</script>
<style lang="scss" scoped>
  
</style>