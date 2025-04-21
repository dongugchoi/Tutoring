<template>
  <div id="app">
    <h1>원본 객체</h1>
    <pre>{{ original }}</pre>

    <h1>복사된 객체</h1>
    <pre>{{ cloned }}</pre>

    <button @click="changeOriginal">원본 수정</button>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'App',
  data() {
    return {
      original: {
        name: '홍길동',
        info: {
          age: 30,
          job: '개발자'
        }
      },
      cloned: {}
    }
  },
  created() {
    this.cloned = _.cloneDeep(this.original)
  },
  methods: {
    changeOriginal() {
      this.original.name = '이몽룡'
      this.original.info.job = '디자이너'
    }
  }
}
</script>

<style scoped>
pre {
  background: #f4f4f4;
  padding: 10px;
  border-radius: 5px;
}
button {
  margin-top: 10px;
  padding: 5px 10px;
}
</style>
