<template>
  <div>
    <p>find 결과: {{ getSelectedNumber() }}</p>
    <p>filter 결과: {{ getFilteredNumbers().join(', ') }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numbers: [1, 2, 3, 4, 5]
    };
  },
  methods: {
    getSelectedNumber() {
      // find : 조건에 맞는 첫번째 요소만 반환한다. 여러개 있어도 가장 먼저 찾은 단일값만 나온다.
      // 조건에 맞는 첫번째요소는 배열에 있는 타입과 같이 반환시킨다.
      return this.numbers.find(num => num > 3);
    },
    // filter : 조건에 맞는 모든 요소를 배열로 반환한다. 조건에 맞는게 없으면 빈 배열을 반환
    getFilteredNumbers() {
      return this.numbers.filter(num => num > 3);
    }
  }
};
</script>

<style scoped>
</style>