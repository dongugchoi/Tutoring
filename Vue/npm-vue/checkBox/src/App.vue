<template>
  <!--체크박스-->
  <div>
    <div class="form-control">
      <h2>What are you interested in?</h2>
      <div>
        <input
          id="interest-news"
          name="interest"
          type="checkbox"
          value="news"
          v-model="interest"
        />
        <label for="interest-news">News</label>
      </div>
      <div>
        <input
          id="interest-tutorials"
          name="interest"
          type="checkbox"
          value="tutorials"
          v-model="interest"
        />
        <label for="interest-tutorials">Tutorials</label>
      </div>
      <div>
      <input
          id="interest-nothing"
          name="interest"
          type="checkbox"
          value="nothing"
          v-model="interest"
        />
        <label for="interest-nothing">Nothing</label>
      </div>
    </div>

    <!--라디오버튼-->
    <div class="form-control">
      <h2>How do you learn?</h2>
      <div>
        <input
          id="how-video"
          name="how"
          type="radio"
          value="video"
          v-model="how"
        />
        <label for="how-video">Video Courses</label>
      </div>
      <div>
        <input
          id="how-blogs"
          name="how"
          type="radio"
          value="blogs"
          v-model="how"
        />
        <label for="how-blogs">Blogs</label>
      </div>
      <div>
        <input
          id="how-other"
          name="how"
          type="radio"
          value="other"
          v-model="how"
        />
        <label for="how-other">Other</label>
      </div>
    </div>
    <div>
      <button @click="submitForm">Submit</button>
    </div>
</div>
</template>

<script>
export default {
  data(){
    return{
      interest: [], //체크박스 값
      how: null, //라디오버튼 값
    }
  },

  methods:{
    submitForm() {
      console.log('Checkboxes');
      console.log(this.interest);
      console.log('Radio buttons');
      console.log(this.how);
      this.interest = []; //리셋
      this.how = null; //리셋
    },
  }
}
</script>

<style>

</style>

<!-- 
  여러 체크박스에 같은 name을 붙이면 자동으로 그룹이 생성된다.
  그룹 자체는 괜찮지만 체크박스를 개별로 처리할 수 있어야한다.
  따라서 interest의 초기값을 null이 아닌, 빈 배열로 설정해야한다.
  그러면 Vue는 유저가 선택한 요소들을 이 배열에 추가해준다.
-->
<!--
  각 input요소에 서로다른 value 필수!
  다시 리로딩하여 체크박스를 클릭해보면 하나씩 체크할 수 있다.
  체크박스 하나만 선택해제했는데 세개 전부가 같이 해제된다.
  → 체크박스 input요소에 value를 추가해야한다. 그리고 그 value는 input요소마다 다른 값으로 설정해야한다.
  그렇지 않으면 Vue는 배열에 어떤 값을 추가해야할지 알 수 없다.
 -->