<template>
  <div id="app">
    <h1>Vue 2 - Object.assign & join 예제</h1>

    <section class="example-box">
      <h2>Object.assign 결과</h2>
      <pre>{{ mergedUser }}</pre>
    </section>

    <section class="example-box">
      <h2>join 결과</h2>
      <p>{{ fruitString }}</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      user: {
        name: '홍길동',
        age: 30
      },
      extra: {
        job: '개발자',
        location: '서울'
      },
      fruits: ['사과', '바나나', '포도']
    };
  },
  computed: {
    // Object.assign 사용
    mergedUser() {
      return Object.assign({}, this.user, this.extra);
    },
    // join 사용
    fruitString() {
      return this.fruits.join(', ');
    }
  }
};
</script>

<style scoped>
#app {
  font-family: 'Arial', sans-serif;
  padding: 2rem;
}

.example-box {
  margin-bottom: 2rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: #f9f9f9;
}
</style>
