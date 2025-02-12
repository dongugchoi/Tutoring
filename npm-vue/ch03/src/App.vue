<script>
  export default {
    data() {
      return {
        name: 'chulsu',
        age: 19,
        message:'<h1>Hello Vue.js!</h1>',
        ClassName : `red-color`,
        visiable: true,
        unvisible: false,
        condition:'A',
        condition1:true,
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
  <!-- v-if : 조건부 렌더링 : 디렉티브에 할당된 값의 참 / 거짓에 따라 HTML 요소를 렌더링하거나 렌더링하지않는것 -->
  <p v-if="visiable">이 요소는 렌더링 됩니다.</p>
  <p v-if="unvisible">이 요소는 렌더링 됩니다.></p>
  
  <p v-if="condition === 'A' ">이 데이터는 A 입니다.</p>
  <p v-else-if="condition === 'B' ">이 데이터는 B 입니다.</p>
  <p v-else-if="condition === 'C' ">이 데이터는 C 입니다.</p>
  <p v-else-if="condition === 'D' ">이 데이터는 D 입니다.</p>
  <p v-else>어떠한 조건에도 해당하지 않습니다.</p>
  
  <p v-show="condition1">참</p>
  <p v-show="!condition1">참</p>
</template>

<style scoped>
  .red-color{
    color: red;
  }
</style>
