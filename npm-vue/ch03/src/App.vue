<template>
  <div>
    <!-- <Test /> -->
    <!-- <Test2 /> -->
    <Style />
    <PlusMinusTest />
  </div>
</template>

<script>
  import Test from './Test.vue'
  import Test2 from './Test2.vue'
  import Style from './Style.vue';
  import PlusMinusTest from './PlusMinusTest.vue';

  export default{
    components: {
      Test,
      Test2,
      Style,
      PlusMinusTest,
    }
  }
</script>

<style scoped>

</style>