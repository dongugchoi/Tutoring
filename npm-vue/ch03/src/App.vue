<script>
  export default {
    data() {
      return {
        name: 'chulsu',
        age: 19,
        message:'<h1>Hello Vue.js!</h1>',
        ClassName : `red-color`,
      }
    },
  }
</script>

<template>
  <p>{{ name }}</p>
  <p>{{ age }}</p>
  <p>{{ 10*20*30 }}</p>
  <p>{{ name.toUpperCase() }}</p>
  <!-- v-html : html태그를 적용시킨다. -->
  <p v-html="message"></p>  
  <!-- v-text : text로 인식한다. -->
  <p v-text="message"></p>
  <!-- v-pre : 컴파일 할 때 <template> 태그 영역의 컴파일을 건너뛰게한다. -->
  <p v-pre>{{ message }}</p>
  <!-- v-bind:속성 : HTML 속성에 자바스크립트 값을 넣을 때 사용 -->
  <p v-bind:class="ClassName">Hello, Vue.Js</p>
  <!-- :속성 : 축약형 -->
  <p :class="ClassName">Hello</p>
</template>

<style scoped>
  .red-color{
    color: red;
  }
</style>
