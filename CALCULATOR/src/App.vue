<template>
  <body>
    <div class="calculator">
      <form name="forms">
        <input v-model="output" type="text" name="output" readonly />
        <input type="button" class="clear" value="C" />
        <input type="button" class="operator" value="/" />
        <input type="button" value="1" />
        <input type="button" value="2" />
        <input type="button" value="3" />
        <input type="button" class="operator" value="*" />
        <input type="button" value="4" />
        <input type="button" value="5" />
        <input type="button" value="6" />
        <input type="button" class="operator" value="+" />
        <input type="button" value="7" />
        <input type="button" value="8" />
        <input type="button" value="9" />
        <input type="button" class="operator" value="-" />
        <input type="button" class="dot" value="." />
        <input type="button" value="0" />
        <input type="button" class="operator result" value="=" />
      </form>
    </div>
  </body>
</template>

<script>
export default{
  data(){
    return{
      output: null, // 출력칸에 표시되어 사용자에게 노출되는 값
      prev: null, // 이전에 입력된 값 또는 연산 결과
      cur: null, // 현재 입력된 값
      operator: null, // 연산자
    }
  },

  methods: {

  },
}
</script>

<style scoped>
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.calculator {
  width: 287px;
  border: 1px solid #333;
  background-color: #ccc;
  padding: 5px;
}

.calculator form {
  display: grid;
  grid-template-columns: repeat(4, 65px);
  grid-auto-rows: 65px;
  grid-gap: 5px;
}

.calculator form input {
  border: 2px solid #333;
  cursor: pointer;
  font-size: 19px;
}

.calculator form input:hover {
  box-shadow: 1px 1px 2px #333;
}

.calculator form .clear {
  background-color: #ed4848;
}

.calculator form .operator {
  background-color: orange;
}

.calculator form .dot {
  background-color: green;
}

.calculator form input[type='text'] {
  grid-column: span 4;
  text-align: right;
  padding: 0 10px;
}

.calculator form .clear {
  grid-column: span 3;
}

.calculator form .result {
  grid-column: span 2;
}
</style>
