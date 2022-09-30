<template>
  <div class="container">
    <transition name="fade" mode="out-in">
      <button v-if="!isActive" @click="setIsActive(true)" class="startbtn">Добавить</button>
      <form class="form" v-else>
        <input v-model="name" class="input name" placeholder="Имя" />
        <input v-model="price" class="input price" type="number" placeholder="Цена" />
        <button :disabled="isPupilsLoading" type="submit" @click.prevent="formHandler" class="addbtn">add</button>
      </form>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'add-pupil',
  data() {
    return {
      isActive: false,
      name: '',
      price: ''
    }
  },
  methods: {
    setIsActive (value) {
      this.isActive = value
    },
    formHandler () {
      this.isActive = false
      this.$store.dispatch('postPupil', { name: this.name, price: this.price })
    }
  },
  computed: {
    isPupilsLoading () {
      return this.$store.getters.isPupilsLoading
    }
  },
}
</script>
<style lang="scss" scoped>
@import '../variables';
@import '../transitions';
.container{
  display: flex;
  
  .startbtn{
    height: 50px;
    width: 300px;
    border: 1px solid $orange;
    background-color: $orange;
    border-radius: 0 9px 9px 0;
    font-size: 1.2rem;
    color: $blueDark;
    font-weight: 500;
    transition: 600ms;

    &:hover{
      cursor: pointer;
      background-color: transparent;
      color: $black;
      transition: 300ms;
    }
  }

  .form{
    display: flex;
    
    .input{
      border: 1px solid $orange;
      height: 50px;
      border-left: none;
      padding: 10px;
      font-size: 1.2rem;
    }

    .name{
      width: 300px;
    }

    .price{
      width: 100px;
    }

    .addbtn{
      width: 60px;
      height: 50px;
      border: 1px solid $orange;
      border-radius: 0 15px 15px 0;
      background-color: transparent;
      text-transform: uppercase;
      font-size: 1rem;
      transition: 600ms;

      &:hover{
        cursor: pointer;
        background-color: $orange;
        color: $blueDark;
        font-weight: 700;
        transition: 300ms;
      }
    }
  }
}
</style>