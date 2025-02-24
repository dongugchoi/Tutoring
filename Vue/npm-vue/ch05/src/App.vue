<script>
import FirstChild from "./components/FirstChild.vue";

// 지역등록 컴포넌트
export default{
  components: {
    FirstChild,
  }
}

</script>

<template>
  <FirstChild/>
</template>

<style scoped>
  h1, p{
    color: orange !important;
  }
</style>
