<template>
  <div class="container">
    <div class="box1">
      <div class="scroll-content">
        <p v-for="i in 100" :key="i"> Box1 내용 줄 {{ i }}</p>
      </div>
    </div>
    <div class="box2">
      <p>✅ Box2는 스크롤 영향을 받지 않아요!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
.container {
  display: flex;
  height: 100vh;
}

.box1 {
  flex: 1;
  overflow-y: auto;
  overscroll-behavior: contain; 
  border-right: 1px solid #ccc;
}

.scroll-content {
  padding: 16px;
}

.box2 {
  width: 300px;
  padding: 16px;
  background-color: #f2f2f2;
}
</style>
