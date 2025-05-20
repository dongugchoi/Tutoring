<template>
  <div @click="handleParentClick" class="parent">
    <h2>부모 컴포넌트 (클릭하면 자식 클릭 이벤트가 버블링됨)</h2>
    <div @click="handleChildClick" class="child">
      자식 컴포넌트 클릭
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    handleParentClick() {
      console.log('부모 div 클릭됨');
      alert('부모 div 클릭됨');
    },
    handleChildClick() {
      console.log('자식 div 클릭됨');
      alert('자식 div 클릭됨');

      // 주석을 풀면 버블링 방지됨
      event.stopPropagation();
    }
  }
}
</script>

<style scoped>
.parent {
  padding: 30px;
  background-color: #f0f0f0;
}
.child {
  margin-top: 10px;
  padding: 20px;
  background-color: #cce5ff;
  cursor: pointer;
}
</style>
