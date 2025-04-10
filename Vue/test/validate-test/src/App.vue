<template>
  <div id="app">
    <h1>이메일 유효성 검사</h1>
    <input
      v-model="email"
      @input="validateEmail"
      placeholder="이메일을 입력하세요"
    />
    <p :style="{ color: isValid ? 'green' : 'red' }">
      {{ message }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      isValid: false,
      message: '',
    };
  },
  methods: {
    validateEmail() {
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$/;
      this.isValid = regex.test(this.email);
      this.message = this.isValid
        ? '유효한 이메일 형식입니다.'
        : '잘못된 이메일 형식입니다.';
    },
  },
};
</script>

<style scoped>
#app {
  max-width: 400px;
  margin: 100px auto;
  text-align: center;
}
input {
  width: 100%;
  padding: 8px;
  font-size: 16px;
}
p {
  margin-top: 10px;
  font-weight: bold;
}
</style>
