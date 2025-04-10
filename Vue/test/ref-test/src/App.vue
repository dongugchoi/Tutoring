<template>
  <div>
    <h2>ref & $refs 예제</h2>
    <input ref="myInput" type="text" placeholder="텍스트를 입력하세요" />
    <br><br>
    <button @click="focusInput">입력창에 포커스</button>
    <button @click="showInputValue">입력값 확인</button>
  </div>
</template>

<script>
export default {
  methods: {
    focusInput() {
      // ref로 등록한 input 요소에 포커스
      this.$refs.myInput.focus();
    },
    showInputValue() {
      // ref로 등록한 input 요소의 value 출력
      const value = this.$refs.myInput.value;
      alert(`입력한 값: ${value}`);
    }
  }
};
</script>

<style scoped>
input {
  padding: 8px;
  font-size: 16px;
}
button {
  margin-right: 8px;
  padding: 8px 12px;
}
</style>
