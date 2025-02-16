<template>
  <div>
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

  <ul>
    <li v-for="(fruit,index) in fruits" :key="index">
      인덱스: {{ index }}, 값 : {{ fruit }}
    </li>
    <li v-for="(value,key,index) in user" :key="index">
      {{ index }}: {{ key }}, {{ value }}
    </li>
  </ul>
  <button v-on:click="clickHandler">클릭됨</button>
  <button v-on:click="eventHandler">클릭됨</button>
  <!-- 일반 매개변수만 사용할수는없다. event객체와 값을 함께 사용하려면 $event를 같이넘겨줘야한다.--> 
  <button @click="eventHandler($event, 'Hello')">클릭됨</button>

  <!-- keyup이벤트는 이벤트 객체를 사용해 Enter키 입력을 확인한다. -->
  <input type="text" @keyup="($event) => onKeyupHandler($event)"/>
  <!-- 수식어를 사용하면 코드가 훨씬 간단해진다. -->
  <input type="text" @keyup.enter="modifierHandler" />
  <br/>
  <button @click="plusButton">+1</button>
  <!-- v-once : 정적디렉티브, 한번만 렌더링하고 이후에는 렌더링을 하지않는다. 값이 변경되어도 화면을 업데이트하지않는다. -->
  <div v-once>{{ number }}</div>
  <br/>

  <!-- v-memo는 vue3.2 이상 지원한다. -->
  <div v-memo="[name,gender]">
    <p>{{ name }}</p>
    <p>{{ gender }}</p>
    <p>{{ age }}</p>
  </div>
<button @click="name='영희'">이름 변경</button>
<br/>
<button @click="gender='여자'">성별 변경</button>
<br/>
<button @click="age=30">나이 변경</button>
<br/>

<!-- v-model 양방향 바인딩 -->
<form>
  <label for="uid">아이디<input type="text" id="uid" v-model="uId"/></label> 
  <label for="uPwd">비밀번호<input type="password" id="uPwd" v-model="uPwd"/></label> 
  <button type="button" @click="login">로그인</button>
</form>

<form id="loginform">
  <textarea v-model="messages"></textarea>
  <button type="button" @click="printData">데이터 출력</button>
</form>





</div>
</template>

<script>
  export default {
    data() {
      return {
        name: 'chulsu',
        gender:'남자',
        age: 19,
        message:'<h1>Hello Vue.js!</h1>',
        messages:'',
        ClassName : `red-color`,
        visiable: true,
        unvisible: false,
        condition:'A',
        condition1:true,
        fruits:['apple', 'banana','orange'],
        user:{
          name: 'user1',
          age: 20,
          email: 'user1@example.com',
          address: 'seoul',
          phone: '010-1234-5678',
          hobby: ['reading','painting']
        },
        number:0,
        uId:'',
        uPwd:'',
      }
    },

    methods:{
      printData(){
        console.log(this.messages)
      },

      clickHandler(){
        alert('클릭됬음')
      },

   
      eventHandler(event, message){
        console.log(event)
        console.log(message)
      },


      // 키보드 이벤트 객체에서 keyCode 속성 13은 엔터키
      onKeyupHandler(e){
        if(e.keyCode === 13){
          console.log('Enter !')
        }
      },

      modifierHandler(){
        console.log('ModifierEnter !')
      },

      plusButton(){
        this.number++
      },

      login(){
        console.log('아이디 :',this.uId)
        console.log('비밀번호',this.uPwd)
      }
    }
  }
</script>



<style scoped>
  .red-color{
    color: red;
  }
</style>
