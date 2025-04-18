<template>
  <div id="app">
    <h1>최댓값 계산기 (Math.max.apply)</h1>
    <p>숫자 배열: {{ numbers.join(', ') }}</p>
    <p>최댓값: {{ maxNumber }}</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      numbers: [10, 5, 8, 20, 3]
    };
  },
  computed: {
    maxNumber() {
      // Math.max.apply을 사용하여 최댓값 계산
      return Math.max.apply(null, this.numbers);
    }
  }
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 60px;
}
</style>
