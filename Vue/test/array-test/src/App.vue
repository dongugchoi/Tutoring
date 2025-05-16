<template>
  <div id="app">
    <h2>배열인지 확인하기</h2>
    
    <input v-model="inputValue" placeholder='["a", "b"] 또는 "문자열"' />
    <button @click="checkIsArray">확인</button>

    <p v-if="result !== null">
      결과: <strong>{{ result ? "배열입니다 ✅" : "배열이 아닙니다 ❌" }}</strong>
    </p>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      inputValue: "",
      result: null
    };
  },
  methods: {
    checkIsArray() {
      try {
        // 문자열을 실제 값으로 변환
        const parsed = JSON.parse(this.inputValue);
        this.result = Array.isArray(parsed);
      } catch (e) {
        this.result = false; // JSON 파싱 실패 → 배열 아님 처리
      }
    }
  }
};
</script>

<style scoped>
#app {
  max-width: 400px;
  margin: 50px auto;
  font-family: "Segoe UI", sans-serif;
  text-align: center;
}
input {
  width: 80%;
  padding: 8px;
  margin-bottom: 10px;
}
button {
  padding: 6px 12px;
  margin-bottom: 10px;
}
</style>
