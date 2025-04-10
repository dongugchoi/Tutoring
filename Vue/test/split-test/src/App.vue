<template>
  <div id="app">
    <h1>문자열 Split 예제</h1>

    <input v-model="inputText" placeholder="문자열 입력 (예: 사과,바나나,포도)" />
    <input v-model="delimiter" placeholder="구분자 입력 (예: ,)" />

    <button @click="splitText">Split 실행</button>

    <h2>결과 배열</h2>
    <ul>
      <li v-for="(item, index) in resultArray" :key="index">
        {{ index }}: {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      inputText: "",
      delimiter: ",",
      resultArray: [],
    };
  },
  methods: {
    splitText() {
      if (this.delimiter === "") {
        alert("구분자를 입력해주세요!");
        return;
      }
      this.resultArray = this.inputText.split(this.delimiter);
    },
  },
};
</script>

<style scoped>
#app {
  max-width: 600px;
  margin: 50px auto;
  font-family: Arial, sans-serif;
}

input {
  margin: 5px 0;
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
}

button {
  margin-top: 10px;
  padding: 8px 16px;
}

ul {
  margin-top: 20px;
}
</style>
