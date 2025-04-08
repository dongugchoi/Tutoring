<template>
  <div id="app">
    <h1>Computed 예제</h1>
    <label>First Name: <input v-model="firstName" @input="firstName=$event.target.value" /></label><br />
    <label>Last Name: <input v-model="lastName" @input="lastName=$event.target.value" /></label><br />
    <p>Full Name: <strong>{{ fullName }}</strong></p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      firstName: '최',
      lastName: '동욱'
    };
  },
  computed: {
    fullName() {
      // 데이터에 의존하여 자동으로 계산됨
      return `${this.firstName}${this.lastName}`;
    }
  }
};
</script>

<style scoped>
input {
  margin: 5px 0;
}
</style>
