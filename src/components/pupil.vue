<template>
  <div class="container">
    <div class="pupil">
      <h3 class="name">{{ content.name }}</h3>
      <p class="price">{{ content.price }}</p>
      <button :disabled="isPupilsLoading" @click="deleteHandler" class="deletebtn">
        <Icons type="delete" class="svg" />
      </button>
    </div>
    <div class="debts">
      <span @click="debtHandler" v-for="item in content.debt" class="debt">DEBT</span>
    </div>
    <button :disabled="isPupilsLoading" class="addDebt" @click="btnHandler">add</button>
  </div>
</template>
<script>
import Icons from './icons.vue';
export default {
    name: "pupil-card",
    props: ["content"],
    methods: {
        btnHandler() {
            this.$store.dispatch("updatePupil", { id: this.content.id, newDebt: this.content.debt + 1 });
        },
        debtHandler() {
            this.$store.dispatch("updatePupil", { id: this.content.id, newDebt: this.content.debt - 1 });
        },
        deleteHandler () {
          this.$store.dispatch("deletePupil", this.content.id);
        }
    },
    computed: {
        isPupilsLoading() {
            return this.$store.getters.isPupilsLoading;
        }
    },
    components: { Icons }
}
</script>
<style lang="scss" scoped>
@import '../variables';

.container {
  display: grid;
  grid-template-columns: 300px min-content min-content;
  .pupil {
    padding: 10px;
    height: 50px;
    display: inline-flex;
    align-items: center;
    border: 1px solid $orange;
    position: relative;

    .name {
      font-size: 1.2rem;
      font-weight: 500;
      line-height: 24px;
    }

    .price {
      padding-left: 10px;
      font-size: 1.3rem;
      font-weight: 500;
      line-height: 24px;
    }

    .deletebtn{
      padding: 0;
      background-color: transparent;
      border: none;
      position: absolute;
      right: 10px;
      display: flex;
      align-items: center;

      &:hover{
        cursor: pointer;

        .svg{
          fill: $orange;
          transition: 200ms;
        }
      }

      .svg{
        width: 20px;
        transition: 600ms;
      }
    }
  }

  .debts {
    display: flex;
    flex-direction: row;
    .debt{
      background-color: $orange;
      color: $blueDark;
      font-weight: 700;
      font-size: 1.2rem;
      height: 50px;
      display: inline-flex;
      width: 70px;
      align-items: center;
      justify-content: center;

      &:hover{
        cursor: pointer;
      }
    }
  }

  .addDebt {
    height: 50px;
    width: 60px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: 1px solid $orange;
    border-left: none;
    border-radius: 0 15px 15px 0;
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 500;
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
</style>