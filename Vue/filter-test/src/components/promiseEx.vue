<template>
    <div>
      <h2>Promise 비동기 예제</h2>
      <button @click="loadMessage">메시지 불러오기</button>
      <p v-if="loading">로딩 중...</p>
      <p v-else-if="message">{{ message }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'promiseEx',
    data() {
      return {
        message: '',
        loading: false
      };
    },
    methods: {
      loadMessage() {
        this.loading = true;
        this.message = '';
  
        this.getMessage()
          .then(res => {
            this.message = res;
          })
          .catch(err => {
            this.message = '에러 발생: ' + err;
          })
          .finally(() => {
            this.loading = false;
          });
      },
      getMessage() {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve('2초 후 도착한 비동기 메시지입니다!');
          }, 2000);
        });
      }
    }
  };
  </script>
  