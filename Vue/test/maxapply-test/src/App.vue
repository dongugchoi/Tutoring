<template>
  <div>
    <h2>숫자 배열: {{ numbers }}</h2>
    <p>최댓값: {{ maxNumber }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numbers: [10, 30, 5, 67, 22]
    };
  },
  computed: {
    maxNumber() {
      return Math.max.apply(null, this.numbers);
      // 또는: return Math.max(...this.numbers); (ES6 spread 연산자)
    }
  }
};
</script>
