<template>
  <div id="app">
    <h1>Vue 2 includes() 메서드 예제</h1>
    <input v-model="inputValue" placeholder="값을 입력하세요" />
    <button @click="checkIncludes">포함 여부 확인</button>
    <p v-if="result !== null">
      결과: <strong>{{ result ? '포함됨' : '포함되지 않음' }}</strong>
    </p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      items: ['apple', 'banana', 'cherry'],
      inputValue: '',
      result: null
    }
  },
  methods: {
    checkIncludes() {
      this.result = this.items.includes(this.inputValue.trim().toLowerCase());
    }
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 60px;
}
input {
  margin: 10px;
  padding: 5px;
}
</style>
