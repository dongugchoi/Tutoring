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

<form id="loginform">
  <label v-for="(fruit, index) in fruits" :key="index">
    <input type="checkbox" v-model="selectedFruits" :value="fruit"> {{ fruit }}
  </label>
</form>
<p>선택된 과일: {{ selectedFruits }}</p>

<form id="loginform">
  <label for="male">
    <input type="radio" id="male" name="gender" v-model="gender" value="male">male</input>
  </label>
  <label for="female">
    <input type="radio" id="female" name="gender" v-model="gender" value="female">female</input>
  </label>
  <button type="button" @click="printGender">확인</button>
</form>

<form id="loginform">
  <select v-model="selectItem">
    <option value="coffee">coffee</option>
    <option value="tea">tea</option>
    <option value="cafeLatte">cafeLatte</option>
  </select>
  <button type="button" @click="printSelectedItem">확인</button>
</form>

<!-- 한글은 한글자씩 밀리기때문에 이벤트속성으로 -->
<input type="text" @input="onChangeHandler($event)" />
{{ messages }}
<br/>
<!-- 한국어, 일본어, 중국어를 제외한 언어는 v-model을 사용 -->
<input type="text" v-model="messages" />
{{ messages }}
<br/>
<select v-model="selectd" @change="onChangeHandle">
  <option value="apple">apple</option>
  <option value="banana">banana</option>
  <option value="orange">orange</option>
</select>
가격 : {{ price }} 원

<form @submit="onsubmitHandler">
  <button type="submit">전송</button>
</form>

<!-- keyup : 키보드의 키를 눌렀다가 뗏을 때 발생하는 이벤트 
     keypress : 키보드의 키를 누르고 있을 때 발생
     keydown : keyup과 비슷하지만 입력한 키의 종류(esc키를 눌렀는지 shift를 눌렀는지 등)에 초점을 맞춘다.
-->
<input type="text" @keyup="onKeyupHandler"/>
<input type="text" @keypress="onkeypressHandler"/>
<input type="text" @keydown="onkeydownHandler"/>


</div>
</template>

<script>
  export default {
    data() {
      return {
        name: 'chulsu',
        gender:'male',
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
        selectedFruits:[],
        selectItem : 'cafeLatte',
        selectd:'banana',
        price:500,
      }
    },

    methods:{

      printGender(){
        console.log(this.gender)
      }, 

      printData(){
        console.log(this.messages)
      },

      clickHandler(){
        alert('클릭됬음')
      },

      printSelectedItem(){
        console.log(this.selectItem)
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
      },

      fruit(){
        this.fruits = ture
      },

      onChangeHandler($event){
        this.messages = $event.target.value;
      },

      onChangeHandle($event){
        if(this.selectd === 'banana'){
          this.price = 500;
        }
        if(this.selectd === 'apple'){
          this.price = 700;
        }
        if(this.selectd === 'orange'){
          this.price = 1000;
        }
      },

      onsubmitHandler(e){
        // 기본전송이벤트 방지
        e.preventDefault();
        console.log('onSubmit Handler!');
      },

      onKeyupHandler(){
        console.log(`keyup event!`);
        
      },

      onkeypressHandler(){
        console.log(`keypress event!`);
      },

      onkeydownHandler(){
        console.log(`keydown event!`);
      }


    }
  }
</script>



<style scoped>
  .red-color{
    color: red;
  }
</style>
