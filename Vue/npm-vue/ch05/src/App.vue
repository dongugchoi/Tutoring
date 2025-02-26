<script>
import FirstChild from "./components/FirstChild.vue";
import UserProfile from "./components/UserProfile.vue";


// 지역등록 컴포넌트
export default{
  components: {
    FirstChild,
    UserProfile,
  },

  data(){
    return{
      visible:true,
    }
  },

  beforeCreate(){
    console.log("Before Create");
  },

  created(){
    console.log("Created");
    setTimeout(() =>{
      this.visible = false;
    }, 3000)
  },

  beforeMount(){
    console.log("Before Mount");
  },

  mounted(){
    console.log("Mounted");
    const children = this.$refs.child.num
    const childDoubleNum = this.$refs.child.doubleNum
    console.log(`doubleNum: ${children}, childDoubleNum: ${childDoubleNum}`);
    setTimeout(()=>{
      this.$refs.child.increment();
      console.log(`메서드 호출 전 : ${childNum}`);
      console.log(`메서드 호출 전 : ${childDoubleNum}`);
    })
  },

  beforeUpdate(){
    console.log("Before Update");
  },

  updated(){
    console.log("Updated");
  },
  
  beforeUnmount(){
    console.log("Before Unmount");
  },

  unmounted(){
    console.log("Unmounted");
  },


}
</script>

<template>
  <FirstChild v-if="visible" ref="child"/>
  <!-- 문자열 전달이아닌 숫자 자료형으로 전달하고싶으면 v-bind 디렉티브로 바인딩한다. 
      문자열 자료형값을 지정해주고싶으면 ``으로 지정해준다. 
  -->
  <UserProfile :name="`김철수`" :age="30"/>
</template>

<style scoped>
  h1, p{
    color: orange !important;
  }
</style>
