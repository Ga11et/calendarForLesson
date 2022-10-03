<template>
  <div class="addCont">
    <button v-if="!isActive" @click="setActive(true)" class="btn">add</button>
    <form v-else class="addForm">
      <input v-model="startTime" type="time" class="input time" />
      <input v-model="endTime" type="time" class="input time" />
      <select v-model="name" class="input">
        <option v-for="pupil in pupils" :key="pupil.id" >{{ pupil.name }}</option>
      </select>
      <button type="submit" class="sumbitbtn" @click.prevent="submitHandler">add</button>
    </form>
  </div>
</template>
<script>
export default {
  name: 'add-lesson',
  props: ['day'],
  data() {
    return {
      isActive: false,
      startTime: '00:00',
      endTime: '00:00',
      name: ''
    }
  },
  methods: {
    setActive (value) {
      this.isActive = value
    },
    submitHandler () {
      this.isActive = false
      this.$store.dispatch('addLesson', { startTime: this.startTime, endTime: this.endTime, name: this.name, day: this.day })
    }
  },
  computed: {
    pupils () {
      return this.$store.getters.pupils
    }
  },
}
</script>
<style lang="scss" scoped>
@import '../variables';
.addCont{
  display: flex;
  .btn{
    width: 100%;
    background-color: transparent;
    border: 1px solid $orange;
    height: 50px;
    font-size: 1.2rem;
    text-transform: uppercase;
    font-weight: 500;
    transition: 600ms;

    &:hover{
      cursor: pointer;
      transition: 300ms;
      background-color: $orange;
      color: $blue;
      font-weight: 700;
    }
  }

  .addForm{
    height: 50px;
    display: grid;
    width: 100%;
    grid-template-columns: 25% 25% 30% 1fr;

    .input{
      background-color: transparent;
      border: 1px solid $orange;
      font-size: 1.2rem;
      padding-left: 10px;
    }
    
    ::-web{
      appearance: none;
    }

    .sumbitbtn{
      background-color: transparent;
      border: 1px solid $orange;
      height: 50px;
      font-size: 1.2rem;
      text-transform: uppercase;
      font-weight: 500;
      transition: 600ms;

      &:hover{
        cursor: pointer;
        transition: 300ms;
        background-color: $orange;
        color: $blue;
        font-weight: 700;
      }
    }
  }
}
</style>